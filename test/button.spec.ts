import { assert, expect } from 'chai';
import 'mocha';
import { Toolbar } from '../src/toolbar';
import { Button } from '../src/button';

describe('Button class', () => {

    const setupContainer = () => {
        const container = document.createElement("ul");
        const button = new Button("EMOJI", () => "VALUE", () => "red");
        button.render(container);

        return container;
    }

    it("should be a list item", () => {
        const container = setupContainer();
        expect(container.firstChild).instanceof(HTMLLIElement, "We expect buttons to be list items");
    })

    it("should render the emoji followed by the value", () => {
        const container = setupContainer();

        expect(container.firstElementChild.innerHTML)
            .equals("EMOJI VALUE", "We expect the button to show the label and value we set");
    });

    it("should render the color as a background color", () => {
        const container = setupContainer();

        expect(container.firstElementChild.getAttribute("style"))
            .to.match(/red(;)?$/, "We expect the color to red");
    });
});