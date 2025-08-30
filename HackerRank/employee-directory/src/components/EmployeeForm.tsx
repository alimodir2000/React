import { useContext, useState } from "react";
import style from "./EmployeeForm.module.css";
import EmployeeContext from "../store/EmployeStore";

interface EmployeeInput {
  name: string;
  role: string;
  dep: string;
  email: string;
}

const EmployeeForm = () => {
  const { addEmployee } = useContext(EmployeeContext);
  const [inputs, setInputs] = useState<EmployeeInput>({
    dep: "",
    email: "",
    name: "",
    role: "",
  });

  const handleInputChange = (name: string, value: string) => {
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!inputs.dep || !inputs.email || !inputs.name || !inputs.role) {
      alert("All fields are required!");
      return;
    }
    addEmployee({ id: Date.now(), ...inputs });
    clearInputs();
  };

  const clearInputs = () => {
    setInputs({
      dep: "",
      email: "",
      name: "",
      role: "",
    });
  };

  return (
    <div className={`${style["main-form-container"]}`}>
      <h3 className="">Add Employee</h3>
      <form>
        <div className={style.row}>
          <input
            data-testid="name-input"
            type="text"
            name="name"
            placeholder="Name"
            value={inputs.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            aria-label="Employee Name"
          />
          <input
            data-testid="role-input"
            type="text"
            name="role"
            placeholder="Role"
            value={inputs.role}
            onChange={(e) => handleInputChange("role", e.target.value)}
            aria-label="Employee Role"
          />
          <select
            data-testid="department-select"
            name="department"
            aria-label="Employee Department"
            value={inputs.dep}
            onChange={(e) => handleInputChange("dep", e.target.value)}
          >
            <option value="" disabled>
              Select a Department
            </option>
            <option value="IT">IT</option>
            <option value="Design">Design</option>
            <option value="HR">HR</option>
          </select>
        </div>
        <div className={style.row}>
          <input
            type="email"
            data-testid="contact-input"
            name="contact"
            placeholder="Contact"
            value={inputs.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            aria-label="Employee Contact"
          />
          <button
            onClick={handleSubmit}
            data-testid="submit-button"
            type="button"
          >
            Add Employee
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;
