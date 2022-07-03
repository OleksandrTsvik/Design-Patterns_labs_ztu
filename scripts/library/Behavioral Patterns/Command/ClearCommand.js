import { Command } from "./Command.js";

export class ClearCommand extends Command {
    execute() {
        this._editor.textarea.value = '';

        return true;
    }
}