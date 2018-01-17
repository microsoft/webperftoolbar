import { expect } from "chai";
import "mocha";

import { addStylesToDom } from "../src/styler";

describe("addStylesToDom", () => {
    it("adds a style element to the DOM", () => {
        const div = document.createElement("div");
        addStylesToDom(div);

        expect(div.querySelectorAll("style").length).to.equal(1, "there should be a single style element");
    });
});
