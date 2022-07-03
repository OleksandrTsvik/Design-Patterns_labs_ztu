import { Command } from "./Command.js";

export class UndoCommand extends Command {
    execute() {
        this._app.undo();
        return false;
    }
}