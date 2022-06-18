import { DOM } from "../../DOM.js";

export class Alert {
    text;
    type;
    withBtn;
    link;
    attributes;

    constructor(text, type, withBtn = true, link = null, attr = {}) {
        this.text = text;
        this.type = type;
        this.withBtn = withBtn;
        this.link = link;
        this.attributes = attr;
    }

    createElement() {
        let alert = DOM.tag({
            name: 'div',
            class: `alert alert-${this.type}`,
            attributes: this.attributes,
            content: this.text
        });

        if (this.link) {
            alert.append(DOM.tag({ name: 'br' }), this.link.createElement());
        }
        if (this.withBtn) {
            this._createButton(alert);
        }

        return alert;
    }

    _createButton(alert) {
        alert.addClass('alert-dismissible');
        alert.append(DOM.tag({
            name: 'button',
            class: 'btn-close',
            attributes: {
                'data-bs-dismiss': 'alert',
                'aria-label': 'Close'
            }
        }));
    }

    clone() {
        return new Alert(
            this.text,
            this.type,
            this.withBtn,
            this.link ? this.link.clone() : null,
            this.attributes
        );
    }
}