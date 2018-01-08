import { Button } from "../../src/button";
import { IPanel } from "../../src/ipanel";
import { PanelFrame } from "../../src/panelframe";

export interface IMockPanelConfig {
    getButtons(): Button[];
}

export const mockPanelConfig: IMockPanelConfig = {
    getButtons: (): Button[] => [new Button({})],
};

export class MockPanel implements IPanel {
    public name: string = "Mock Panel";

    public constructor(frame: PanelFrame, config: IMockPanelConfig) {
        this.getButtons = config.getButtons;
    }

    public getButtons(): Button[] {
        throw new Error("Method must be overridden by passing a new getter in the constructor.");
    }

    public render(target: HTMLElement): void {
        throw new Error("Method not implemented.");
    }

    public toggle(): void {
        throw new Error("Method not implemented.");
    }
}
