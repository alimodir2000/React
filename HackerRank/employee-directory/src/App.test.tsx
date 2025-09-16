import { render, screen } from "@testing-library/react";
import { userEvent, type UserEvent } from "@testing-library/user-event";
import App from "./App";
import { use } from "react";

function getPageInputs() {
  const nameInput = screen.queryByTestId("name-input") as HTMLInputElement;
  const roleInput = screen.queryByTestId("role-input") as HTMLInputElement;
  const departmentSelect = screen.queryByTestId(
    "department-select"
  ) as HTMLSelectElement;
  const emailInput = screen.queryByTestId("contact-input") as HTMLInputElement;
  const submitButton = screen.queryByTestId(
    "submit-button"
  ) as HTMLButtonElement;

  const filterDepSelect = screen.queryByTestId(
    "filter-select"
  ) as HTMLSelectElement;

  const filterRoleInput = screen.queryByTestId(
    "search-input"
  ) as HTMLInputElement;

  return {
    nameInput,
    roleInput,
    departmentSelect,
    emailInput,
    submitButton,
    filterDepSelect,
    filterRoleInput,
  };
}

describe("App Tests", () => {
  test("All inputs should be empty", () => {
    render(<App />);
    const { nameInput, roleInput, departmentSelect, emailInput, submitButton } =
      getPageInputs();

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

    const { nameInput, roleInput, departmentSelect, emailInput, submitButton } =
      getPageInputs();

    await user.type(nameInput, "Ali");
    await user.type(roleInput, "CTO");
    await user.selectOptions(departmentSelect, "IT");
    await user.type(emailInput, "ali@modirkhazeni.com");
    await user.click(submitButton);

    expect(alertSpy).not.toHaveBeenCalled();
    expect(screen.queryAllByTestId("employee-item")).toHaveLength(1);
    expect(screen.queryByTestId("employee-detail-0")).toBeInTheDocument();

    await user.type(nameInput, "Arsalan");
    await user.type(roleInput, "Manager");
    await user.selectOptions(departmentSelect, "Design");
    await user.type(emailInput, "arsalan@modirkhazeni.com");
    await user.click(submitButton);

    expect(alertSpy).not.toHaveBeenCalled();
    expect(screen.queryAllByTestId("employee-item")).toHaveLength(2);
    expect(screen.queryByTestId("employee-detail-1")).toBeInTheDocument();
  });

  test("Employee list can be filtered by the department", async () => {
    const user = userEvent.setup();
    render(<App />);

    const {
      nameInput,
      roleInput,
      departmentSelect,
      emailInput,
      submitButton,
      filterDepSelect,
    } = getPageInputs();

    await user.type(nameInput, "Ali");
    await user.type(roleInput, "CTO");
    await user.selectOptions(departmentSelect, "IT");
    await user.type(emailInput, "ali@modirkhazeni.com");
    await user.click(submitButton);

    await user.type(nameInput, "Arsalan");
    await user.type(roleInput, "Manager");
    await user.selectOptions(departmentSelect, "Design");
    await user.type(emailInput, "arsalan@modirkhazeni.com");
    await user.click(submitButton);

    await user.selectOptions(filterDepSelect, "IT");
    expect(screen.queryAllByTestId("employee-item")).toHaveLength(1);

    await user.selectOptions(filterDepSelect, "Design");
    expect(screen.queryAllByTestId("employee-item")).toHaveLength(1);

    await user.selectOptions(filterDepSelect, "all");
    expect(screen.queryAllByTestId("employee-item")).toHaveLength(2);

    await user.selectOptions(filterDepSelect, "HR");
    expect(screen.queryAllByTestId("employee-item")).toHaveLength(0);
  });

  test("Employee list can be filterd by the Role", async () => {
    const user = userEvent.setup();
    render(<App />);

    const {
      nameInput,
      roleInput,
      departmentSelect,
      emailInput,
      submitButton,
      filterRoleInput,
    } = getPageInputs();

    await user.type(nameInput, "Ali");
    await user.type(roleInput, "CTO");
    await user.selectOptions(departmentSelect, "IT");
    await user.type(emailInput, "ali@modirkhazeni.com");
    await user.click(submitButton);

    await user.type(nameInput, "Arsalan");
    await user.type(roleInput, "Manager");
    await user.selectOptions(departmentSelect, "Design");
    await user.type(emailInput, "arsalan@modirkhazeni.com");
    await user.click(submitButton);

    expect(screen.queryAllByTestId("employee-item")).toHaveLength(2);

    await user.type(filterRoleInput, "CTO");
    expect(screen.queryAllByTestId("employee-item")).toHaveLength(1);
     expect(screen.queryAllByTestId("employee-detail-0")[0]).toHaveTextContent(`Ali - CTO (IT) - ali@modirkhazeni.com`)
    
   await user.clear(filterRoleInput);
   await user.type(filterRoleInput, "Manager");
   expect(screen.queryAllByTestId("employee-item")).toHaveLength(1);
   expect(screen.queryByTestId("employee-detail-0")).toHaveTextContent(`Arsalan - Manager (Design) - arsalan@modirkhazeni.com`);


   await user.clear(filterRoleInput);
   await user.type(filterRoleInput, "test");
   expect(screen.queryAllByTestId("employee-item")).toHaveLength(0);   
   
  });
});
