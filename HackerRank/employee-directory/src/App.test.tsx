import { render, screen } from "@testing-library/react";
import App from "./App";
import { useContext } from "react";
import EmployeeContext, { EmployeeContextProvider } from "./store/EmployeStore";

describe("App Tests", () => {
  test("All inputs should be empty", () => {
    render(<App />);
    const nameInput = screen.getByTestId("name-input") as HTMLInputElement;
    const roleInput = screen.getByTestId("role-input") as HTMLInputElement;
    const departmentSelect = screen.getByTestId(
      "department-select"
    ) as HTMLSelectElement;
    const emailInput = screen.getByTestId("contact-input") as HTMLInputElement;
    const submitButton = screen.getByTestId(
      "submit-button"
    ) as HTMLButtonElement;

    expect(nameInput).toBeInTheDocument();
    expect(roleInput).toBeInTheDocument();
    expect(departmentSelect).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();

    expect(nameInput.value).toBe("");
    expect(roleInput.value).toBe("");
    expect(emailInput.value).toBe("");
    expect(departmentSelect.value).toBe("");
  });

  test("Incomplete employee information should not be added", () => {
    render(<App />);
  });
});
