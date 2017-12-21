import { Button } from "../../src/button";
import { IPanel } from "../../src/ipanel";

export class MockPanel implements IPanel {
    public name: string = "Mock Panel";

    public constructor(getButtons: () => Button[]) {
        this.getButtons = getButtons;
    }

    public getButtons(): Button[] {
        return undefined;
    }

    public render(target: HTMLElement): void {
        throw new Error("Method not implemented.");
    }
}
