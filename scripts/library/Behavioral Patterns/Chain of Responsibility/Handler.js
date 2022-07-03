export class Handler {
    #nextHandler;

    setNext(handler) {
        this.#nextHandler = handler;
        return handler;
    }

    handle(params) {
        if (this.#nextHandler) {
            return this.#nextHandler.handle(params);
        }

        return null;
    }
}