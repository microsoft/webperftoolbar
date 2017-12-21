import { assert, expect } from 'chai';
import 'mocha';
import { Toolbar } from '../src/toolbar';
import { Button } from '../src/button';

describe('Button class', () => {

    it("should have empty default values", () => {
        const container = document.createElement("ul");
        const button = new Button();
        button.render(container);

        expect(button.emoji).to.equal("");
        expect(button.getValue()).to.equal("");
        expect(button.getColor()).to.equal("");
    });

    it("should be a list item", () => {
        const container = document.createElement("ul");
        const button = new Button();
        button.render(container);

        expect(container.firstChild).instanceof(HTMLLIElement, "We expect buttons to be list items");
    })

    it("should render the emoji followed by the value", () => {
        const container = document.createElement("ul");
        const button = new Button({
            emoji: "EMOJI",
            getValue: () => "VALUE"
        });
        button.render(container);

        expect(container.firstElementChild.innerHTML)
            .equals("EMOJI VALUE", "We expect the button to show the label and value we set");
    });

    it("should render the color as a background color", () => {
        const container = document.createElement("ul");
        const button = new Button({ getColor: () => "red" });
        button.render(container);

        expect(container.firstElementChild.getAttribute("style"))
            .to.match(/red(;)?$/, "We expect the color to red");
    });
});