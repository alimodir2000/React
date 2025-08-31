import React from "react";
import EmployeeForm from "./EmployeeForm";
import EmployeeFilter from "./EmployeeFilter";
import EmployeeList from "./EmployeeList";
import style from "./EmployeeDirectory.module.css"

const EmployeeDirectory = () => {
  return (
    <div className={style["main-container"]}>
      <EmployeeForm />
      <EmployeeFilter />
      <EmployeeList />
    </div>
  );
};

export default EmployeeDirectory;
