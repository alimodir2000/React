import React, { useState } from "react";
import style from "./CreateUser.module.css";


export interface FormData {
    name: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
}

export interface IsTouched {
    name: boolean;
    email: boolean;
    phone: boolean;
    password: boolean;
    confirmPassword: boolean;
}


export default function CreateUser() {

    const [isTouched, setIsTouched] = useState<IsTouched>({
        phone: false,
        confirmPassword: false,
        email: false,
        name: false,
        password: false
    });

    const [formData, setFormDate] = useState<FormData>({
        confirmPassword: "",
        email: "",
        name: "",
        password: "",
        phone: ""
    });


    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
        const { name, value } = e.target;
        setFormDate((prev) => ({
            ...prev,
            [name]: value
        }));
    }


    return (
        <div className={style.container}>
            <h2>Create New User</h2>
            <div className={style["form-group"]} >
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="Enter the name of the user" />
            </div>
            <div className={style["form-group"]} >
                <label>Email</label>
                <input 
                    type="email" 
                    className={``} 
                    value={formData.email}
                    name="email" 
                    placeholder="Enter email" />
            </div>
            <div className={style["form-group"]} >
                <label>Phone Number</label>
                <input type="number" name="phonenumber" placeholder="Enter the name of the user" />
            </div>
            <div className={style["form-group"]} >
                <label>Password</label>
                <input type="password" name="password" placeholder="Enter password" />
            </div>
            <div className={style["form-group"]} >
                <label>Confirm Password</label>
                <input type="password" name="confirm-password" placeholder="Enter password" />
            </div>
            <button name="submit-btn">Create</button>
        </div>
    );
}