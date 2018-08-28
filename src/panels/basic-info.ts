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

/** Describes the configuration options available for the basic info panel */
export interface IBasicInfoPanelConfig extends IPanelConfig {
    buttons?: IBasicButton[];
}

/** A set of default configuration options for the basic info panel */
const basicInfoPanelDefaultConfig: Required<IBasicInfoPanelConfig> = {
    buttons: [],
};

/**
 * Provides buttons that can show basic information. This doesn't actually open a panel.
 */
export class BasicInfoPanel implements IPanel {
    /** The settings for this panel. */
    private readonly config: Required<IBasicInfoPanelConfig>;

    /** Construct the panel. */
    public constructor(_frame: PanelFrame, config?: IBasicInfoPanelConfig) {
        this.config = { ...basicInfoPanelDefaultConfig, ...config };
    }

    /** Get a list of buttons by creating instances of each of the buttons defined in the config. */
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

    /** Effectively do nothing since the panel can't be opened. */
    public render(target: HTMLElement): void {
        target.innerHTML = "";
    }

    /** Do nothing. Normally the panel would be opened here, but we don't want a panel for this component. */
    public toggle(): void {
        return;
    }
}
