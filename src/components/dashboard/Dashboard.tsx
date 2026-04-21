import CustomCard from "@/custom/Card";
import Charts from "./Charts";

const dashboardConst = [
  {
    CardTitle: "Projects",
    CardDescription: "Manage your projects and tasks",
    CardFooter: "Go to Projects",
    href: "/projects",
  },
  {
    CardTitle: "Tasks",
    CardDescription: "Manage your projects and tasks",
    CardFooter: "Go to Tasks",
    href: "/tasks",
  },
  {
    CardTitle: "Users",
    CardDescription: "Manage your projects and tasks",
    CardFooter: "Go to Users",
    href: "/users",
  },
];

const Dashboard = ({ projectLength }: { projectLength: number | string }) => {
  return (
    <>
      <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6  bg-linear-to-r from-gray-100 to-sky-400 p-6 rounded-md">
        {dashboardConst.map((item) => (
          <CustomCard
            key={item.CardTitle}
            cardTitle={item.CardTitle}
            cardDescription={item.CardTitle === "Projects" ? projectLength : 0}
            cardFooter={item.CardFooter}
            cardLink={item.href}
            className={`py-3 bg-sky-900/90 h-50 `}
          />
        ))}
        <section className="flex justify-center h-150 mt-4 flex-col items-center col-span-1 md:col-span-2 lg:col-span-3">
          <Charts projectLength={projectLength} />
        </section>
      </section>
    </>
  );
};

export default Dashboard;
