import { IPanel } from "./ipanel";

/**
 * Responsible for holding and displaying panels
 */
export class PanelFrame {

    /** The element that represents the frame in the DOM. */
    private frame: HTMLDivElement;

    /** Tracks the visible state of the frame. */
    private isVisible: boolean;

    /**
     * Creates the panel frame.
     * @param toolbarRoot The DOM element to contain the frame. Should be the root of the toolbar.
     */
    public constructor(toolbarRoot: HTMLElement) {
        this.frame = document.createElement("div");
        toolbarRoot.appendChild(this.frame);

        this.isVisible = false;
    }

    /** Show the provided panel, or hide the displayed panel. */
    public toggle(panel: IPanel): void {
        if (this.isVisible) {
            this.frame.innerHTML = "";
        } else {
            panel.render(this.frame);
        }

        this.isVisible = !this.isVisible;
    }
}
