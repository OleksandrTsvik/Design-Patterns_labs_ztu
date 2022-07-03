export class Command {
    _app;
    _editor;

    constructor(app, editor) {
        this._app = app;
        this._editor = editor;
    }

    execute() { }

    save() {
        this._app.save();
    }

    undo() {
        this._app.undo();
    }

    forward() {
        this._app.forward();
    }
}