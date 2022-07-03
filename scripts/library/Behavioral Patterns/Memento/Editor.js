import { DOM } from "../../DOM.js";
import { Memento } from "./Memento.js";

export class Editor {
    #elemEditor;

    #textarea;
    #undo;
    #forward;
    #copy;
    #clear;

    constructor() {
        this.#create();
    }

    createMemento() {
        return new Memento(this, this.text);
    }

    setText(text) {
        this.#textarea.value = text;
    }

    #create() {
        this.#textarea = DOM.tag({
            name: 'textarea',
            class: 'textarea'
        });

        this.#undo = DOM.tag({
            name: 'button',
            class: 'btn btn-outline-dark',
            attributes: {
                style: 'box-shadow: none;'
            },
            content: DOM.tag({
                name: 'i',
                class: 'bi bi-arrow-90deg-left'
            })
        });

        this.#forward = DOM.tag({
            name: 'button',
            class: 'btn btn-outline-dark',
            attributes: {
                style: 'box-shadow: none;'
            },
            content: DOM.tag({
                name: 'i',
                class: 'bi bi-arrow-90deg-right'
            })
        });

        this.#copy = DOM.tag({
            name: 'button',
            class: 'btn btn-outline-dark',
            attributes: {
                style: 'box-shadow: none;'
            },
            content: DOM.tag({
                name: 'i',
                class: 'bi bi-clipboard'
            })
        });

        this.#clear = DOM.tag({
            name: 'button',
            class: 'btn btn-outline-dark',
            attributes: {
                style: 'box-shadow: none;'
            },
            content: DOM.tag({
                name: 'i',
                class: 'bi bi-x-lg'
            })
        });

        this.#elemEditor = DOM.tag({
            name: 'div',
            class: 'd-flex flex-column gap-2 mb-3',
            content: [
                DOM.tag({
                    name: 'div',
                    class: 'd-flex justify-content-end gap-2',
                    content: [this.btnUndo, this.btnForward, this.btnCopy, this.btnClear]
                }),
                this.textarea
            ]
        });
    }

    get elemEditor() {
        return this.#elemEditor;
    }

    get textarea() {
        return this.#textarea;
    }

    get btnUndo() {
        return this.#undo;
    }

    get btnForward() {
        return this.#forward;
    }

    get btnCopy() {
        return this.#copy;
    }

    get btnClear() {
        return this.#clear;
    }

    get text() {
        return this.#textarea.value;
    }
}