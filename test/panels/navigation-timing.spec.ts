import { assert, expect } from "chai";
import "mocha";
import * as sinon from "sinon";

import { Button } from "../../src/button";
import { PanelConfigMerger } from "../../src/panelconfigmerger";
import { PanelFrame } from "../../src/panelframe";
import { NavigationTimingsPanel } from "../../src/panels/navigation-timing";

describe("Navigation timing panel class", () => {

    it("should provide a single button that is green when below the goal", () => {
        const rootElement: HTMLElement = document.createElement("div");
        const frame: PanelFrame = new PanelFrame(rootElement);
        const panel: NavigationTimingsPanel = new NavigationTimingsPanel(frame, {
            goalMs: 200,
            timings: getMockTimings({
                navigationStart: 0,
                loadEventEnd: 100,
            }),
        });

        const buttons: Button[] = panel.getButtons();

        expect(buttons.length).to.equal(1, "there should only be one button for this panel");
        expect(buttons[0].getColor()).to.equal("green", "the button should be green");
    });

    it("should provide a single button that is green when at the goal", () => {
        const rootElement: HTMLElement = document.createElement("div");
        const frame: PanelFrame = new PanelFrame(rootElement);
        const panel: NavigationTimingsPanel = new NavigationTimingsPanel(frame, {
            goalMs: 100,
            timings: getMockTimings({
                navigationStart: 0,
                loadEventEnd: 100,
            }),
        });

        const buttons: Button[] = panel.getButtons();

        expect(buttons.length).to.equal(1, "there should only be one button for this panel");
        expect(buttons[0].getColor()).to.equal("green", "the button should be green");
    });

    it("should provide a button that is red when above the goal", () => {
        const rootElement: HTMLElement = document.createElement("div");
        const frame: PanelFrame = new PanelFrame(rootElement);
        const panel: NavigationTimingsPanel = new NavigationTimingsPanel(frame, {
            goalMs: 50,
            timings: getMockTimings({
                navigationStart: 0,
                loadEventEnd: 100,
            }),
        });

        const buttons: Button[] = panel.getButtons();

        expect(buttons.length).to.equal(1, "there should only be one button for this panel");
        expect(buttons[0].getColor()).to.equal("red", "the button should be red");
    });

    it("should render", () => {
        const rootElement: HTMLElement = document.createElement("div");
        const frame: PanelFrame = new PanelFrame(rootElement);
        const panel: NavigationTimingsPanel = new NavigationTimingsPanel(frame, {
            goalMs: 90,
            timings: getMockTimings(),
        });

        const target: HTMLElement = document.createElement("div");
        panel.render(target);

        expect(target.childElementCount).to.be.above(0, "it should render to the DOM");

    });

    // Provides mocked performance timings for tests
    const getMockTimings: (overrides?: Partial<PerformanceTiming>) => PerformanceTiming =
        (overrides: Partial<PerformanceTiming> = {}): PerformanceTiming => { // tslint:disable-line:arrow-return-shorthand cyclomatic-complexity
            return {
                connectEnd: overrides.connectEnd || 0,
                connectStart: overrides.connectStart || 0,
                domainLookupEnd: overrides.domainLookupEnd || 0,
                domainLookupStart: overrides.domainLookupStart || 0,
                domComplete: overrides.domComplete || 0,
                domContentLoadedEventEnd: overrides.domContentLoadedEventEnd || 0,
                domContentLoadedEventStart: overrides.domContentLoadedEventStart || 0,
                domInteractive: overrides.domInteractive || 0,
                domLoading: overrides.domLoading || 0,
                fetchStart: overrides.fetchStart || 0,
                loadEventEnd: overrides.loadEventEnd || 0,
                loadEventStart: overrides.loadEventStart || 0,
                msFirstPaint: overrides.msFirstPaint || 0,
                navigationStart: overrides.navigationStart || 0,
                redirectEnd: overrides.redirectEnd || 0,
                redirectStart: overrides.redirectStart || 0,
                requestStart: overrides.requestStart || 0,
                responseEnd: overrides.responseEnd || 0,
                responseStart: overrides.responseStart || 0,
                secureConnectionStart: overrides.secureConnectionStart || 0,
                unloadEventEnd: overrides.unloadEventEnd || 0,
                unloadEventStart: overrides.unloadEventStart || 0,
                toJSON: (): string => "",
            };
        };

});
