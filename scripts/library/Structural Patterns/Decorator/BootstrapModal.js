import { ModalBuilder } from "../../Creational Patterns/Builder/ModalBuilder.js";
import { NotifierDecorator } from "./NotifierDecorator.js";

export class BootstrapModal extends NotifierDecorator {
    modal;
    modalBuilder;
    modalBtn;

    constructor(notifier, appendTo, modalId, modalBtn) {
        super(notifier);

        this.modalBuilder = new ModalBuilder(modalId);
        this.modalBtn = modalBtn;

        this.#createModal();
        appendTo.append(this.modal.getModal());
    }

    send(message) {
        super.send(message);

        this.modal.header.querySelector('h5.modal-title').innerHTML = message;
    }

    #createModal() {
        this.modal = this.modalBuilder
            .addHeader('')
            .setButton(this.modalBtn)
            .build();
    }
}