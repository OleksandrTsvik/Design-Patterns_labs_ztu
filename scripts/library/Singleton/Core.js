import { MyPage } from "../AbstractFactory/MyPage/MyPage.js";
import { BootstrapPage } from "../AbstractFactory/BootstrapPage/BootstrapPage.js";
import { DOM } from "../DOM.js";

import { PAGE_PARAMS, STYLE, INIT_STYLE, MY_STYLE, BOOTSTRAP_STYLE, BOOTSTRAP_JS } from "../../config/config.js";

const Singleton = (function () {
    let instance = null;
    let isFirstInit = true;

    let header, main, footer;

    function getInstance() {
        if (instance) {
            return instance;
        }

        instance = { init, getHeader, getMain, getFooter };
        return instance;
    }

    function init(style) {
        if (!isFirstInit) {
            return;
        }

        isFirstInit = false;
        DOM.includeCSS(STYLE);

        let page;
        switch (style) {
            case INIT_STYLE.bootstrap:
                page = new BootstrapPage(PAGE_PARAMS);

                DOM.includeCSS(BOOTSTRAP_STYLE);
                DOM.includeJS(BOOTSTRAP_JS);
                break;
            default:
                page = new MyPage(PAGE_PARAMS)

                DOM.includeCSS(MY_STYLE);
                break;
        }

        clientCreatePage(page);
        document.body.append(header, main, footer);
    }

    function getHeader() {
        return header;
    }

    function getMain() {
        return main;
    }

    function getFooter() {
        return footer;
    }

    function clientCreatePage(page) {
        page.applySettings();
        header = page.createHeader().render();
        main = page.createMain().render();
        footer = page.createFooter().render();
    }

    return { getInstance };
})();

export { Singleton as Core };



// class Singleton {
//     static #instance
//
//     constructor() {
//         if (Singleton.#instance) {
//             return Singleton.#instance;
//         }
//
//         this.date = Math.random();
//         Singleton.#instance = this;
//     }
//
//     static getInstance() {
//         return Singleton.#instance;
//     }
// }
