import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
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

  test("Incomplete employee information should not be added", async () => {
    const user = userEvent.setup();
    const alertSpy = vi.spyOn(window, "alert").mockImplementation(() => {});
    render(<App />);

    const nameInput = screen.getByTestId("name-input") as HTMLInputElement;

    const submitButton = screen.getByTestId(
      "submit-button"
    ) as HTMLButtonElement;

    await user.type(nameInput, "Ali");
    await user.click(submitButton);

    expect(alertSpy).toHaveBeenCalledWith("All fields are required!");
    expect(screen.queryAllByTestId("employee-item")).toHaveLength(0);
    expect(screen.queryByTestId("employee-detail-0")).not.toBeInTheDocument();
  });

  test("Correct inputs should add employee", async () => {
    const user = userEvent.setup();
    const alertSpy = vi.spyOn(window, "alert").mockImplementation(() => {});

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


    await user.type(nameInput,"Ali");
    await user.type(roleInput,"CTO");
    await user.selectOptions(departmentSelect,"IT");
    await user.type(emailInput,"ali@modirkhazeni.com");

    await user.click(submitButton);
    
    expect(alertSpy).not.toHaveBeenCalled();
    expect(screen.queryAllByTestId("employee-item")).toHaveLength(1);
    expect(screen.queryByTestId("employee-detail-0")).toBeInTheDocument();


  });
});
