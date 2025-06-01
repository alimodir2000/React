import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";


export interface Task {
    id: number;
    projectId: number;
    title: string;
    completed: boolean;
}

export interface Project {
    id: number;
    title: string;
    description: string;
    dueDate: string;
    tasks?: Task[];
}

export interface ProjectState {
    projects: Project[];


    addProject: (project: Project) => void;
    removeProject: (projectId: number) => void;
    updateProject: (projectId: number, updatedProject: Partial<Project>) => void;
    addTaskToProject: (projectId: number, task: Task) => void;
    removeTaskFromProject: (projectId: number, taskId: number) => void;
    completeTask: (projectId: number, taskId: number) => void;
    // getTasksByProjectId: (projectId: number) => Task[];
}




export const useProjectStore = create<ProjectState>()(
    persist( 
        (set) => ({
            projects:[],
            addProject: (project) => { 
                set((state) => ({
                    projects: [...state.projects, project]
                }));
            },
            removeProject: (projectId) => {
                set((state) => ({
                    projects: state.projects.filter((p) => p.id !== projectId)
                }));
            },
            updateProject: (projectId, updatedProject) => {
                set((state) => ({
                    projects: state.projects.map((p) =>
                        p.id === projectId ? { ...p, ...updatedProject } : p
                    )
                }));
            },
            addTaskToProject: (projectId, task) => {
                set((state) => ({
                    projects: state.projects.map((p) =>
                        p.id === projectId ? { ...p, tasks: [...p.tasks, task] } : p
                    )
                }));
            },
            removeTaskFromProject: (projectId, taskId) => {
                set((state) => ({
                    projects: state.projects.map((p) =>
                        p.id === projectId ? { ...p, tasks: p.tasks.filter((t) => t.id !== taskId) } : p
                    )
                }));
            },
            completeTask: (projectId, taskId) => {
                set((state) => ({
                    projects: state.projects.map((p) =>
                        p.id === projectId
                            ? {
                                  ...p,
                                  tasks: p.tasks.map((t) =>
                                      t.id === taskId ? { ...t, completed: true } : t
                                  )
                              }
                            : p
                    )
                }));
            }

        }),        
       {
        name: "project-storage",
        storage: createJSONStorage(() => localStorage),
    })
);

export default  useProjectStore;