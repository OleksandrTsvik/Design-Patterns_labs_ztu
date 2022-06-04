import { PageFactory } from "../PageFactory.js";

import { BootstrapHeader } from "./BootstrapHeader.js";
import { BootstrapMain } from "./BootstrapMain.js";
import { BootstrapFooter } from "./BootstrapFooter.js";

import { DOM } from "../../DOM.js";
import { BOOTSTRAP_JS, BOOTSTRAP_STYLE } from "../../../config/config.js";

export class BootstrapPage extends PageFactory {
    constructor(params) {
        super(params);
    }

    applySettings() {
        DOM.query('body').addClass('d-flex flex-column h-100');
        DOM.query('html').addClass('h-100');

        DOM.includeCSS(BOOTSTRAP_STYLE);
        DOM.includeJS(BOOTSTRAP_JS);
    }

    createHeader() {
        return new BootstrapHeader(this.params.header.links);
    }

    createMain() {
        return new BootstrapMain();
    }

    createFooter() {
        return new BootstrapFooter(this.params.footer.text);
    }
}