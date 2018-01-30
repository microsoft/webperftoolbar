/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT License.
 */

import { Button } from "../button";
import * as Formatter from "../formatter";
import { IPanel } from "../ipanel";
import { PanelFrame } from "../panel-frame";
import {
    IBytesOverWireButtonConfig,
    IImageBytesOverWireButtonConfig,
    InitiatorTypes,
    IResourceTimingsPanelConfig,
    SummaryRow,
} from "./resource-timing-types";

/** A set of default configuration options for the Resource timings panel */
const resourceTimingsPanelDefaultConfig: IResourceTimingsPanelConfig = {
    performance: window.performance,
    panelName: "Resource Timings",
    bytesOverWireButtonTitle: "Total bytes over wire",
    bytesOverWireButtonEmoji: "🔌",
    imageBytesOverWireButtonTitle: "Image bytes over wire",
    imageBytesOverWireButtonEmoji: "🖼️",
};

/**
 * Gets a summary table with default zeroed values.
 */
export const getZeroedSummaryTable = (): SummaryRow[] => {
    const zeroValues: SummaryRow = {
        format: "other",
        decodedBytes: 0,
        overWireBytes: 0,
        numFiles: 0,
        largestBytes: 0,
    };

    const numberOfSummaries: number = 8;
    const summaryCounts: SummaryRow[] = new Array(numberOfSummaries);
    /* tslint:disable no-any (Because keying into the enum gives a string and not the specific string literal.) */
    summaryCounts[InitiatorTypes.all] = { ...zeroValues, format: InitiatorTypes[InitiatorTypes.all] as any };
    summaryCounts[InitiatorTypes.other] = { ...zeroValues, format: InitiatorTypes[InitiatorTypes.other] as any };
    summaryCounts[InitiatorTypes.link] = { ...zeroValues, format: InitiatorTypes[InitiatorTypes.link] as any };
    summaryCounts[InitiatorTypes.script] = { ...zeroValues, format: InitiatorTypes[InitiatorTypes.script] as any };
    summaryCounts[InitiatorTypes.img] = { ...zeroValues, format: InitiatorTypes[InitiatorTypes.img] as any };
    summaryCounts[InitiatorTypes.css] = { ...zeroValues, format: InitiatorTypes[InitiatorTypes.css]  as any };
    summaryCounts[InitiatorTypes.iframe] = { ...zeroValues, format: InitiatorTypes[InitiatorTypes.iframe] as any };
    summaryCounts[InitiatorTypes.xmlhttprequest] = { ...zeroValues, format: InitiatorTypes[InitiatorTypes.xmlhttprequest] as any };
    /* tslint:enable no-any */

    return summaryCounts;
};

export const getBytesOverWireButton = (
    parent: ResourceTimingsPanel | undefined,
    config: IBytesOverWireButtonConfig,
    summaryCounts: SummaryRow[],
) => new Button({
        parent,
        title: config.bytesOverWireButtonTitle,
        emoji: config.bytesOverWireButtonEmoji,
        getValue: (): string => `${Formatter.sizeToString(summaryCounts[InitiatorTypes.all].overWireBytes, "Kb")}`,
        getColor: (): string => "white",
    });

export const getImageBytesOverWireButton = (
    parent: ResourceTimingsPanel | undefined,
    config: IImageBytesOverWireButtonConfig,
    summaryCounts: SummaryRow[],
) => new Button({
        parent,
        title: config.imageBytesOverWireButtonTitle,
        emoji: config.imageBytesOverWireButtonEmoji,
        getValue: (): string => `${Formatter.sizeToString(summaryCounts[InitiatorTypes.img].overWireBytes, "Kb")}`,
        getColor: (): string => "white",
    });

/**
 * Provides a panel that shows the Resource timings for a page.
 */
export class ResourceTimingsPanel implements IPanel {
    /** The settings for this panel. */
    private readonly config: IResourceTimingsPanelConfig;

    /** The frame that displays this panel. */
    private readonly frame: PanelFrame;

    public constructor(frame: PanelFrame, config?: Partial<IResourceTimingsPanelConfig>) {
        this.frame = frame;
        this.config = { ...resourceTimingsPanelDefaultConfig, ...config };
    }

