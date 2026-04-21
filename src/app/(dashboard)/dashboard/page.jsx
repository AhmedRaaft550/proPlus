import DashboardUi from "@/components/dashboard/Dashboard";
import { endPointServices } from "@/services/endPoints-services/endPoints-Services";

const Dashboard = async () => {
  const projectLength = await endPointServices("projects");

  return <DashboardUi projectLength={projectLength.length} />;
};

export default Dashboard;
