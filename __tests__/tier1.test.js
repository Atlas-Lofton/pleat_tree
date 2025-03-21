const fs = require("fs");
const path = require("path");

const {screen, fireEvent} = require("@testing-library/dom");
require("@testing-library/jest-dom");

const html = fs.readFileSync(path.resolve(__dirname, "../public/tier1.html"),"utf-8");

describe("tier 1 page test",() => {
    beforeEach(() => {
        document.body.innerHTML= html;
        console.log(document.body.innerHTML);
    })

test("page contains heading 'Welcome To Tier 1!'", () => {
    const heading = screen.getByText(/Welcome To Tier 1!/i);
    expect(heading).toBeInTheDocument();
} )
test("rating section contains five radio buttons", () => {
    const radioButtons= document.querySelectorAll(".rating input[type='radio']");
    expect(radioButtons.length).toBe(5);
})
test("'Try again' button exists but is initially hidden", () => {
    const retryButton= document.getElementById("retry");
    expect(retryButton).toHaveClass("hidden");
})
test("'go to second tier' button navigates correctly", () => {
    const button = document.getElementById("button");
    expect(button).toBeInTheDocument();
    expect(button.textContent).toContain("Go to second tier.")
})
test("click a radio button changes selecetion", () => {
    const radio =document.getElementById("star3");
    fireEvent.click(radio);
    expect(radio.checked).toBe(true);
})
})