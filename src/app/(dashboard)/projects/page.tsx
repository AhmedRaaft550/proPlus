import { endPointServices } from "@/services/endPoints-services/endPoints-Services";
import Projects from "@/components/projects/Projects";
const page = async () => {
  const projectsData = await endPointServices("projects");

  return (
    <>
      <Projects projectsData={projectsData} />
    </>
  );
};

export default page;
