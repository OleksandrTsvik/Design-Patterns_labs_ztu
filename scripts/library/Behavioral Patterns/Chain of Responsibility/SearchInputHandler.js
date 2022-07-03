import { Handler } from "./Handler.js";
import { DOM } from "../../DOM.js";

export class SearchInputHandler extends Handler {
    handle(params) {
        if (params.hasOwnProperty('searchInputAppendTo') &&
            params.hasOwnProperty('buttonId') &&
            params.hasOwnProperty('inputId')
        ) {
            params.searchInputAppendTo.append(DOM.tag({
                name: 'div',
                class: 'input-group mb-3',
                content: [
                    DOM.tag({
                        name: 'input',
                        class: 'form-control',
                        attributes: {
                            style: 'box-shadow: none;',
                            id: params.inputId,
                            placeholder: 'Назва міста'
                        }
                    }),
                    DOM.tag({
                        name: 'button',
                        class: 'btn btn-outline-primary',
                        attributes: {
                            style: 'box-shadow: none;',
                            id: params.buttonId
                        },
                        content: DOM.tag({
                            name: 'i',
                            class: 'bi bi-search'
                        })
                    })
                ]
            }));
        } else {
            super.handle(params);
        }
    }
}