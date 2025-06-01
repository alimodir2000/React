import { FaDiagramProject } from "react-icons/fa6";
import Button from "./Button";
import { useNavigate } from "react-router";

export interface NoProjectSelectedProps {
    onNewProjectButtonClicked?: () => void;
}

export default function NoProjectSelected({onNewProjectButtonClicked}: NoProjectSelectedProps) {
    const navigate = useNavigate();
    const navigateToNewProject = () => {
        navigate('/add-project');
    }
    return(
        <div className="flex flex-col w-full h-screen justify-center items-center gap-4">
            <FaDiagramProject size="8rem" />
            <h2 className="text-xl font-bold text-stone-800">No Project Selected</h2>
            <p>Select a project or create new one!</p>
            <Button onClick={navigateToNewProject}>+ Create New Project</Button>
            
        </div>
    )
}