    /**
     * Gets the buttons to be displayed
     * @see IPanel.getButtons
     */
    public getButtons(): Button[] {
        const summaryCounts: SummaryRow[] = getZeroedSummaryTable();
        this.populateSummaryTable(summaryCounts);

        return [
            getBytesOverWireButton(this, this.config, summaryCounts),
            getImageBytesOverWireButton(this, this.config, summaryCounts),
        ];
    }

    /**
     * Get the summarized resource data as an array of rows.
     */
    public getSummaryCounts(): SummaryRow[] {
        const summaryCounts: SummaryRow[] = getZeroedSummaryTable();
        this.populateSummaryTable(summaryCounts);

        return summaryCounts;
    }

    /**
     * Renders the contents of the panel
     * @see IPanel.render
     */
    public render(target: HTMLElement): void {
        target.innerHTML = `<h1>${this.config.panelName}</h1>
            ${this.getSummaryTable(this.getSummaryCounts())}
            ${this.getDetailTable()}`;
    }

    /**
     * Toggles the display of this panel.
     */
    public toggle(): void {
        this.frame.toggle(this);
    }

    /**
     * Gets the detail table.
     */
    private getDetailTable(): string {
        const entries: IResourcePerformanceEntry[] = this.config.performance.getEntriesByType("resource") as IResourcePerformanceEntry[];
        const rows: string = entries.map((entry: IResourcePerformanceEntry) => Formatter.html`
<tr>
    <td>${entry.initiatorType}</td>
    <td title="${entry.name}">${Formatter.pathToFilename(entry.name)}</td>
    <td class="numeric">${Formatter.sizeToString(entry.transferSize)}</td>
    <td class="numeric">${Formatter.sizeToString(entry.decodedBodySize)}</td>
    <td class="numeric">${Formatter.duration(entry.duration, 0)} ms</td>
    <td class="numeric">${Formatter.duration(entry.responseStart, entry.fetchStart)} ms</td>
</tr>
`).join("");

        return `
<table>
    <tr>
        <th>Initiated By</th>
        <th>Path</th>
        <th>Bytes Over Wire</th>
        <th>Actual Size</th>
        <th>Duration</th>
        <th>Time To First Byte</th>
    </tr>
    ${rows}
</table>`;
    }

    /**
     * Gets the summary table.
     * @param summaryCounts An array of summaries data.
     */
    private getSummaryTable(summaryCounts: SummaryRow[]): string {
        const rows: string = summaryCounts.map((row: SummaryRow): string => Formatter.html`
<tr>
    <td>${row.format}</td>
    <td class="numeric">${Formatter.sizeToString(row.decodedBytes)}</td>
    <td class="numeric">${Formatter.sizeToString(row.overWireBytes)}</td>
    <td class="numeric">${row.numFiles.toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
    <td class="numeric">${Formatter.sizeToString(row.largestBytes)}</td>
</tr>`).join("");

        return `
<table>
    <tr>
        <th>Format</th>
        <th>Decoded Size</th>
        <th>Bytes Over Wire</th>
        <th>Num Files</th>
        <th>Largest Decoded</th>
    </tr>
    ${rows}
</table>`;
    }

    /**
     * Increments a row in the summary table.
     * @param row The row to increment.
     * @param entry The entry with values that we increment by.
     */
    private incrementCount(row: SummaryRow, entry: IResourcePerformanceEntry): void {
        row.decodedBytes += entry.decodedBodySize;
        row.overWireBytes += entry.transferSize;
        row.numFiles++;
        row.largestBytes = Math.max(entry.decodedBodySize, row.largestBytes);
    }

    /**
     * Fills a table of summary rows by looping over all of the resource performance entires.
     * @param summaryCounts The table to be filled.
     */
    private populateSummaryTable(summaryCounts: SummaryRow[]): void {
        const entries: IResourcePerformanceEntry[] = this.config.performance.getEntriesByType("resource") as IResourcePerformanceEntry[];
        for (const entry of entries) {
            // Add to the All count
            this.incrementCount(summaryCounts[InitiatorTypes.all], entry);

            const index: number = InitiatorTypes[entry.initiatorType as keyof typeof InitiatorTypes];

            if (index as number | undefined !== undefined) {
                this.incrementCount(summaryCounts[index], entry);
            } else {
                this.incrementCount(summaryCounts[InitiatorTypes.other], entry);
            }
        }
    }
}
