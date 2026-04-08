import { Header } from "@heroui/react";
import Sidebar from "../sidebar/SideBar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Sidebar />
    </div>
  );
};

export default MainLayout;
