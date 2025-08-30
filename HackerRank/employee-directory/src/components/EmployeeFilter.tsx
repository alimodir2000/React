import { useContext } from "react";
import style from "./EmployeeFilter.module.css";
import EmployeeContext, { type EmployeeFilter } from "../store/EmployeStore";

const EmployeeFilter = () => {
  const { filter, setFilter } = useContext(EmployeeContext);
  const handleFilterChange = (name: string, value: string) => {
    const newFilter: EmployeeFilter = { ...filter, [name]: value };
    setFilter(newFilter);
    
  };

  return (
    <div className={style["main-form-container"]}>
      <h3>Filter Employees</h3>
      <div className={style.group}>
        <input
          type="text"
          data-testid="search-input"
          placeholder="Search by Role"
          aria-label="Search Employees by Role"
          className="mr-10"
          value={filter.role}
          onChange={(e) => handleFilterChange("role", e.target.value)}
        />
        <select
          data-testid="filter-select"
          aria-label="Filter Employees by Department"
          value={filter.dep}
          onChange={(e) => handleFilterChange("dep", e.target.value)}
        >
          <option value="" disabled>
            Select Department
          </option>
          <option value="all">All Departments</option>
          <option value="IT">IT</option>
          <option value="Design">Design</option>
          <option value="HR">HR</option>
        </select>
      </div>
    </div>
  );
};

export default EmployeeFilter;
