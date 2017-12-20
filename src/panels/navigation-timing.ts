import { IPanel } from 'ipanel';
import { Button } from 'button';

export class NavigationTimingsPanel implements IPanel
{
    name: "Navigation Timings";

    render(target: HTMLElement): void {
        const t = performance.timing;

        target.innerHTML = `
        <table>
            <tr>
                <th>Get Connected</th>
                <td>${(t.connectEnd - t.domainLookupStart).toFixed(2)} ms</td>
            </tr>
            <tr>
                <td>DNS Lookup</td>
                <td>${(t.domainLookupEnd - t.domainLookupStart).toFixed(2)} ms</td>
            </tr>
            <tr>
                <td>SSL</td>
                <td>${(t.connectEnd - t.connectStart).toFixed(2)} ms</td>
            </tr>
            <tr>
                <th>Get Content</th>
                <td>${(t.responseEnd - t.requestStart).toFixed(2)} ms</td>
            </tr>
            <tr>
                <td>Waiting for Server</td>
                <td>${(t.responseStart - t.requestStart).toFixed(2)} ms</td>
            </tr>
            <tr>
                <td>Time To Download</td>
                <td>${(t.responseEnd - t.responseStart).toFixed(2)} ms</td>
            </tr>
            <tr>
                <th colspan=2>Get Ready</th>
            </tr>
            <tr>
                <td>Parse Content</td>
                <td>${(t.domInteractive - t.responseEnd).toFixed(2)} ms</td>
            </tr>
            <tr>
                <td>Deferred Scripts</td>
                <td>${(t.domContentLoadedEventEnd - t.domInteractive).toFixed(2)} ms</td>
            </tr>
            <tr>
                <td>DOM Complete</td>
                <td>${(t.domComplete - t.domContentLoadedEventEnd).toFixed(2)} ms</td>
            </tr>
            <tr>
                <td>Load Event</td>
                <td>${(t.loadEventEnd - t.loadEventStart).toFixed(2)} ms</td>
            </tr>
            <tr>
                <th>Total Load</th>
                <td>${(t.loadEventEnd - t.navigationStart).toFixed(2)} ms</td>
            </tr>
        </table>
        `;
    }

    getButtons(): Button[] {
        return [new Button(
            '⏱️',
            () => `${(performance.timing.loadEventEnd - performance.timing.navigationStart).toFixed(2)} ms`,
            () => performance.timing.loadEventEnd - performance.timing.navigationStart < 500 ? "green" : "red"
        )];
    }

}