
import './App.css'
import ProjectSidebar from './components/ProjectSidebar';
import { Outlet, useNavigate } from 'react-router';




export default function App() {
  return (
    <main className="h-screen my-8 flex gap-8 ">
      <ProjectSidebar />
      <Outlet />
    </main>
  );
}