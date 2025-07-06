import React from 'react'
import { render, screen } from "@testing-library/react";
import Login1 from './Login1';
import userEvent from '@testing-library/user-event';


test("Login should render 5 inputs", () => {
    render(<Login1 />);
    const form = screen.getByTestId("test-form");
    const inputs = form.querySelectorAll("input");
    expect(inputs.length).toBe(4); // name, email, password, confirmPassword
});

describe("Email", () => {

    test("Initial empty email is valid", () => {
        render(<Login1 />);        
        const emailInput = screen.getByTestId("email");
        const emailGroup = screen.getByTestId("email-group");

        expect(emailInput).toBeInTheDocument();
        expect(emailInput).toBeEmptyDOMElement();
        expect(emailGroup.children.length).toBe(2);
    });


    test("Email cannot be empty after input being focused", async () => {
        render(<Login1 />);        
        const emailInput = screen.getByTestId("email");
        const emailGroup = screen.getByTestId("email-group");

        expect(emailInput).toBeInTheDocument();
        expect(emailInput).toBeEmptyDOMElement();
        expect(emailGroup.children.length).toBe(2);

         await userEvent.click(emailInput);
        await userEvent.click(emailGroup);
        
        


        expect(emailGroup.children.length).toBe(3);
    });

})