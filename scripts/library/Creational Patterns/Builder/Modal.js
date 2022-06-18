import { DOM } from "../../DOM.js";

export class Modal {
    id;

    wrapper;
    modalDialog;
    modalContent;
    button;

    constructor(id) {
        this.id = id;

        this.modalContent = DOM.tag({
            name: 'div',
            class: 'modal-content'
        });

        this.modalDialog = DOM.tag({
            name: 'div',
            class: 'modal-dialog',
            content: this.modalContent
        });

        this.wrapper = DOM.tag({
            name: 'div',
            class: 'modal',
            attributes: {
                id: id,
                tabindex: -1,
                'aria-hidden': true
            },
            content: this.modalDialog
        });
    }

    getModal() {
        return this.wrapper;
    }

    getButton() {
        return this.button;
    }
}