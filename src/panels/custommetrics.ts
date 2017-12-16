import { Button } from '../button';
import { IPanel } from '../ipanel';


/** Describes the custom metrics panel. */
export class CustomMetricPanel implements IPanel
{
    /** @see Panel.name */
    name: string;
    /**
     * Creates the panel.
     * @param goals The goals this panel should display.
     */
    constructor(goals: Goal[])
    {

    }

    /** @see Panel.render */
    render(target: HTMLElement): void
    {

    }

    /** @see Panel.getButtons */
    getButtons(): Button[]
    {
        return undefined;
    }
}