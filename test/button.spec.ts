import { assert, expect } from "chai";
import "mocha";
import { Button, IButtonConfiguration } from "../src/button";
import { Toolbar } from "../src/toolbar";

describe("Button class", () => {

    it("should have empty default values", () => {
        const container: HTMLElement = document.createElement("ul");
        const button: Button = new Button();
        button.render(container);

        expect(button.title).to.equal("");
        expect(button.emoji).to.equal("");
        expect(button.getValue()).to.equal("");
        expect(button.getColor()).to.equal("");
    });

    it("should be a list item", () => {
        const container: HTMLElement = document.createElement("ul");
        const button: Button = new Button();
        button.render(container);

        expect(container.firstChild).instanceof(HTMLLIElement, "We expect buttons to be list items");
    });

    it("should render the emoji followed by the value", () => {
        const container: HTMLElement = document.createElement("ul");
        const config: IButtonConfiguration = {
            emoji: "EMOJI",
            getValue: (): string => "VALUE",
        };
        const button: Button = new Button(config);

        button.render(container);

        expect(container.firstElementChild.innerHTML)
            .equals("EMOJI VALUE", "We expect the button to show the label and value we set");
    });

    it("should render the color as a background color", () => {
        const container: HTMLElement = document.createElement("ul");
        const config: IButtonConfiguration = {
            getColor: (): string => "red",
        };
        const button: Button = new Button(config);

        button.render(container);

        expect(container.firstElementChild.getAttribute("style"))
            .to.match(/red(;)?$/, "We expect the color to red");
    });

    it("should render the title as a title attribute", () => {
        const container: HTMLElement = document.createElement("ul");
        const config: IButtonConfiguration = {
            title: "TITLE",
        };
        const button: Button = new Button(config);

        button.render(container);

        expect(container.firstElementChild.getAttribute("title")).to.equal("TITLE");
    });
});
