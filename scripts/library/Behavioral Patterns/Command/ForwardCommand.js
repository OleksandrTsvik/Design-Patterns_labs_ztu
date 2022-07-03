import { Command } from "./Command.js";

export class ForwardCommand extends Command {
    execute() {
        this._app.forward();
        return false;
    }
}