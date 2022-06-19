import { FlyweightFactory } from "./FlyweightFactory.js";
import { DOM } from "../../DOM.js";

export class Cell {
    content;
    row;
    column;

    flyweight;

    constructor(content, row, column, textColor, backgroundColor, height, width) {
        this.content = content;
        this.row = row;
        this.column = column;

        this.flyweight = FlyweightFactory.get(textColor, backgroundColor, height, width);
    }

    create() {
        return DOM.tag({
            name: 'td',
            content: DOM.tag({
                name: 'div',
                class: 'p-0 mx-auto',
                content: this.content,
                attributes: {
                    style: `background-color: ${this.flyweight.backgroundColor}; ` +
                            `color: ${this.flyweight.textColor}; ` +
                            `height: ${this.flyweight.height}px; ` +
                            `width: ${this.flyweight.width}px;`
                }
            }),
        });
    }
}