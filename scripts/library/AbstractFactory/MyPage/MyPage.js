import { PageFactory } from "../PageFactory.js";

import { MyHeader } from "./MyHeader.js";
import { MyMain } from "./MyMain.js";
import { MyFooter } from "./MyFooter.js";

import { DOM } from "../../DOM.js";
import { MY_STYLE } from "../../../config/config.js";

export class MyPage extends PageFactory {
    constructor(params) {
        super(params);
    }

    applySettings() {
        DOM.includeCSS(MY_STYLE);
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