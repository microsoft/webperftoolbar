/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT License.
 */

import { Button } from "../button";
import { IBasicButton } from "../ibasic-button";
import { IPanel, IPanelConfig } from "../ipanel";
import { PanelFrame } from "../panel-frame";

/** Describes the configuration options available for the basic info panel */
export interface IBasicHtmlPanelConfig extends IPanelConfig {
    button: IBasicButton;
    html: string;
}

/** A set of default configuration options for the basic info panel */
export class BasicHtmlPanel implements IPanel {
    /** The settings for this panel. */
    private readonly config: Required<IBasicHtmlPanelConfig>;

    /** The frame that displays this panel. */
    private readonly frame: PanelFrame;

    /** Construct the panel. */
    public constructor(frame: PanelFrame, config: IBasicHtmlPanelConfig) {
        this.frame = frame;
        this.config = config;
    }

    /** Get a list of buttons by creating instances of each of the buttons defined in the config. */
    public getButtons(): Button[] {
        const button = this.config.button;

        return new Array<Button>(new Button({
            parent: this,
            title: button.title,
            emoji: button.emoji,
            getValue: () => button.value(),
            getColor: () => "white",
        }));
    }

    /** Set the HTML */
    public render(target: HTMLElement): void {
        target.innerHTML = this.config.html;
    }

    /** Toggle the display of the panel */
    public toggle(): void {
        this.frame.toggle(this);
    }
}
