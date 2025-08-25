import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Input from "./Input";

describe("Input Test Suits", () => {
  test("Label should show the default value and input should show what user typed", async () => {
    render(<Input label="Full Name" id="name" />);

    // label پیدا شود
    const input = screen.getByLabelText(/full name/i);
    expect(input).toBeInTheDocument();


    // تایپ کاربر
    await userEvent.type(input, "Ali Mod");
    expect(input).toHaveValue("Ali Mod");
  });

  test("Input filed should be empty on rendering and having given label value", () => {
    //arrange
    render(<Input id="test-input" label="Test Input" name="test-input" />);
    const input = screen.getByRole("textbox");
    const label = screen.getByLabelText("Test Input");

    //act

    //assert
    expect(input).toHaveValue("");
    expect(label).toBeInTheDocument();
  });
});
