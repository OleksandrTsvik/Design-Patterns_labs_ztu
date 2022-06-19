export class NotifierDecorator {
    notifier;

    constructor(notifier) {
        this.notifier = notifier;
    }

    send(message) {
        this.notifier.send(message);
    }
}