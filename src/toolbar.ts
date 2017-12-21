import { IPanel } from './ipanel';

/** Describes the toolbar. */
export class Toolbar
{
    private root: HTMLElement;

    /**
     * Creates the toolbar.
     * @param panels The panels to be displayed when the toolbar is opened.
     * @param container Optional parameter that defaults to the body of the HTML page.
     */
    constructor(private panels: IPanel[], private container: HTMLElement = window.document.body)
    {
        this.root = document.createElement("div");
        container.appendChild(this.root);
    }

    public render(): void
    {
        // clear all children
        this.container.innerHTML = "";

        const ul = document.createElement("ul");
        for(let p of this.panels)
        {
            for(let b of p.getButtons())
            {
                b.render(ul);
            }
        }

        this.container.appendChild(ul);
    }
}
