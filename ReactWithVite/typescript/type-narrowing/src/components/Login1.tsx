import React, { useState } from "react";

export interface FormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface Errors {
    name?: string;
    email?: string;
    password?: string;
    confirmedPassword?: string;
}

export default function Login1() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [erros, setErrors] = useState<Errors>({});


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }


    return (
        <div className="container">
            <div className="card">
                <form>
                    <h2>Create an Account</h2>
                    <div className="form-group" >
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange} />

                        <p className="validation-error">error</p>
                    </div>

                    <div className="form-group" >
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange} />
                    </div>

                    <div className="form-group" >
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange} />
                    </div>

                    <div className="form-group" >
                        <label>Conform Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Enter your password again"
                            value={formData.confirmPassword}
                            onChange={handleChange} />
                    </div>
                    <button className="submit-btn" type="button">Create Account</button>
                </form>



            </div>
        </div>
    );
}