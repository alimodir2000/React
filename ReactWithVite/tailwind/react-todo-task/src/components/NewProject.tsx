import { useState } from "react";
import useProjectStore, { type Project } from "../store/useProjectStore";
import Input from "./Input";

export default function NewProject() {
    const { addProject } = useProjectStore();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");


    const handleSave = () => {
        const newProject: Project = {
            id: Date.now(), // Simple ID generation
            title: title,
            description: description,
            dueDate: dueDate, 
            tasks: []
        };

        console.log(newProject);
        
        if (title && description && dueDate) {
            addProject(newProject);
            setTitle("");
            setDescription("");
            setDueDate("");
        } else {
            alert("Please fill in all fields.");
        }

        
        

    }



    return (
        <div className="w-2/3 mt-16 ">
            <menu className="flex items-center justify-end gap-4 my-4" >
                <li><button className="bg-stone-800 hover:bg-stone-950 text-stone-300 rounded-md px-4 py-2">Cancel</button></li>
                <li><button onClick={handleSave} className="bg-green-500 hover:bg-green-600 text-white rounded-md px-4 py-2">Save</button></li>
            </menu>
            <div className=" flex flex-col justify-items-start">
                <Input onChangeValue={setTitle} value={title} title="Title" />
                <Input onChangeValue={setDescription} value={description} title="Description" isTextarea={true} />
                <Input onChangeValue={setDueDate} title="Due Date" value={dueDate} type="date" />

            </div>
        </div>
    )
}