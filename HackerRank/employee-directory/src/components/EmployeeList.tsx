import { useContext } from "react";
import EmployeeContext from "../store/EmployeStore";
import style from "./EmployeeList.module.css";

const EmployeeList = () => {
  const { getFilteredEmployees, removeEmployee } = useContext(EmployeeContext);
  return (
    <div className="layout-column justify-content-center align-items-center">
      <h3>Employee List</h3>

      {getFilteredEmployees().length === 0 ? (
        <p>No Employees Added.</p>
      ) : (
        <ul data-testid="employee-list">
          {getFilteredEmployees().map((emp) => {
            return (
              <li className="" data-testid="employee-item" key={emp.id}>
                <div className="employee-details">
                  <strong>{emp.name}</strong> - {emp.role} ({emp.dep}) -{" "}
                  {emp.email}
                </div>
                <button
                  className="remove-button"
                  data-testid="remove-button"
                  type="button"
                  onClick={() => removeEmployee(emp.id)}
                >
                  Remove
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default EmployeeList;
