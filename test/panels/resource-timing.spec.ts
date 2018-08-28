/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT License.
 */

import { expect } from "chai";
import "mocha";

import { Button } from "../../src/button";
import { PanelFrame } from "../../src/panel-frame";
import * as rt from "../../src/panels/resource-timing";
import {
    InitiatorTypes,
    IResourceTimingsPanelConfig,
    SummaryRow,
} from "../../src/panels/resource-timing-types";

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
    toJSON: () => "",
    workerStart: 0,
    nextHopProtocol: "",
    secureConnectionStart: 0,
};

/** Provides a short mock of the summary data that would be computed from the performance object. */
const getMockSummaryRows = (): SummaryRow[] => {
    const summary: SummaryRow[] = rt.getZeroedSummaryTable();
    const allOverWireBytes: number = 1024;
    const imageOverWireBytes: number = 2048;

    summary[InitiatorTypes.all].overWireBytes = allOverWireBytes;
    summary[InitiatorTypes.img].overWireBytes = imageOverWireBytes;

    return summary;
};

/* tslint:disable:no-magic-numbers */
/**
 * Get mock entries.
 * We use increasing powers of 10 to make addition errors more obvious.
 */
const getMockEntries = (): IResourcePerformanceEntry[] => [
    {
        ...zeroEntry,
        initiatorType: "img",
        decodedBodySize: 1,
        transferSize: 10,
    },
    {
        ...zeroEntry,
        initiatorType: "img",
        decodedBodySize: 100,
        transferSize: 0, // Zero is the transferred size for a cached file
    },
    {
        ...zeroEntry,
        initiatorType: "link",
        decodedBodySize: 1000,
        transferSize: 10000,
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
        const config: IResourceTimingsPanelConfig = {
            performance: {
                getEntriesByType: (_entryType: string): IResourcePerformanceEntry[] => getMockEntries(),
            },
        };

        const panel: rt.ResourceTimingsPanel = new rt.ResourceTimingsPanel(frame, config);
        const counts: SummaryRow[] = panel.getSummaryCounts();

        /* tslint:disable:no-magic-numbers */
        const image: SummaryRow = counts[InitiatorTypes.img];
        expect(image.decodedBytes).to.equal(1 + 100);
        expect(image.overWireBytes).to.equal(10);
        expect(image.numFiles).to.equal(2);
        expect(image.largestBytes).to.equal(100);

        const link: SummaryRow = counts[InitiatorTypes.link];
        expect(link.decodedBytes).to.equal(1000);
        expect(link.overWireBytes).to.equal(10000);
        expect(link.numFiles).to.equal(1);
        expect(link.largestBytes).to.equal(1000);

        const other: SummaryRow = counts[InitiatorTypes.other];
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
        const button: Button = rt.getBytesOverWireButton(undefined, {}, getMockSummaryRows());

        expect(button.getValue()).to.equal("1.00 Kb");
    });

    it("should have an image bytes over wire button", () => {
        const button: Button = rt.getImageBytesOverWireButton(undefined, {}, getMockSummaryRows());

        expect(button.getValue()).to.equal("2.00 Kb");
    });

    it("should have zeroes for numeric data in the zero summary table", () => {
        const zeroed: SummaryRow[] = rt.getZeroedSummaryTable();

        for (const row of zeroed) {
            expect(row.decodedBytes).to.equal(0);
            expect(row.overWireBytes).to.equal(0);
            expect(row.numFiles).to.equal(0);
            expect(row.largestBytes).to.equal(0);
        }
    });

    it("should have every format in the zero summary table with the right labels", () => {
        const zeroed: SummaryRow[] = rt.getZeroedSummaryTable();
        const numObjectKeysPerEnumValue: number = 2;
        const numEnumValues: number = Object.keys(InitiatorTypes).length / numObjectKeysPerEnumValue;

        expect(zeroed.length).to.equal(numEnumValues);
        expect(zeroed[InitiatorTypes.all].format).to.equal("all");
        expect(zeroed[InitiatorTypes.other].format).to.equal("other");
        expect(zeroed[InitiatorTypes.link].format).to.equal("link");
        expect(zeroed[InitiatorTypes.script].format).to.equal("script");
        expect(zeroed[InitiatorTypes.img].format).to.equal("img");
        expect(zeroed[InitiatorTypes.css].format).to.equal("css");
        expect(zeroed[InitiatorTypes.iframe].format).to.equal("iframe");
        expect(zeroed[InitiatorTypes.xmlhttprequest].format).to.equal("xmlhttprequest");
    });
});
