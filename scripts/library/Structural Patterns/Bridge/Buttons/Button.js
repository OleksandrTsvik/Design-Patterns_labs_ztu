import { Btn } from "./Btn.js";
import { DOM } from "../../../DOM.js";

export class Button extends Btn {
    createElement(text, idTarget) {
        return DOM.tag({
            name: 'button',
            class: 'nav-link',
            attributes: {
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