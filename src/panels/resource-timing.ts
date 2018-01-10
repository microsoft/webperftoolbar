import { Button } from "../button";
import * as Formatter from "../formatter";
import { IPanel, IPanelConfig } from "../ipanel";
import { PanelFrame } from "../panelframe";

/** Describes the configuration options available for the network panel */
export interface IResourceTimingsPanelConfig extends IPanelConfig {
    /**
     * The global performance object, can be included in the config to enable injection of a mock object for testing.
     * This pane only requires the getEntriesByType method
     */
    performance: Partial<Performance> & Required<{ getEntriesByType(entryType: string): {} }>;
}

/** A set of default configuration options for the Resource timings panel */
const resourceTimingsPanelDefaultConfig: IResourceTimingsPanelConfig = {
    performance: window.performance,
};

enum INITIATOR_TYPES {
    all,
    other,
    link,
    script,
    img,
    css,
    iframe,
    xmlhttprequest,
}

/**
 * Describes a row in the summary table
 */
type SummaryRow = {
    decodedBytes: number;
    format: "All" | InitiatorType;
    largestBytes: number;
    numFiles: number;
    overWireBytes: number;
};

/**
 * Provides a panel that shows the Resource timings for a page.
 */
export class ResourceTimingsPanel implements IPanel {
    /** The name of the panel */
    public readonly name: string = "Resource Timings";

    /** The settings for this panel. */
    private readonly config: IResourceTimingsPanelConfig;

    /** The frame that displays this panel. */
    private readonly frame: PanelFrame;

    public constructor(frame: PanelFrame, config?: IResourceTimingsPanelConfig) {
        this.frame = frame;
        this.config = { ...resourceTimingsPanelDefaultConfig, ...config };
    }

    /**
     * Gets the buttons to be displayed
     * @see IPanel.getButtons
     */
    public getButtons(): Button[] {
        const summaryCounts: SummaryRow[] = this.getZeroedSummaryTable();
        this.populateSummaryTable(summaryCounts);

        return [
            new Button({
                parent: this,
                title: "Total bytes over wire",
                emoji: "🔌",
                getValue: (): string => `${Formatter.sizeToString(summaryCounts[INITIATOR_TYPES.all].overWireBytes, "Kb")}`,
                getColor: (): string => "white",
            }),
            new Button({
                parent: this,
                title: "Image bytes over wire",
                emoji: "🖼️",
                getValue: (): string => `${Formatter.sizeToString(summaryCounts[INITIATOR_TYPES.img].overWireBytes, "Kb")}`,
                getColor: (): string => "white",
            }),
        ];
    }

    /**
     * Renders the contents of the panel
     * @see IPanel.render
     */
    public render(target: HTMLElement): void {
        target.innerHTML = `<h1>${this.name}</h1>
            ${this.getSummaryTable()}
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
        const rows: string = entries.map((entry: IResourcePerformanceEntry) => `
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
     */
    private getSummaryTable(): string {
        const summaryCounts: SummaryRow[] = this.getZeroedSummaryTable();
        this.populateSummaryTable(summaryCounts);

        const rows: string = summaryCounts.map((row: SummaryRow): string => `
<tr>
    <td>${row.format}</td>
    <td class="numeric">${Formatter.sizeToString(row.decodedBytes)}</td>
    <td class="numeric">${Formatter.sizeToString(row.overWireBytes)}</td>
    <td class="numeric">${row.numFiles}</td>
    <td class="numeric">${Formatter.sizeToString(row.largestBytes)}</td>
</tr>`).join("");

        return `
<table>
    <tr>
        <th>Format</th>
        <th>Decoded Size</th>
        <th>Bytes Over Wire</th>
        <th>Num Files</th>
        <th>Largest</th>
    </tr>
    ${rows}
</table>`;
    }

    /**
     * Gets a summary table with default zeroed values.
     */
    private getZeroedSummaryTable(): SummaryRow[] {
        const zeroValues: { decodedBytes: number; largestBytes: number; numFiles: number; overWireBytes: number } = {
            decodedBytes: 0,
            overWireBytes: 0,
            numFiles: 0,
            largestBytes: 0,
        };

        const numberOfSummaries: number = 8;
        const summaryCounts: SummaryRow[] = new Array(numberOfSummaries);
        summaryCounts[INITIATOR_TYPES.all] = { format: "All", ...zeroValues };
        summaryCounts[INITIATOR_TYPES.other] = { format: "other", ...zeroValues };
        summaryCounts[INITIATOR_TYPES.link] = { format: "link", ...zeroValues };
        summaryCounts[INITIATOR_TYPES.script] = { format: "script", ...zeroValues };
        summaryCounts[INITIATOR_TYPES.img] = { format: "img", ...zeroValues };
        summaryCounts[INITIATOR_TYPES.css] = { format: "css", ...zeroValues };
        summaryCounts[INITIATOR_TYPES.iframe] = { format: "iframe", ...zeroValues };
        summaryCounts[INITIATOR_TYPES.xmlhttprequest] = { format: "xmlhttprequest", ...zeroValues };

        return summaryCounts;
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
            this.incrementCount(summaryCounts[INITIATOR_TYPES.all], entry);

            const index: number = INITIATOR_TYPES[entry.initiatorType as keyof typeof INITIATOR_TYPES];

            if (index as number | undefined !== undefined) {
                this.incrementCount(summaryCounts[index], entry);
            } else {
                this.incrementCount(summaryCounts[INITIATOR_TYPES.other], entry);
            }
        }
    }
}
