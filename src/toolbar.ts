import { IPanel } from "./ipanel";

/** Describes the toolbar. */
export class Toolbar {
    /** The container that will hold the toolbar */
    private container: HTMLElement;

    /** The panels that will be displayed in the toolbar */
    private panels: IPanel[];

    /** The root element of the toolbar. */
    private root: HTMLElement;

    /**
     * Creates the toolbar.
     * @param panels The panels to be displayed when the toolbar is opened.
     * @param container Optional parameter that defaults to the body of the HTML page.
     */
    public constructor(panels: IPanel[], container: HTMLElement = window.document.body) {
        this.panels = panels;
        this.container = container;
        this.root = document.createElement("div");
        container.appendChild(this.root);
    }

    /**
     * Renders the toolbar.
     */
    public render(): void {
        // Clear all children
        this.container.innerHTML = "";

        const ul: HTMLUListElement = document.createElement("ul");
        for (const p of this.panels) {
            for (const b of p.getButtons()) {
                b.render(ul);
            }
        }

        this.container.appendChild(ul);
    }
}
