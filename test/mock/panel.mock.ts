/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT License.
 */

import { Button } from "../../src/button";
import { IPanel, IPanelConfig } from "../../src/ipanel";
import { PanelFrame } from "../../src/panel-frame";

/** Describes the mocked panel configuration */
export interface IMockPanelConfig extends IPanelConfig {
    /** The mock requires a getButtons method in the config so the getButtons provided by the class can be replaced */
    getButtons(): Button[];
}

/**
 * The default config for the mock panel which just creates a button with no options.
 */
export const mockPanelConfig: IMockPanelConfig = {
    getButtons: () => [new Button({})],
};

/**
 * Creates a mocked panel.
 */
export class MockPanel implements IPanel {
    /** The name of our mock panel. */
    public name: string = "Mock Panel";

    public constructor(_frame: PanelFrame, config: IMockPanelConfig) {
        this.getButtons = config.getButtons;
    }

    /** Gets the buttons. Will be overriden by the constructor. */
    public getButtons(): Button[] {
        throw new Error("Method must be overridden by passing a new getter in the constructor.");
    }

    /** Normally renders the panel. Not implemented here. */
    public render(_target: HTMLElement): void {
        throw new Error("Method not implemented.");
    }

    /** Normally toggles the panel. Not implemented here. */
    public toggle(): void {
        throw new Error("Method not implemented.");
    }
}
