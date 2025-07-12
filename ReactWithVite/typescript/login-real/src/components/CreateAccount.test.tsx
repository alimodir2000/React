import { render, screen } from "@testing-library/react";
import {userEvent} from "@testing-library/user-event"

import CreateAccount from "./CreateAccount";

describe("Create Account Basic", () => {
  test("should render the component", () => {
    render(<CreateAccount />);
    const inputs = document.querySelectorAll("input, textarea");
    expect(inputs.length).toBe(2);
  });
});

describe("Craete Account Validation", () => {
    test("Empty title input is valid before it's be focused", ()=>{
        render(<CreateAccount/>);
        const titleGrpup = screen.getByTestId("create-account-form-title-group");
        expect(titleGrpup.children.length).toBe(2);       
    })

    test("Empty body input is valid before it's be focused", ()=>{
        render(<CreateAccount/>);
        const bodyGrpup = screen.getByTestId("create-account-form-body-group");
        expect(bodyGrpup.children.length).toBe(2);       
    })


     test("Empty Title input is not valid after it's be focused",async ()=>{
        render(<CreateAccount/>);
        const titleGrpup = screen.getByTestId("create-account-form-title-group");
        const inputTitle = titleGrpup.getElementsByTagName("input")[0];

        await userEvent.click(inputTitle);
        await userEvent.click(titleGrpup);
        const errorMessage = titleGrpup.getElementsByClassName("error")[0];

        expect(titleGrpup.children.length).toBe(3);
        expect(errorMessage).toBeInTheDocument();

    })


    test("Empty body input is not valid after it's be focused",async ()=>{
        render(<CreateAccount/>);
        const bodyGrpup = screen.getByTestId("create-account-form-body-group");
        const inputBody = bodyGrpup.getElementsByTagName("textarea")[0];

        await userEvent.click(inputBody);
        await userEvent.click(bodyGrpup);
        const errorMessage = bodyGrpup.getElementsByClassName("error")[0];

        expect(bodyGrpup.children.length).toBe(3);
        expect(errorMessage).toBeInTheDocument();

    })
});
