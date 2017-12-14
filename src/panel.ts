/** Describes a panel within the opened toolbar. */
abstract class Panel
{
    /**
     * Creates the panel.
     * @param name The name of the panel.
     */
    constructor(public name: string)
    {

    }

    /**
     * Renders the panel.
     * @param target The HTML element to contain this panel.
     */
    abstract render(target: HTMLElement): void;

    /**
     * Gets the buttons provided by this panel to be displayed in the collapsed toolbar.
     */
    abstract getButtons(): Button[];
}