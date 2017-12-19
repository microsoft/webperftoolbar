import "Button"; import { Button } from './button';

/** Describes a panel within the opened toolbar. */
export interface IPanel
{
    name: string;

    /**
     * Renders the panel.
     * @param target The HTML element to contain this panel.
     */
    render(target: HTMLElement): void;

    /**
     * Gets the buttons provided by this panel to be displayed in the collapsed toolbar.
     */
    getButtons(): Button[];
}