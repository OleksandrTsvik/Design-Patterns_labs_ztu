import { Btn } from "./Btn.js";
import { DOM } from "../../DOM.js";

export class Link extends Btn {
    createElement(text, idTarget) {
        return DOM.tag({
            name: 'a',
            class: 'nav-link',
            attributes: {
                href: '#',
                'data-bs-toggle': 'tab',
                'data-bs-target': `#${idTarget}`,
                'role': 'tab',
                'aria-controls': idTarget,
                'aria-selected': 'false'
            },
            content: text
        });
    }
}