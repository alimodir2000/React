import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './layout/layout.tsx';
import NoProjectSelected from './components/NoProjectSelected.tsx';
import NewProject from './components/NewProject.tsx';
import ProjectTask from './components/ProjectTasks.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<NoProjectSelected />} />
          <Route path="add-project" element={<NewProject />} />     
          <Route path="/project/:id" element={<ProjectTask />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
