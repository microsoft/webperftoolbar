
/** Describes the toolbar. */
export class Toolbar
{
    private root: HTMLElement;

    /**
     * Creates the toolbar.
     * @param panels The panels to be displayed when the toolbar is opened.
     * @param container Optional parameter that defaults to the body of the HTML page.
     */
    constructor(private panels: Panel[], container: HTMLElement = window.document.body)
    {
        this.root = document.createElement("div");
        container.appendChild(this.root);
    }

    public render(container: HTMLElement): void
    {
        var out: string[] = new Array(4);
        out.push("<ul>");
        for(let p of this.panels)
        {
            for(let b of p.getButtons())
            {
                out.push(`<li style="background-color:{$b}">${b.emoji} ${b.getValue()}</li>`);
            }
        }
        out.push("</ul>");
        container.innerHTML = out.join("");
    }
}