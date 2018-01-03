import { assert, expect } from "chai";
import "mocha";
import * as sinon from "sinon";

import { Button } from "../src/button";
import { IPanel, IPanelConstructor, IPanelWithConfiguration } from "../src/ipanel";
import { Toolbar } from "../src/toolbar";
import { IMockPanelConfig, MockPanel, mockPanelConfig } from "./mock/panel.mock";

describe("Toolbar class", () => {

    it("should construct with no panels", () => {
        const container: HTMLElement = document.createElement("div");
        const toolbar: Toolbar = new Toolbar([], container);

        expect(container.childElementCount).to.equal(1);
    });

    it("can render buttons", () => {
        const container: HTMLElement = document.createElement("div");

        const mockPanelWithConfig: IPanelWithConfiguration<IMockPanelConfig, MockPanel> = {
            panel: MockPanel,
            config: mockPanelConfig,
        };

        const toolbar: Toolbar = new Toolbar([mockPanelWithConfig], container);

        toolbar.render();

        const expectedList: Element = container.firstElementChild.children.item(1);
        expect(expectedList).instanceof(HTMLUListElement, "We expect the toolbar to be a list");
        expect(expectedList.childElementCount).equals(1, "We expect that list to have one item");
    });
});
