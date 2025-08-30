import React from "react";
import EmployeeForm from "./EmployeeForm";
import EmployeeFilter from "./EmployeeFilter";
import EmployeeList from "./EmployeeList";

const EmployeeDirectory = () => {
  return (
    <div>
      <EmployeeForm />
      <EmployeeFilter />
      <EmployeeList />
    </div>
  );
};

export default EmployeeDirectory;
