/** Describes a button to be displayed in the collapsed toolbar. */
class Button
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
}