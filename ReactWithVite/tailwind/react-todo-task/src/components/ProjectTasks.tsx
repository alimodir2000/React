import useProjectStore from "../store/useProjectStore";
import { useNavigate, useParams } from "react-router";
import Button from "./Button";
import Input from "./Input";
import { useState } from "react";

export default function ProjectTask() {
    const [newTask, setNewTask] = useState("");
    const { projects, removeProject, addTaskToProject, completeTask, removeTaskFromProject } = useProjectStore();
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const selectedProject = projects.find(x => x.id === parseInt(id));

    function handleDeleteProject() {
        removeProject(parseInt(id));
        navigate("/");
    }

    function handleAddTask() {
        console.log(`Add Task Clicked : ${newTask}`);
        if(!newTask.trim()) {
            alert("Please enter a task.");
            return;
        }
        addTaskToProject(parseInt(id), {
            id: Date.now(), // Simple ID generation
            title: newTask,
            projectId: parseInt(id),
            completed: false,
        });

    }

    function handleTaskDone(taskId: number) {
        console.log(`Task Done Clicked : ${taskId}`);
        completeTask(parseInt(id), taskId);
    }


    function handleTaskRemove(taskId: number) {
        console.log(`Task Remove Clicked : ${taskId}`);
        removeTaskFromProject(parseInt(id), taskId);
    }








    return (
        <>
            <div className="w-full flex flex-col  items-center justify-items-start p-8 gap-4">
                <div className="text-2xl font-bold text-stone-800">Project Tasks</div>
                {
                    selectedProject ? (
                        <div className="w-full max-w flex-col gap-4">
                            <Button className="flex justify-self-end mb-2" onClick={handleDeleteProject} >Delete</Button>
                            <ul className="w-full max-w flex-col gap-4">
                                {projects.filter(x => x.id === parseInt(id)).map((project) => (
                                    <li key={project.id} className="mb-4 p-4 border border-stone-300 rounded-lg bg-stone-50 hover:bg-stone-100">
                                        <h2 className="text-xl font-semibold">{project.title}</h2>
                                        <p className="text-sm text-stone-600">{project.description}</p>
                                        <p className="text-xs text-stone-500">Due Date: {project.dueDate}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <div className="text-stone-500">No projects available.</div>
                    )
                }
                <div className="w-full max-w flex gap-4 justify-items-start align-top">

                    <Input className="flex-2/3" title="Add a New Task" value={newTask} onChangeValue={setNewTask}  ></Input>
                    <Button className="flex-1/3 my-4" onClick={handleAddTask}>+ Add a Task</Button>
                </div>
                 {

                (selectedProject && selectedProject.tasks && selectedProject.tasks.length > 0) && (
                    <div className="w-full max-w flex flex-col gap-4">
                        <h2 className="text-xl font-semibold">Tasks</h2>
                        <ul className="w-full max-w flex flex-col gap-4">
                            {selectedProject.tasks.map((task) => (
                                <li key={task.id} className="mb-4 p-4 border border-stone-300 rounded-lg bg-stone-50 hover:bg-stone-100 flex gap-4 ">
                                    <h3 className={`text-lg font-semibold flex-3/5  ${ (task.completed ? 'line-through' : '')}`}>{task.title}</h3> 
                                    <Button onClick={()=> handleTaskDone(task.id)}>Done!</Button>                                   
                                    <Button onClick={()=>handleTaskRemove(task.id)}>Delete</Button>                                   
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            }

            </div>

           
        </>
    );
}