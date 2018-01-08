import { Button } from "../button";
import * as Formatter from "../formatter";
import { IPanel, IPanelConfig } from "../ipanel";
import { PanelFrame } from "../panelframe";

/** begin types from https://github.com/Microsoft/TypeScript/issues/15012 */
type Required<T> = {
    [P in Purify<keyof T>]: NonNullable<T[P]>;
  };
type Purify<T extends string> = { [P in T]: T; }[T];
type NonNullable<T> = T & {};
/** end types from https://github.com/Microsoft/TypeScript/issues/15012 */

/** Describes the configuration options available for the network panel */
export interface IResourceTimingsPanelConfig extends IPanelConfig {
    /**
     * The global performance object, can be included in the config to enable injection of a mock object for testing.
     * This pane only requires the getEntriesByType method
     */
    performance: Partial<Performance> & Required<{ getEntriesByType(entryType: string): {} }>;
}

/**
 * Finish the typings for a file gotten by `performance.getEntriesByType("resource")`
 */
interface IResourcePerformanceEntry extends PerformanceEntry {
    decodedBodySize: number;
    encodedBodySize: number;
    fetchStart: number;
    responseStart: number;
    transferSize: number;
}

/** A set of default configuration options for the Resource timings panel */
const resourceTimingsPanelDefaultConfig: IResourceTimingsPanelConfig = {
    performance: window.performance,
};

/**
 * Provides a panel that shows the Resource timings for a page
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
        return [
            new Button({
                parent: this,
                emoji: "📦️",
                getValue: (): string => `${(this.config.performance.getEntriesByType("resource") as IResourcePerformanceEntry[])
                    .map((entry: IResourcePerformanceEntry): number => entry.transferSize)
                    .reduce((prev: number, current: number): number => prev + current, 0).toLocaleString()} bytes`,
                getColor: (): string => "#9999FF",
            }),
            new Button({
                parent: this,
                emoji: "🖼️",
                getValue: (): string => "0 kb",
                getColor: (): string => "white",
            }),
        ];
    }

    /**
     * Renders the contents of the panel
     * @see IPanel.render
     */
    public render(target: HTMLElement): void {
        target.style.width = "80%";
        target.innerHTML = this.getSummaryTable() + this.getDetailTable();
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
    // tslint:disable:no-magic-numbers align
    const rows: string = entries.map((entry: IResourcePerformanceEntry) => `
<tr>
    <td>${entry.name.substring(entry.name.lastIndexOf("/") + 1).substring(0, 60)}</td>
    <td>${entry.encodedBodySize}</td>
    <td>${entry.decodedBodySize}</td>
    <td>${entry.transferSize}</td>
    <td>${Formatter.duration(entry.startTime, 0)} ms</td>
    <td>${Formatter.duration(entry.duration, 0)} ms</td>
    <td>${Formatter.duration(entry.responseStart, entry.fetchStart)} ms</td>
</tr>
`).join("");

        return `
<table>
    <tr>
        <th>Path</th>
        <th>Compressed Size</th>
        <th>Actual Size</th>
        <th>Bytes Over Wire</th>
        <th>Start</th>
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
        type SummaryRow = {
            decodedBytes: number;
            format: "XHR" | "JS" | "CSS" | "Img" | "Media" | "Font" | "Other" | "All";
            largestBytes: number;
            numFiles: number;
            overWireBytes: number;
        };

        const obj: SummaryRow[] = [
            {
                format: "All",
                decodedBytes: 0,
                overWireBytes: 0,
                numFiles: 0,
                largestBytes: 0,
            },
            {
                format: "XHR",
                decodedBytes: 0,
                overWireBytes: 0,
                numFiles: 0,
                largestBytes: 0,
            },
            {
                format: "JS",
                decodedBytes: 0,
                overWireBytes: 0,
                numFiles: 0,
                largestBytes: 0,
            },
            {
                format: "CSS",
                decodedBytes: 0,
                overWireBytes: 0,
                numFiles: 0,
                largestBytes: 0,
            },
        ];

        const entries: IResourcePerformanceEntry[] = this.config.performance.getEntriesByType("resource") as IResourcePerformanceEntry[];
        for (const entry of entries) {
            obj[0].decodedBytes += entry.decodedBodySize;
            obj[0].overWireBytes += entry.transferSize;
            obj[0].numFiles++;
            obj[0].largestBytes = Math.max(entry.decodedBodySize, obj[0].largestBytes);
        }

        const rows: string = obj.map((row: SummaryRow): string => `
<tr>
    <td>${row.format}</td>
    <td>${row.decodedBytes.toLocaleString()} bytes</td>
    <td>${row.overWireBytes.toLocaleString()} bytes</td>
    <td>${row.numFiles}</td>
    <td>${row.largestBytes.toLocaleString()} bytes</td>
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
}
