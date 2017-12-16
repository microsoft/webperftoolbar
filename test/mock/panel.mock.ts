import { IPanel } from '../../src/ipanel';
import { Button } from '../../src/button';

export class MockPanel implements IPanel
{
    public name = "Mock Panel";
    constructor(private getButtonsFn: () => Button[]) { }

    render(target: HTMLElement): void {
        throw new Error("Method not implemented.");
    }

    getButtons(): Button[] {
        return this.getButtonsFn();
    }
}