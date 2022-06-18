import { DOM } from "../../DOM.js";

export class ContainerFlex {
    classes;
    attr;

    nodes;

    constructor(classes = '', attributes = {}) {
        this.classes = classes;
        this.attr = attributes;
        this.nodes = [];
    }

    add(node) {
        this.nodes.push(node);
    }

    remove(node) {
        for (let i = 0; i < this.nodes.length; i++) {
            if (this.nodes[i] === node) {
                this.nodes.splice(i, 1);
                return true;
            }
        }

        return false;
    }

    build() {
        let children = [];
        this.nodes.forEach(node => children.push(node.build()));

        return DOM.tag({
            name: 'div',
            class: `d-flex ${this.classes}`,
            attributes: this.attr,
            content: children
        });
    }
}