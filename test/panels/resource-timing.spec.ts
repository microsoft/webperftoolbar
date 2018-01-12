import { expect } from "chai";
import "mocha";

import { Button } from "../../src/button";
import { PanelFrame } from "../../src/panelframe";
import * as rt from "../../src/panels/resource-timing";

/** A resource performance entry that is basically zeroes. */
const zeroEntry: IResourcePerformanceEntry = {
    connectEnd: 0,
    connectStart: 0,
    decodedBodySize: 0,
    domainLookupEnd: 0,
    domainLookupStart: 0,
    duration: 0,
    encodedBodySize: 0,
    entryType: "",
    fetchStart: 0,
    initiatorType: "other",
    name: "",
    redirectEnd: 0,
    redirectStart: 0,
    requestStart: 0,
    responseEnd: 0,
    responseStart: 0,
    startTime: 0,
    transferSize: 0,
};

/** Provides a short mock of the summary data that would be computed from the performance object. */
const getMockSummaryRows: () => rt.SummaryRow[] = (): rt.SummaryRow[] => {
    const summary: rt.SummaryRow[] = rt.getZeroedSummaryTable();
    const allOverWireBytes: number = 1024;
    const imageOverWireBytes: number = 2048;

    summary[rt.INITIATOR_TYPES.all].overWireBytes = allOverWireBytes;
    summary[rt.INITIATOR_TYPES.img].overWireBytes = imageOverWireBytes;

    return summary;
};

/* tslint:disable:no-magic-numbers */
/**
 * Get mock entries.
 * We use prime numbers (greater than two) to make sure they can be added uniquely to verify test cases better.
 * 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101
 */
const getMockEntries: () => IResourcePerformanceEntry[] = (): IResourcePerformanceEntry[] => [
    {
        ...zeroEntry,
        initiatorType: "img",
        decodedBodySize: 3,
        transferSize: 5,
    },
    {
        ...zeroEntry,
        initiatorType: "img",
        decodedBodySize: 7,
        transferSize: 0, // Zero is the transferred size for a cached file
    },
    {
        ...zeroEntry,
        initiatorType: "link",
        decodedBodySize: 13,
        transferSize: 17,
    },
];
/* tslint:enable:no-magic-numbers */

describe("Resource timing panel class", () => {

    it("should provide two buttons", () => {
        const rootElement: HTMLElement = document.createElement("div");
        const frame: PanelFrame = new PanelFrame(rootElement);
        const panel: rt.ResourceTimingsPanel = new rt.ResourceTimingsPanel(frame);
        const expectedButtons: number = 2;

        const buttons: Button[] = panel.getButtons();

        expect(buttons.length).to.equal(expectedButtons, "there should be two buttons");
    });

    it("should summarize the performance data", () => {
        const rootElement: HTMLElement = document.createElement("div");
        const frame: PanelFrame = new PanelFrame(rootElement);
        const config: rt.IResourceTimingsPanelConfig = {
            performance: {
                getEntriesByType: (_entryType: string): IResourcePerformanceEntry[] => getMockEntries(),
            },
        };

        const panel: rt.ResourceTimingsPanel = new rt.ResourceTimingsPanel(frame, config);
        const counts: rt.SummaryRow[] = panel.getSummaryCounts();

        /* tslint:disable:no-magic-numbers */
        const image: rt.SummaryRow = counts[rt.INITIATOR_TYPES.img];
        expect(image.decodedBytes).to.equal(3 + 7);
        expect(image.overWireBytes).to.equal(5);
        expect(image.numFiles).to.equal(2);
        expect(image.largestBytes).to.equal(7);

        const link: rt.SummaryRow = counts[rt.INITIATOR_TYPES.link];
        expect(link.decodedBytes).to.equal(13);
        expect(link.overWireBytes).to.equal(17);
        expect(link.numFiles).to.equal(1);
        expect(link.largestBytes).to.equal(13);

        const other: rt.SummaryRow = counts[rt.INITIATOR_TYPES.other];
        expect(other.decodedBytes).to.equal(0);
        expect(other.overWireBytes).to.equal(0);
        expect(other.numFiles).to.equal(0);
        expect(other.largestBytes).to.equal(0);
        /* tslint:enable:no-magic-numbers */
    });

    it("should render two tables", () => {
        const rootElement: HTMLElement = document.createElement("div");
        const frame: PanelFrame = new PanelFrame(rootElement);
        const panel: rt.ResourceTimingsPanel = new rt.ResourceTimingsPanel(frame);
        const div: HTMLDivElement = document.createElement("div");
        const expectedTableCount: number = 2;

        panel.render(div);

        expect(div.querySelectorAll("table").length).to.equal(expectedTableCount);
    });

    it("should have a total bytes over wire button", () => {
        const button: Button = rt.getBytesOverWireButton(undefined, getMockSummaryRows());

        expect(button.getValue()).to.equal("1.00 Kb");
    });

    it("should have an image bytes over wire button", () => {
        const button: Button = rt.getImageBytesOverWireButton(undefined, getMockSummaryRows());

        expect(button.getValue()).to.equal("2.00 Kb");
    });

    it("should have zeroes for numeric data in the zero summary table", () => {
        const zeroed: rt.SummaryRow[] = rt.getZeroedSummaryTable();

        for (const row of zeroed) {
            expect(row.decodedBytes).to.equal(0);
            expect(row.overWireBytes).to.equal(0);
            expect(row.numFiles).to.equal(0);
            expect(row.largestBytes).to.equal(0);
        }
    });

    it("should have every format in the zero summary table with the right labels", () => {
        const zeroed: rt.SummaryRow[] = rt.getZeroedSummaryTable();
        const numObjectKeysPerEnumValue: number = 2;
        const numEnumValues: number = Object.keys(rt.INITIATOR_TYPES).length / numObjectKeysPerEnumValue;

        expect(zeroed.length).to.equal(numEnumValues);
        expect(zeroed[rt.INITIATOR_TYPES.all].format).to.equal("All");
        expect(zeroed[rt.INITIATOR_TYPES.other].format).to.equal("other");
        expect(zeroed[rt.INITIATOR_TYPES.link].format).to.equal("link");
        expect(zeroed[rt.INITIATOR_TYPES.script].format).to.equal("script");
        expect(zeroed[rt.INITIATOR_TYPES.img].format).to.equal("img");
        expect(zeroed[rt.INITIATOR_TYPES.css].format).to.equal("css");
        expect(zeroed[rt.INITIATOR_TYPES.iframe].format).to.equal("iframe");
        expect(zeroed[rt.INITIATOR_TYPES.xmlhttprequest].format).to.equal("xmlhttprequest");
    });
});
