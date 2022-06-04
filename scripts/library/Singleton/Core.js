import { MyPage } from "../AbstractFactory/MyPage/MyPage.js";
import { BootstrapPage } from "../AbstractFactory/BootstrapPage/BootstrapPage.js";
import { DOM } from "../DOM.js";

import { PAGE_PARAMS, STYLE, INIT_STYLE } from "../../config/config.js";

const Singleton = (function () {
    let instance = null;

    let header, main, footer;

    let isFirstInit = true;

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
                break;
            default:
                page = new MyPage(PAGE_PARAMS);
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
