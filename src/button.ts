import { IPanel } from "./ipanel";

/**
 * The configuration options for constructing a button.
 */
export interface IButtonConfiguration {
    /** The icon for the button. The intention is to use a single character emoji but it's just a string, so anything goes. */
    emoji?: string;

    /** The panel that owns this button. */
    parent?: IPanel;

    /** The name of the button, exposed in the title attribute for the button. */
    title?: string;

    /** Gets the background color for the button. */
    getColor?(): string;

    /** Gets the displayed value for the button. */
    getValue?(): string;
}

/** Describes a button to be displayed in the collapsed toolbar. */
export class Button {
    /** The icon for the button. The intention is to use a single character emoji but it's just a string, so anything goes. */
    public readonly emoji: string;

    /** Gets the background color for the button. */
    public readonly getColor: (() => string);

    /** Gets the displayed value for the button. */
    public readonly getValue: (() => string);

    /** The panel that provides this button. */
    public readonly parent: IPanel | undefined;

    /** The name of the button, exposed in the title attribute for the button. */
    public readonly title: string;

    /**
     * Create the button.
     */
    public constructor(config: IButtonConfiguration = {}) {
        this.title = config.title !== undefined ? config.title : "";
        this.emoji = config.emoji !== undefined ? config.emoji : "";
        this.parent = config.parent;
        /* tslint:disable no-unbound-method */
        this.getValue = config.getValue !== undefined ? config.getValue : (): string => "";
        this.getColor = config.getColor !== undefined ? config.getColor : (): string => "";
        /* tslint:enable no-unbound-method */
    }

    /**
     * Renders the button by adding it as a new child.
     * @param container The DOM node that should contain this button.
     */
    public render(container: HTMLElement): void {
        const li: HTMLLIElement = document.createElement("li");
        li.setAttribute("style", `background-color:${this.getColor()}`);
        li.setAttribute("title", this.title);
        li.innerText = `${this.emoji} ${this.getValue()}`;

        li.addEventListener("click", () => {
            if (this.parent) {
                this.parent.toggle();
            }
        });

        container.appendChild(li);
    }
}
