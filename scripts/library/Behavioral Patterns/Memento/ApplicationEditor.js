import { Editor } from "./Editor.js";
import { CommandHistory } from "../Command/CommandHistory.js";
import { UndoCommand } from "../Command/UndoCommand.js";
import { ForwardCommand } from "../Command/ForwardCommand.js";
import { CopyCommand } from "../Command/CopyCommand.js";
import { ClearCommand } from "../Command/ClearCommand.js";

export class ApplicationEditor {
    #editor;
    #commandHistory;

    #undoCommand;
    #forwardCommand;
    #copyCommand;
    #clearCommand;

    constructor() {
        this.#editor = new Editor(this, this.#editor);
        this.#commandHistory = new CommandHistory(this.#editor);

        this.#undoCommand = new UndoCommand(this, this.#editor);
        this.#forwardCommand = new ForwardCommand(this, this.#editor);
        this.#copyCommand = new CopyCommand(this, this.#editor);
        this.#clearCommand = new ClearCommand(this, this.#editor);

        this.#editor.textarea.addEventListener('input', () => {
            this.save();
        });

        this.#editor.btnUndo.addEventListener('click', () => {
            this.#executeCommand(this.#undoCommand);
        });

        this.#editor.btnForward.addEventListener('click', () => {
            this.#executeCommand(this.#forwardCommand);
        });

        this.#editor.btnCopy.addEventListener('click', () => {
            this.#executeCommand(this.#copyCommand);
        });

        this.#editor.btnClear.addEventListener('click', () => {
            this.#executeCommand(this.#clearCommand);
        });
    }

    addTo(appendTo) {
        appendTo.append(this.#editor.elemEditor);
    }

    save() {
        this.#commandHistory.pushMemento(this.#editor.createMemento());
    }

    undo() {
        let memento = this.#commandHistory.prev();
        if (memento) {
            memento.restore();
        }
    }

    forward() {
        let memento = this.#commandHistory.next();
        if (memento) {
            memento.restore();
        }
    }

    #executeCommand(command) {
        if (command.execute()) {
            this.save();
        }
    }
}