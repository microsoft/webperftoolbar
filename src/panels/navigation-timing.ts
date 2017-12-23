import { Button } from "../button";
import { Formatter } from "../formatter";
import { IPanel } from "../ipanel";

/**
 * Provides a panel that shows the navigation timings for a page
 */
export class NavigationTimingsPanel implements IPanel {
    /** The name of the panel */
    public name: "Navigation Timings";

    public constructor(frame: PanelFrame) {

    }

    /**
     * Gets the buttons to be displayed
     * @see IPanel.getButtons
     */
    public getButtons(): Button[] {
        const goalMs: number = 500;

        return [new Button({
            parent: this,
            emoji: "⏱️",
            getValue: (): string => `${Formatter.duration(performance.timing.loadEventEnd, performance.timing.navigationStart)} ms`,
            getColor: (): string => performance.timing.loadEventEnd - performance.timing.navigationStart < goalMs ? "green" : "red",
        })];
    }

    /**
     * Renders the contents of the panel
     * @see IPanel.render
     */
    public render(target: HTMLElement): void {
        const t: PerformanceTiming = performance.timing;

        target.innerHTML = `
        <table>
            <tr>
                <th>Get Connected</th>
                <td>${Formatter.duration(t.connectEnd, t.domainLookupStart)} ms</td>
            </tr>
            <tr>
                <td>DNS Lookup</td>
                <td>${Formatter.duration(t.domainLookupEnd, t.domainLookupStart)} ms</td>
            </tr>
            <tr>
                <td>SSL</td>
                <td>${Formatter.duration(t.connectEnd, t.connectStart)} ms</td>
            </tr>
            <tr>
                <th>Get Content</th>
                <td>${Formatter.duration(t.responseEnd, t.requestStart)} ms</td>
            </tr>
            <tr>
                <td>Waiting for Server</td>
                <td>${Formatter.duration(t.responseStart, t.requestStart)} ms</td>
            </tr>
            <tr>
                <td>Time To Download</td>
                <td>${Formatter.duration(t.responseEnd, t.responseStart)} ms</td>
            </tr>
            <tr>
                <th colspan=2>Get Ready</th>
            </tr>
            <tr>
                <td>Parse Content</td>
                <td>${Formatter.duration(t.domInteractive, t.responseEnd)} ms</td>
            </tr>
            <tr>
                <td>Deferred Scripts</td>
                <td>${Formatter.duration(t.domContentLoadedEventEnd, t.domInteractive)} ms</td>
            </tr>
            <tr>
                <td>DOM Complete</td>
                <td>${Formatter.duration(t.domComplete, t.domContentLoadedEventEnd)} ms</td>
            </tr>
            <tr>
                <td>Load Event</td>
                <td>${Formatter.duration(t.loadEventEnd, t.loadEventStart)} ms</td>
            </tr>
            <tr>
                <th>Total Load</th>
                <td>${Formatter.duration(t.loadEventEnd, t.navigationStart)} ms</td>
            </tr>
        </table>
        `;
    }

    /**
     * Toggles the display of this panel.
     */
    public toggle(): void {
        throw new Error("Method not implemented.");
    }
}
