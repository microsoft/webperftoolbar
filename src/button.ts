export interface IButtonConfiguration
{
    /** The icon for the button. The intention is to use a single character emoji but it's just a string, so anything goes */
    emoji?: string;
    /** Gets the displayed value for the button. */
    getValue?: () => string;
    /** Gets the background color for the button. */
    getColor?: () => string;
}

/** Describes a button to be displayed in the collapsed toolbar. */
export class Button
{
    /** The icon for the button. The intention is to use a single character emoji but it's just a string, so anything goes */
    public readonly emoji: string;

    /** Gets the displayed value for the button. */
    public readonly getValue: () => string;

    /** Gets the background color for the button. */
    public readonly getColor: () => string;

    /**
     * Create the button.
     */
    constructor(config: IButtonConfiguration = {})
    {
        this.emoji = config.emoji || "";
        this.getValue = config.getValue || (() => "");
        this.getColor = config.getValue || (() => "");
    }

    /**
     * Renders the button by adding it as a new child.
     * @param container The DOM node that should contain this button.
     */
    public render(container: HTMLElement): void
    {
        const li = document.createElement("li");
        li.setAttribute("style", `background-color:${this.getColor()}`);
        li.innerText = `${this.emoji} ${this.getValue()}`;

        container.appendChild(li);
    }
}