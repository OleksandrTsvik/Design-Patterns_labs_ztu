import { Command } from "./Command.js";

export class CopyCommand extends Command {
    execute() {
        this._editor.textarea.select();
        document.execCommand('copy');
        this._editor.textarea.setSelectionRange(0, 0);

        return false;
    }
}