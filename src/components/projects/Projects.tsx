"use client";

import {
  Chip,
  Spinner,
  Table,
  Button,
  Tooltip,
  EmptyState,
} from "@heroui/react";
import { useCallback, useEffect, useRef, useState } from "react";
import AddNewProject from "./AddNewProject";
import { Pencil, Eye, Trash, BrushCleaning } from "lucide-react";
import { handleDeleteProject } from "@/actions/supabaseDeleteProject";
import { showToast } from "@/helper/toast";
import { useRouter } from "next/navigation";
import { useNotifications } from "@/hooks/zustand/useNotifications";
interface ProjectDetails {
  id: number;
  title: string;
  location: string;
  desc: string;
  status: string;
}

const statusColorMap: Record<string, "success" | "danger" | "warning"> = {
  active: "success",
  inactive: "danger",
  "On Leave": "warning",
};

const ITEMS_PER_PAGE = 6;

const columns = [
  { id: "project", name: "Project Name", isHeader: true },
  { id: "location", name: "Location" },
  { id: "status", name: "Status" },
  { id: "description", name: "Description" },
  { id: "action", name: "Action" },
];

const Projects = ({ projectsData }: { projectsData: ProjectDetails[] }) => {
  // const addNotifications = useNotification((state) => state.addNotification);
  const addNotification = useNotifications((state) => state.addNotifications);

  const [items, setItems] = useState<ProjectDetails[]>(() =>
    projectsData.slice(0, ITEMS_PER_PAGE),
  );
  const [isLoading, setIsLoading] = useState(false);
  const isLoadingRef = useRef(false);
  const hasMore = items.length < projectsData.length;

  const loadMore = useCallback(() => {
    if (!hasMore || isLoadingRef.current) return;
    isLoadingRef.current = true;
    setIsLoading(true);
    setTimeout(() => {
      setItems((prev) => projectsData.slice(0, prev.length + ITEMS_PER_PAGE));
      setIsLoading(false);
      requestAnimationFrame(() => {
        isLoadingRef.current = false;
      });
    }, 1500);
  }, [hasMore, projectsData]);

  const router = useRouter();

  // to display the new data even after the deleting the project
  useEffect(() => {
    setItems(projectsData.slice(0, ITEMS_PER_PAGE));
  }, [projectsData]);

  // handle delete the project from the table
  const handleDelete = async (id: number) => {
    try {
      const response = await handleDeleteProject(id);
      if (response?.success) {
        showToast(response.message, "success");
        addNotification(`You have deleted a project`);
        router.refresh();
      } else {
        showToast(response.message, "error");
      }
    } catch (error) {
      if (error instanceof Error) {
        showToast(error.message, "error");
        throw new Error("Something went wrong");
      }
    }
  };

  return (
    <div>
      <AddNewProject />

      <Table className="relative">
        <Table.ScrollContainer className="h-125   overflow-y-auto">
          <Table.Content
            aria-label="Async loading table"
            className="min-w-150 "
          >
            <Table.Header className="sticky top-0 z-10 bg-stale-500 rounded-none">
              {/* get the coulms header */}
              {columns.map((col) => (
                <Table.Column
                  key={col.id}
                  id={col.id}
                  isRowHeader={col.isHeader}
                  className="text-lg py-4 "
                >
                  {col.name}
                </Table.Column>
              ))}
            </Table.Header>
            {/* body of the table */}
            <Table.Body
              renderEmptyState={() => (
                <EmptyState className="flex w-full h-full  flex-col items-center justify-center gap-4 text-center">
                  <BrushCleaning className="size-6 text-muted" />
                  <span className="text-sm text-muted">No results found</span>
                </EmptyState>
              )}
            >
              <Table.Collection items={items}>
                {(projectsData) => (
                  <Table.Row className="hover:bg-sky-900 py-3 ">
                    <Table.Cell className="table__cell rounded-l-sm ">
                      {projectsData.title}
                    </Table.Cell>

                    <Table.Cell className="table__cell">
                      {projectsData.location}
                    </Table.Cell>
                    <Table.Cell className="table__cell">
                      <Chip
                        color={statusColorMap[projectsData.status]}
                        size="sm"
                        variant="soft"
                      >
                        {projectsData.status}
                      </Chip>
                    </Table.Cell>
                    <Table.Cell className="table__cell">
                      {projectsData.desc.slice(0, 20)}...
                    </Table.Cell>
                    <Table.Cell className=" flex  gap-2 text-center rounded-r-sm">
                      <Tooltip>
                        <Button
                          size="sm"
                          className="bg-sky-900/70"
                          aria-label="edit project"
                        >
                          <Pencil size={16} />
                        </Button>
                        <Tooltip.Content>
                          <p>Edit Project</p>
                        </Tooltip.Content>
                      </Tooltip>
                      <Tooltip>
                        <Button
                          size="sm"
                          className="bg-sky-600/70 "
                          aria-label="view details"
                        >
                          <Eye size={16} />
                        </Button>
                        <Tooltip.Content>
                          <p>View Details</p>
                        </Tooltip.Content>
                      </Tooltip>
                      <Tooltip>
                        <Button
                          onClick={() => handleDelete(projectsData.id)}
                          size="sm"
                          className="bg-red-900/70"
                          aria-label="remove project"
                        >
                          <Trash size={16} />
                        </Button>
                        <Tooltip.Content>
                          <p>Remove Project</p>
                        </Tooltip.Content>
                      </Tooltip>
                    </Table.Cell>
                  </Table.Row>
                )}
              </Table.Collection>
              {!!hasMore && (
                <Table.LoadMore
                  isLoading={isLoading}
                  scrollOffset={0}
                  onLoadMore={loadMore}
                >
                  <Table.LoadMoreContent>
                    <Spinner size="md" />
                  </Table.LoadMoreContent>
                </Table.LoadMore>
              )}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default Projects;
