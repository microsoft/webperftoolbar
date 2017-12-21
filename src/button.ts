export interface IButtonConfiguration {
    /** The icon for the button. The intention is to use a single character emoji but it's just a string, so anything goes */
    emoji?: string;

    /** Gets the background color for the button. */
    getColor?(): string;

    /** Gets the displayed value for the button. */
    getValue?(): string;
}

/** Describes a button to be displayed in the collapsed toolbar. */
export class Button {
    /** The icon for the button. The intention is to use a single character emoji but it's just a string, so anything goes */
    public readonly emoji: string;

    /** Gets the background color for the button. */
    public readonly getColor: (() => string);

    /** Gets the displayed value for the button. */
    public readonly getValue: (() => string);

    /**
     * Create the button.
     */
    public constructor(config: IButtonConfiguration = {}) {
        this.emoji = config.emoji !== undefined ? config.emoji : "";
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
        li.innerText = `${this.emoji} ${this.getValue()}`;

        container.appendChild(li);
    }
}
