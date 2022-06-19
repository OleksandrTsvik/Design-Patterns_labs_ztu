import { ButtonDeleteFirstElemOnContainer } from "./ButtonDeleteFirstElemOnContainer.js";
import { DOM } from "../../DOM.js";
import { ModalBuilder } from "../../Creational Patterns/Builder/ModalBuilder.js";

export class ProxyButton {
    #button;
    #modal;
    #buttonModal;

    constructor(buttonId, containerId) {
        this.#button = new ButtonDeleteFirstElemOnContainer(buttonId, containerId);

        this.#create();
    }

    get button() {
        return this.#button.button;
    }

    appendTo(elem) {
        elem.append(this.#buttonModal, this.#modal.getModal());
    }

    #create() {
        this.#button.button.removeAttribute('id');
        this.#button.button.setAttribute('data-bs-dismiss', 'modal');

        this.#buttonModal = DOM.tag({
            name: 'button',
            class: 'btn btn-warning',
            content: 'Видалити перший елемент',
        });

        this.#modal = new ModalBuilder(this.#button.id)
            .addHeader('Підтвердіть операцію')
            .addFooter([
                this.#button.button,
                DOM.tag({
                    name: 'button',
                    class: 'btn btn-success',
                    attributes: {
                        'data-bs-dismiss': 'modal'
                    },
                    content: 'Відмінити'
                })
            ])
            .setButton(this.#buttonModal)
            .build();
    }
}