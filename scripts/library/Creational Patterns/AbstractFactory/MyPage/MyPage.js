import { PageFactory } from "../PageFactory.js";

import { MyHeader } from "./MyHeader.js";
import { MyMain } from "./MyMain.js";
import { MyFooter } from "./MyFooter.js";

export class MyPage extends PageFactory {
    constructor(params) {
        super(params);
    }

    createHeader() {
        return new MyHeader(this.params.header.links);
    }

    createMain() {
        return new MyMain();
    }

    createFooter() {
        return new MyFooter(this.params.footer.text);
    }
}