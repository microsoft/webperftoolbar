import { expect } from "chai";
import "mocha";

import { IPanel, IPanelConfig, IPanelConstructor, IPanelWithConfiguration } from "../src/ipanel";
import { Toolbar } from "../src/toolbar";
import { MockPanel, mockPanelConfig } from "./mock/panel.mock";

describe("Toolbar class", () => {

    it("should construct with no panels", () => {
        const container: HTMLElement = document.createElement("div");
        const toolbar: Toolbar = new Toolbar([], container);
        toolbar.render();

        expect(container.childElementCount).to.equal(1);
    });

    it("can render buttons", () => {
        const container: HTMLElement = document.createElement("div");

        const mockPanelWithConfig: IPanelWithConfiguration<IPanelConfig, IPanel> = {
            config: mockPanelConfig,
            panelConstructor: MockPanel as IPanelConstructor<IPanelConfig, IPanel>,
        };

        const toolbar: Toolbar = new Toolbar([mockPanelWithConfig], container);

        toolbar.render();

        if (container.firstElementChild === null) {
            throw new Error("DOM was not set up properly");
        }

        const expectedList: Element = container.firstElementChild.children.item(0);
        expect(expectedList).instanceof(HTMLUListElement, "We expect the toolbar to be a list");
        expect(expectedList.childElementCount).equals(1, "We expect that list to have one item");
    });
});
