const getButtonStyles = () => `
#PTB_buttons {
    position:fixed;
    bottom: 0;
    left: 50px;

    list-style:none;
    padding:0;
    margin:0;

    z-index: 2147483647; /* we're on top */
}
#PTB_buttons li {
    display:inline-block;
    line-height:1.6em;
    margin-left:0.5em;
    padding:0.2em;
    cursor:pointer;

    border:1px solid black;
    border-bottom: none;
}
#PTB_buttons li:first-child {
    margin-left:0;
}
`;

const getFrameStyles = () => `
#PTB_frame {
    position:fixed;
    left:0;
    top:0;

    width:100%;
    height:100%;
    overflow:auto;

    padding:0.5em;
    background:rgba(255, 255, 255, 0.95);
    z-index:2147483646; /* we're one layer below the top */
}

#PTB_frame table {
    margin-top:0.5em;
    border-collapse: collapse;
    border-spacing: 0;
    border: 1px solid black;
}
#PTB_frame th {
    font-weight: bold;
}
#PTB_frame th,
#PTB_frame td {
    border: 1px solid black;
    padding:0.2em;
}

#PTB_frame .numeric {
    text-align: right;
}
`;

/**
 * Add the styles for the library to the DOM.
 * Apologies to future maintainers for encoding CSS in JS strings like this, the intention is to
 * make the library distributable as a singe JavaScript file and this is a simple way to do it.
 */
export const addStylesToDom = (head: Element = document.head) => {
    const styleElement = document.createElement("style");
    styleElement.type = "text/css";
    styleElement.innerHTML = getButtonStyles() + getFrameStyles();

    head.appendChild(styleElement);
};
