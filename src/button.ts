/** Describes a button to be displayed in the collapsed toolbar. */
export class Button
{
    /**
     * Create the button.
     * @param emoji The icon for the button. The intention is to use a single character emoji
     *   but it's just a string, so anything goes.
     * @param getValue Gets the displayed value for the button.
     * @param getColor Gets the background color for the button.
     */
    constructor(public emoji: string, public getValue: () => string, public getColor: () => string)
    {

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