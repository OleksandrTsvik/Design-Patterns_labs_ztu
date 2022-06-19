import { Alert } from "../../Creational Patterns/Prototype/Alert.js";
import { NotifierDecorator } from "./NotifierDecorator.js";

export class BootstrapAlert extends NotifierDecorator {
    alert;
    appendTo;

    constructor(
        notifier, appendTo,
        typeAlert = 'info', withBtnClose = true,
        link = null, attr = {}
    ) {
        super(notifier);

        this.appendTo = appendTo;
        this.alert = new Alert('', typeAlert, withBtnClose, link, attr);
    }

    send(message) {
        super.send(message);

        this.alert.text = message;
        this.appendTo.append(this.alert.createElement());
    }
}