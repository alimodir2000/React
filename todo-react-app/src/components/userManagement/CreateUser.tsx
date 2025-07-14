import React, { useMemo, useState } from "react";
import style from "./CreateUser.module.css";
import { IsEmailValid, IsPasswordValid, IsPhoneValid } from "../../validations"
import { create_user_url } from "../../defs";



interface CreateUserRequestDto {
    name: string;
    email: string;
    phoneNumber: string;
    password: string;
}


interface FormData {
    name: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
}

interface FormInputValidation {
    name?: MessageMetaData;
    email?: MessageMetaData;
    phone?: MessageMetaData;
    password?: MessageMetaData;
    confirmPassword?: MessageMetaData;
}

interface MessageMetaData {
    message: string;
    isValid: boolean;
}

interface IsTouched {
    name: boolean;
    email: boolean;
    phone: boolean;
    password: boolean;
    confirmPassword: boolean;
}



export default function CreateUser() {
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
    const [isTouched, setIsTouched] = useState<IsTouched>({
        phone: false,
        confirmPassword: false,
        email: false,
        name: false,
        password: false,
    });

    const [formData, setFormData] = useState<FormData>({
        confirmPassword: "",
        email: "",
        name: "",
        password: "",
        phone: "",
    });

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    function handleInputTouch(e: React.FocusEvent<HTMLInputElement>): void {
        const { name } = e.target;
        setIsTouched((prev) => ({
            ...prev,
            [name]: true,
        }));
    }

    const validationMessages = useMemo<FormInputValidation>(() => {
        const validation: FormInputValidation = {};

        let msg: string = "";
        let isValid: boolean = false;

        if (isTouched.name) {
            if (formData.name && formData.name.length > 3) {
                msg = "✔️ Name is valid";
                isValid = true;
            }
            else {
                msg = "⚫ Name should not be empty and has at least 3 characters!";
                isValid = false;
            }

            validation.name = {
                isValid: isValid,
                message: msg
            }
        }

        if (isTouched.email) {
            if (IsEmailValid(formData.email)) {
                msg = "✔️ Email is valid";
                isValid = true;
            }
            else {
                msg = "⚫ Enter a valid email";
                isValid = false;
            }
            validation.email = {
                isValid: isValid,
                message: msg
            }
        }

        if (isTouched.phone) {
            if (IsPhoneValid(formData.phone)) {
                msg = "✔️ Phone is valid";
                isValid = true;
            }
            else {
                msg = "⚫ Enter a valid phone number";
                isValid = false;
            }
            validation.phone = {
                isValid: isValid,
                message: msg
            }
        }

        if (isTouched.password) {
            if (IsPasswordValid(formData.password)) {
                msg = "✔️ Password is valid";
                isValid = true;
            }
            else {
                msg = "⚫ Password shoud has at least 8 chars, 1 uppercase, 1 number, 1 non alphanumeric character and no two same non alphanumeric characters be in a row!";
                isValid = false;
            }
            validation.password = {
                isValid: isValid,
                message: msg
            }
        }

        if (isTouched.confirmPassword) {
            if (!formData.confirmPassword || formData.confirmPassword !== formData.password) {
                msg = "⚫ Confirm password should match password!"
                isValid = false;
            }
            else {
                msg = "✔️ Confirmed password matches password";
                isValid = true;
            }
            validation.confirmPassword = {
                isValid: isValid,
                message: msg
            }
        }

        return validation;
    }, [isTouched, formData]);


    const isFormValid = useMemo<boolean | undefined>(() => {
        return validationMessages.confirmPassword?.isValid &&
            validationMessages.email?.isValid &&
            validationMessages.name?.isValid &&
            validationMessages.password?.isValid &&
            validationMessages.phone?.isValid;

    }, [validationMessages])


    function ResetInput(): void {

        setFormData({
            phone: "",
            confirmPassword: "",
            email: "",
            name: "",
            password: "",
        });

        setIsTouched({
            phone: false,
            confirmPassword: false,
            email: false,
            name: false,
            password: false,
        });
    }


    async function handleSubmitBtn() {

        setFormSubmitted(true);
        const requestData: CreateUserRequestDto = {
            name: formData.name,
            email: formData.email,
            phoneNumber: formData.phone,
            password: formData.password
        };

        const request = new Request(create_user_url, {
            method: "POST",
            body: JSON.stringify(requestData),
            headers: {
                "Content-Type": "application/json"
            }
        });

        try {
            const response = await fetch(request);
            if (response.ok) {

                alert("User created successfully!");
                ResetInput();
            }
            else {

                alert("Something wrong! try later!");
                console.log(response.status);
            }

        } catch (error) {
            console.log(error);
        }

        setFormSubmitted(false);
    }

    return (

        <div className={style["form-wrapper"]}>
            {
                formSubmitted && (
                    <div className={style.overlay}>
                        <span>Creating user ...</span>
                    </div>
                )
            }

            <div className={style.container} >
                <h2>Create New User</h2>
                <div className={style["form-group"]}>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        className={(validationMessages.name && !validationMessages.name.isValid) ? style.error : ""}
                        value={formData.name}
                        onFocus={handleInputTouch}
                        onChange={handleInputChange}
                        placeholder="Enter the name of the user"
                    />
                    {validationMessages.name && validationMessages.name.isValid && (<p className={style["validation-success"]}>{validationMessages.name.message}</p>)}
                    {validationMessages.name && !validationMessages.name.isValid && (<p className={style["validation-error"]}>{validationMessages.name.message}</p>)}

                </div>
                <div className={style["form-group"]}>
                    <label>Email</label>
                    <input
                        type="email"
                        className={(validationMessages.email && !validationMessages.email.isValid) ? style.error : ""}
                        value={formData.email}
                        onFocus={handleInputTouch}
                        onChange={handleInputChange}
                        name="email"
                        placeholder="Enter email"
                    />
                    {validationMessages.email && validationMessages.email.isValid && (<p className={style["validation-success"]}>{validationMessages.email.message}</p>)}
                    {validationMessages.email && !validationMessages.email.isValid && (<p className={style["validation-error"]}>{validationMessages.email.message}</p>)}
                </div>
                <div className={style["form-group"]}>
                    <label>Phone Number</label>
                    <input
                        type="number"
                        name="phone"
                        value={formData.phone}
                        className={(validationMessages.phone && !validationMessages.phone.isValid) ? style.error : ""}
                        onFocus={handleInputTouch}
                        onChange={handleInputChange}
                        placeholder="Enter phone number"
                    />
                    {validationMessages.phone && validationMessages.phone.isValid && (<p className={style["validation-success"]}>{validationMessages.phone.message}</p>)}
                    {validationMessages.phone && !validationMessages.phone.isValid && (<p className={style["validation-error"]}>{validationMessages.phone.message}</p>)}
                </div>
                <div className={style["form-group"]}>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        className={(validationMessages.password && !validationMessages.password.isValid) ? style.error : ""}
                        value={formData.password}
                        onFocus={handleInputTouch}
                        onChange={handleInputChange}
                        placeholder="Enter password"
                    />
                    {validationMessages.password && validationMessages.password.isValid && (<p className={style["validation-success"]}>{validationMessages.password.message}</p>)}
                    {validationMessages.password && !validationMessages.password.isValid && (<p className={style["validation-error"]}>{validationMessages.password.message}</p>)}
                </div>
                <div className={style["form-group"]}>
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        className={(validationMessages.confirmPassword && !validationMessages.confirmPassword.isValid) ? style.error : ""}
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        onFocus={handleInputTouch}
                        placeholder="Enter password"
                    />
                    {validationMessages.confirmPassword && validationMessages.confirmPassword.isValid && (<p className={style["validation-success"]}>{validationMessages.confirmPassword.message}</p>)}
                    {validationMessages.confirmPassword && !validationMessages.confirmPassword.isValid && (<p className={style["validation-error"]}>{validationMessages.confirmPassword.message}</p>)}
                </div>
                <button name="submit-btn" disabled={isFormValid === undefined ? true : !isFormValid} onClick={handleSubmitBtn}>
                    Create
                </button>
            </div>

        </div>

    );
}
