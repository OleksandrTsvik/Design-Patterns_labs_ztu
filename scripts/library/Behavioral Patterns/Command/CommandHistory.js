export class CommandHistory {
    _editor;

    #history;
    #historyIndex;

    constructor(editor) {
        this._editor = editor;
        this.resetHistory();
    }

    pushMemento(memento) {
        if (this.#historyIndex !== this.#history.length - 1) {
            this.#history.splice(this.#historyIndex + 1);
        }

        this.#historyIndex = this.#history.length;
        this.#history.push(memento);
    }

    prev() {
        if (this.#historyIndex > 0) {
            this.#historyIndex--;
        }

        return this.#history[this.#historyIndex];
    }

    next() {
        if (this.#historyIndex < this.#history.length - 1) {
            this.#historyIndex++;
        }

        return this.#history[this.#historyIndex];
    }

    getMementoByIndex(index) {
        return this.#history[index];
    }

    resetHistory() {
        this.#history = [this._editor.createMemento()];
        this.#historyIndex = 0;
    }
}