import { useNavigate } from "react-router";
import Button from "./Button";
import useProjectStore from "../store/useProjectStore";

const ProjectSidebar = () => {
    const navigate = useNavigate();
    const { projects } = useProjectStore();



    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-100 md:w-72 rounded-r-xl overflow-y-auto">
            <h2 className="mb-8 font-bold uppercase md:tex-xl" >Project Management</h2>
            <div>
                <Button onClick={() => navigate("add-project")}>+ Create New Project</Button>
            </div>
            {projects.length > 0 && (
                <ul className="mt-8">
                    {projects.map((project) => (
                        <li key={project.id} className="mb-4 border-1 border-stone-700 p-4 rounded-lg hover:bg-stone-800 cursor-pointer" onClick={() => navigate(`/project/${project.id}`)}>
                            <h1 className="text-lg font-semibold">{project.title}</h1>
                            <p className="text-sm text-stone-300">{project.description}</p>
                        </li>
                    ))}
                </ul>
            )}

        </aside>
    );
}

export default ProjectSidebar;
