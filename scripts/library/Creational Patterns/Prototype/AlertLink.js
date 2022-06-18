import { DOM } from "../../DOM.js";

export class AlertLink {
    text;
    link;

    constructor(text, link) {
        this.text = text;
        this.link = link;
    }

    createElement() {
        return DOM.tag({
            name: 'a',
            class: 'alert-link',
            attributes: {
                href: this.link
            },
            content: this.text
        });
    }

    clone() {
        return new AlertLink(this.text, this.link);
    }
}