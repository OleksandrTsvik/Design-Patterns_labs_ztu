import { Flyweight } from "./Flyweight.js";

export class FlyweightFactory {
    static #flyweights = {};

    static get(textColor, backgroundColor, height, width) {
        let key = `${textColor}_${backgroundColor}_${height}_${width}`;

        if (!this.#flyweights[key]) {
            this.#flyweights[key] = new Flyweight(textColor, backgroundColor, height, width);
        }

        return this.#flyweights[key];
    }

    static getCount() {
        return Object.keys(this.#flyweights).length;
    }
}