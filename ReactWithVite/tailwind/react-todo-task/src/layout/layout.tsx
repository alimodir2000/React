import { Outlet, Link } from "react-router";
import ProjectSidebar from "../components/ProjectSidebar";

export default function Layout() {
  return (
    <div className="flex h-screen">
     <ProjectSidebar />      
      <main className="w-2/3 p-4">
        <Outlet /> 
      </main>
    </div>
  );
}