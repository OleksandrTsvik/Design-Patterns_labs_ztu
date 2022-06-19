import { DOM } from "../../DOM.js";

export class ButtonDeleteFirstElemOnContainer {
    id;
    containerId;
    #button;

    constructor(buttonId, containerId) {
        this.id = buttonId;
        this.containerId = containerId;

        this.#create();
    }

    get button() {
        return this.#button;
    }

    appendTo(elem) {
        elem.append(this.#button);
    }

    #create() {
        this.#button = DOM.tag({
            name: 'button',
            class: 'btn btn-danger',
            content: 'Видалити перший елемент',
            attributes: {
                id: `${this.id}`
            }
        });

        let container = document.querySelector(`#${this.containerId}`);

        this.#button.addEventListener('click', () => {
            if (container && container.hasChildNodes()) {
                container.children[0].remove();
            }
        });
    }
}