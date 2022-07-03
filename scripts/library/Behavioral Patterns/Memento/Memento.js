export class Memento {
    #editor;
    #text;

    constructor(editor, text) {
        this.#editor = editor;
        this.#text = text;
    }

    restore() {
        this.#editor.setText(this.#text);
    }
}