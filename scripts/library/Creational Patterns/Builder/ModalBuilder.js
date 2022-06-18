import { Modal } from "./Modal.js";
import { DOM } from "../../DOM.js";

export class ModalBuilder {
    modal;

    constructor(id) {
        this.modal = new Modal(id);
    }

    addHeader(content) {
        if (typeof content === 'string') {
            content = [
                DOM.tag({
                    name: 'h5',
                    class: 'modal-title',
                    content: content
                }),
                DOM.tag({
                    name: 'button',
                    class: 'btn-close',
                    attributes: {
                        'data-bs-dismiss': 'modal',
                        'aria-label': 'Close'
                    }
                })
            ];
        }

        this.modal.header = DOM.tag({
            name: 'div',
            class: 'modal-header',
            content: content
        });

        this.modal.modalContent.append(this.modal.header);
        return this;
    }

    addBody(content) {
        if (typeof content === 'string') {
            content = DOM.tag({
                name: 'p',
                content: content
            });
        }

        this.modal.body = DOM.tag({
            name: 'div',
            class: 'modal-body',
            content: content
        });

        this.modal.modalContent.append(this.modal.body);
        return this;
    }

    addFooter(content) {
        if (typeof content === 'string') {
            content = DOM.tag({
                name: 'button',
                class: 'btn btn-secondary',
                attributes: {
                    'data-bs-dismiss': 'modal'
                },
                content: content
            });
        }

        this.modal.footer = DOM.tag({
            name: 'div',
            class: 'modal-footer',
            content: content
        });

        this.modal.modalContent.append(this.modal.footer);
        return this;
    }

    setButton(content) {
        if (typeof content === 'string') {
            content = DOM.tag({
                name: 'button',
                class: 'btn btn-primary',
                content: content
            });
        }

        this.modal.button = content;

        this.modal.button.setAttribute('data-bs-toggle', 'modal');
        this.modal.button.setAttribute('data-bs-target', `#${this.modal.id}`);

        return this;
    }

    build() {
        return this.modal;
    }
}