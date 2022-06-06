import { DOM } from "../DOM.js";

export class NodeFlex {
    content;
    classes;
    name;
    attr;

    constructor(content, classes = 'p-3 border bg-light', name = 'div', attributes = {}) {
        this.content = content;
        this.classes = classes;
        this.name = name;
        this.attr = attributes;
    }

    build() {
        return DOM.tag({
            name: this.name,
            class: this.classes,
            content: this.content,
            attributes: this.attr
        });
    }
}