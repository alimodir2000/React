import React, { useMemo, useState } from "react";
import { hasAtLeastNNonAlphanumericCharacters, hasEnoughLenght, hasTwoSameNonAlphanumericCharactesInTheRow, isEmpty, isEqual, isValidEmail, hasAtLeastNLowercaseCharacters, hasAtLeastNUppercaseCharacters } from "../validation";

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

export interface IsTouched {
    name?: boolean;
    email?: boolean;
    password?: boolean;
    confirmPassword?: boolean;
}

export default function Login1() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [isTouched, setIsTouched] = useState<IsTouched>({
        password: false,
        name: false,
        email: false,
        confirmPassword: false
    });


    const validateInputs = useMemo<Errors>(() => {
        console.log("entered here!");
        let error: Errors = {};

        if (isTouched.name) {
            if (isEmpty(formData.name)) {
                error.name = "Name should not be empty!";
            }
            if (!hasEnoughLenght(formData.name, 4)) {
                error.name = "Name should have at least 4 characters";
            }
        }

        if (isTouched.email) {
            if (isEmpty(formData.email))
                error.email = "Email should not be empty!";
            if (!isValidEmail(formData.email))
                error.email = "Email is not valid!";
        }

        if (isTouched.password) {
            if (isEmpty(formData.password))
                error.password = "Password cannot be empty!";
            if (!hasEnoughLenght(formData.password, 8))
                error.password = "Password cannot be less than 8 characters!";
            if (!hasAtLeastNNonAlphanumericCharacters(formData.password, 2))
                error.password = "Password should have at least 2 non alphanumeric characters!";
            if (!hasAtLeastNLowercaseCharacters(formData.password))
                error.password = "Password should have at least 1 lowercase character!";
            if (!hasAtLeastNUppercaseCharacters(formData.password))
                error.password = "Password should have at least 1 uppercase character!";
            if (hasTwoSameNonAlphanumericCharactesInTheRow(formData.password))
                error.password = "Password should not have two same non-alphanumric charcters in a row!";
        }

        if (isTouched.confirmPassword) {
            if(isEmpty(formData.confirmPassword))
                error.confirmedPassword = "Confirm Password should not be empty!"
            if (!isEqual(formData.password, formData.confirmPassword))
                error.confirmedPassword = "Confirm Password should match Password!";
        }

        return error;


    }, [isTouched, formData]);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name } = e.target;
        setIsTouched((prev) => ({ ...prev, [name]: true }));
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
                            onChange={handleChange}
                            onFocus={handleFocus} />

                        {validateInputs.name && (<p className="validation-error">{validateInputs.name}</p>)}
                        {isTouched.name && !validateInputs.name && (<p className="validation-success">✔️ Name is valid.</p>)}
                    </div>

                    <div className="form-group" >
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={handleFocus} />
                        {validateInputs.email && (<p className="validation-error">{validateInputs.email}</p>)}
                        {isTouched.email && !validateInputs.email && (<p className="validation-success">✔️ Email is valid.</p>)}
                    </div>

                    <div className="form-group" >
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            onFocus={handleFocus} />
                        {validateInputs.password && (<p className="validation-error">{validateInputs.password}</p>)}
                        {isTouched.password && !validateInputs.password && (<p className="validation-success">✔️ Password is valid.</p>)}
                    </div>

                    <div className="form-group" >
                        <label>Conform Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Enter your password again"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            onFocus={handleFocus} />
                        {validateInputs.confirmedPassword && (<p className="validation-error">{validateInputs.confirmedPassword}</p>)}
                        {isTouched.confirmedPassword && !validateInputs.confirmedPassword && (<p className="validation-success">✔️ Confirmed password matches password.</p>)}
                    </div>
                    <button className="submit-btn" type="button">Create Account</button>
                </form>



            </div>
        </div>
    );
}