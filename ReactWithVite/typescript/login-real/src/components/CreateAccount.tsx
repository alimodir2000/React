import React, { useMemo, useState } from "react";

interface InputsValues {
  title: string;
  body: string;
}

interface InputsTouched {
  title: boolean;
  body: boolean;
}

interface InputErros {
  title?: string;
  body?: string;
}

export default function CreateAccount() {
  const [formLoading, setFormLoading] = useState<boolean>(false);
  const [inputs, setInputs] = useState<InputsValues>({ title: "", body: "" });
  const [isTouched, setIsTouched] = useState<InputsTouched>({
    body: false,
    title: false,
  });

  function resetInputs() {
    setFormLoading(false);
    setInputs({ title: "", body: "" });
    setIsTouched({ body: false, title: false });
  }

  function handleInputsFocus(
    e:
      | React.FocusEvent<HTMLInputElement>
      | React.FocusEvent<HTMLTextAreaElement>
  ) {
    const { name } = e.target;
    setIsTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  }

  function handleInputsChanges(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const errors = useMemo<InputErros>(() => {
    const validationErrors: InputErros = {};
    if (isTouched.title) {
      if (!inputs.title) validationErrors.title = "Title cannot be empty!";
    }
    if (isTouched.body) {
      if (!inputs.body) validationErrors.body = "Body cannot be empty";
    }
    return validationErrors;
  }, [inputs, isTouched]);

  const isFormValid = useMemo<boolean>(() => {
    if(isTouched.body && isTouched.title) {
        if(!errors.body && !errors.title)
            return true;
    }
    return false;
  }, [errors, isTouched]);

  async function handleSubmit() {
    if(!isFormValid){
        alert("Please enter valid data");
        return;
    }
    setFormLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify(inputs),
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      );
      const json = await response.json();
      console.log(json);
      resetInputs();
    } catch (error) {
      console.log(error);
      alert("Something is wrong! Please try again later!");
    } finally {
      setFormLoading(false);
    }
  }

  return (
    <>
      <div className="container" data-testid="create-account-form">
        <div className="title">
          <h2>Create Post</h2>
        </div>
        <div className="form-group" data-testid="create-account-form-title-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={inputs.title}
            onChange={handleInputsChanges}
            onFocus={handleInputsFocus}
          />
          {errors.title && <p className="error">{errors.title}</p>}
          {isTouched.title && !errors.title && (
            <p className="valid">Title is Valid ✔️</p>
          )}
        </div>
        <div className="form-group" data-testid="create-account-form-body-group">
          <label>Body</label>
          <textarea
            name="body"
            placeholder="Body"
            value={inputs.body}
            onChange={handleInputsChanges}
            onFocus={handleInputsFocus}
          />
          {errors.body && <p className="error">{errors.body}</p>}
          {isTouched.body && !errors.body && (
            <p className="valid">Body is Valid ✔️</p>
          )}
        </div>
        <button
          className="submit-btn"
          onClick={handleSubmit}
          disabled={formLoading}
        >
          Create
        </button>
      </div>
    </>
  );
}
