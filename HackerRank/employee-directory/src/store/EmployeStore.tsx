import { createContext, useState, type ReactNode } from "react";

export interface Employee {
  id: number;
  name: string;
  role: string;
  dep: string;
  email: string;
}

export interface EmployeeFilter {
  dep?: string;
  role?: string;
}

export type EmployeeContextType = {
  employees: Employee[];
  filter: EmployeeFilter;
  setFilter: (filter: EmployeeFilter) => void;
  addEmployee: (emp: Employee) => void;
  removeEmployee: (id: number) => void;
  getFilteredEmployees: () => Employee[];
};

const EmployeeContext = createContext<EmployeeContextType>({
  employees: [],
  filter: {},
  setFilter: () => {},
  addEmployee: () => {},
  removeEmployee: () => {},
  getFilteredEmployees: () => [],
});

export interface EmployeeContextProviderProbs {
  children: ReactNode;
}

export function EmployeeContextProvider({
  children,
}: EmployeeContextProviderProbs) {
  const [employeeList, setEmployeeList] = useState<Employee[]>([]);
  const [employeeFilter, setEmployeeFilter] = useState<EmployeeFilter>({});

  function addEmployee(emp: Employee): void {
    setEmployeeList((prev) => [...prev, emp]);
  }

  function removeEmployee(id: number): void {
    setEmployeeList((prev) => prev.filter((x) => x.id !== id));
  }

  function setFilter(filter: EmployeeFilter): void {
    console.log(filter);
    setEmployeeFilter((prev) => ({ ...prev, ...filter }));
  }

  function getFilteredEmployees(): Employee[] {
    let data = employeeList;
    if (employeeFilter) {
      if (employeeFilter.dep && employeeFilter.dep !== "all") {
        data = data.filter((x) => x.dep === employeeFilter.dep);
      }
      if (employeeFilter.role)
        data = data.filter((x) => x.role.toLowerCase().includes(employeeFilter.role!.toLowerCase()));
    }

    return data;
  }

  const employeeCtx: EmployeeContextType = {
    filter: employeeFilter,
    employees: employeeList,
    setFilter,
    addEmployee,
    removeEmployee,
    getFilteredEmployees,
  };

  return (
    <EmployeeContext.Provider value={employeeCtx}>
      {children}
    </EmployeeContext.Provider>
  );
}

export default EmployeeContext;
