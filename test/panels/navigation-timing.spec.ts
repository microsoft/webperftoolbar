import { expect } from "chai";
import "mocha";

import { Button } from "../../src/button";
import { PanelFrame } from "../../src/panelframe";
import { NavigationTimingsPanel } from "../../src/panels/navigation-timing";

// Provides mocked performance timings for tests
const getMockTimings: (overrides?: Partial<PerformanceTiming>) => PerformanceTiming =
    (overrides: Partial<PerformanceTiming> = {}): PerformanceTiming => { // tslint:disable-line:arrow-return-shorthand cyclomatic-complexity
        const zero: PerformanceTiming = {
            connectEnd: 0,
            connectStart: 0,
            domainLookupEnd: 0,
            domainLookupStart: 0,
            domComplete: 0,
            domContentLoadedEventEnd: 0,
            domContentLoadedEventStart: 0,
            domInteractive: 0,
            domLoading: 0,
            fetchStart: 0,
            loadEventEnd: 0,
            loadEventStart: 0,
            msFirstPaint: 0,
            navigationStart: 0,
            redirectEnd: 0,
            redirectStart: 0,
            requestStart: 0,
            responseEnd: 0,
            responseStart: 0,
            secureConnectionStart: 0,
            unloadEventEnd: 0,
            unloadEventStart: 0,
            toJSON: (): string => "",
        };

        return { ...zero, ...overrides };
    };

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
});
