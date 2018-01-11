import { assert, expect } from "chai";
import "mocha";
import * as sinon from "sinon";

import { Button } from "../../src/button";
import { PanelFrame } from "../../src/panelframe";
import { IResourceTimingsPanelConfig, ResourceTimingsPanel } from "../../src/panels/resource-timing";

describe("Resource timing panel class", () => {

    it("should provide two buttons", () => {
        const rootElement: HTMLElement = document.createElement("div");
        const frame: PanelFrame = new PanelFrame(rootElement);
        const config: IResourceTimingsPanelConfig = {
            performance: {
                getEntriesByType: (entryType: string): {} => {
                    const fake: {} = {};

                    return fake;
                },
            },
        };
        const panel: ResourceTimingsPanel = new ResourceTimingsPanel(frame, config);
        const expectedButtons: number = 2;

        const buttons: Button[] = panel.getButtons();

        expect(buttons.length).to.equal(expectedButtons, "there should be two buttons");
    });

    it("should have a total bytes over wire button", () => {
        throw new Error("NYI");
    });

    it("should have an image bytes over wire button", () => {
        throw new Error("NYI");
    });

    it("should summarize the performance data", () => {
        throw new Error("NYI");
    });

    it("should render two tables", () => {
        throw new Error("NYI");
    });

});
