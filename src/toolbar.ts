/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT License.
 */

import { IPanel, IPanelConfig, IPanelWithConfiguration } from "./ipanel";
import { PanelFrame } from "./panel-frame";
import { addStylesToDom } from "./styler";

/** Describes the toolbar. */
export class Toolbar {
    /** The panels that will be displayed in the toolbar */
    private readonly panels: IPanel[];

    /** The root element of the toolbar. */
    private readonly toolbarRoot: HTMLElement;

    /**
     * Creates the toolbar.
     * @param panels Classes for the panels to be displayed when the toolbar is opened.
     * @param container Optional parameter for the element that contains the toolbar. It defaults to the body of the HTML page.
     */
    public constructor(panels: Array<IPanelWithConfiguration<IPanelConfig, IPanel>>, container: HTMLElement = window.document.body) {
        addStylesToDom();

        this.toolbarRoot = document.createElement("div");
        this.toolbarRoot.setAttribute("id", "PTB_root");
        container.appendChild(this.toolbarRoot);

        // Construct the frame and the panels that use it
        const frame: PanelFrame = new PanelFrame(this.toolbarRoot);
        this.panels = panels.map((panelWithConfig: IPanelWithConfiguration<IPanelConfig, IPanel>): IPanel =>
            new panelWithConfig.panelConstructor(frame, panelWithConfig.config));
    }

    /**
     * Renders the toolbar.
     */
    public render(): void {
        const listOfButtons: HTMLUListElement = document.createElement("ul");
        listOfButtons.setAttribute("id", "PTB_buttons");
        for (const panel of this.panels) {
            for (const button of panel.getButtons()) {
                button.render(listOfButtons);
            }
        }

        this.toolbarRoot.appendChild(listOfButtons);
    }
}
