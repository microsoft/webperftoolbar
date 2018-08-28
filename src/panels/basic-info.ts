/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT License.
 */

import { Button } from "../button";
import { IPanel, IPanelConfig } from "../ipanel";
import { PanelFrame } from "../panel-frame";

export interface IBasicButton {
    emoji: string;
    title: string;
    value(): string;
}

/** Describes the configuration options available for the network panel */
export interface IBasicInfoPanelConfig extends IPanelConfig {
    buttons?: IBasicButton[];
    /** The name of the panel */
    panelName?: string;
}

/** A set of default configuration options for the navigation timings panel */
const basicInfoPanelDefaultConfig: Required<IBasicInfoPanelConfig> = {
    panelName: "Basic Info",
    buttons: [],
};

/**
 * Provides a panel that shows the navigation timings for a page
 */
export class BasicInfoPanel implements IPanel {
    /** The settings for this panel. */
    private readonly config: Required<IBasicInfoPanelConfig>;

    /** Construct the panel. */
    public constructor(_frame: PanelFrame, config?: IBasicInfoPanelConfig) {
        this.config = { ...basicInfoPanelDefaultConfig, ...config };
    }

    /** Get buttons. */
    public getButtons(): Button[] {
        const out: Button[] = [];
        for (const b of this.config.buttons) {
            out.push(new Button({
                parent: this,
                title: b.title,
                emoji: b.emoji,
                getValue: () => b.value(),
                getColor: () => "white",
            }));
        }

        return out;
    }

    /** Do nothing. */
    public render(target: HTMLElement): void {
        target.innerHTML = "";
    }

    /** Do nothing. */
    public toggle(): void {
        return;
    }
}
