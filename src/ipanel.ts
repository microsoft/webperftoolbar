import { Button } from "./button";
import { PanelFrame } from "./panelframe";

export interface IPanelWithConfiguration<C, P> {
    config: C;
    panel: IPanelConstructor<C, P>;
}

export interface IPanelConstructor<C, P> {
    new (frame: PanelFrame, config: C): P;
}

// tslint:disable-next-line:no-empty-interface
export interface IPanelConfig {

}

/** Describes a panel within the opened toolbar. */
export interface IPanel {

    name: string;

    /**
     * Gets the buttons provided by this panel to be displayed in the collapsed toolbar.
     */
    getButtons(): Button[];

    /**
     * Renders the panel.
     * @param target The HTML element to contain this panel.
     */
    render(target: HTMLElement): void;

    /** Toggles the visibility of this panel */
    toggle(): void;
}
