import { DOM } from "../../library/DOM.js";
import { Core } from "../../library/Creational Patterns/Singleton/Core.js";
import { ButtonDeleteFirstElemOnContainer } from "../../library/Structural Patterns/Proxy/ButtonDeleteFirstElemOnContainer.js";
import { ProxyButton } from "../../library/Structural Patterns/Proxy/ProxyButton.js";
import { BOOTSTRAP_JS, BOOTSTRAP_STYLE } from "../../config/config.js";

export function runProxy() {
    DOM.includeCSS(BOOTSTRAP_STYLE);
    DOM.includeJS(BOOTSTRAP_JS);

    Core.getInstance().addCaption('Proxy');

    let counter = 0;
    let elemsToRemove = [];

    for (let i = 0; i < 5; i++) {
        elemsToRemove.push(DOM.tag({
            name: 'div',
            class: 'list-group-item',
            content: ++counter
        }));
    }

    let container = DOM.tag({
        name: 'div',
        class: 'list-group',
        content: elemsToRemove,
        attributes: {
            id: 'cd-01'
        }
    });

    let addButton = DOM.tag({
        name: 'button',
        class: 'btn btn-success',
        content: 'Додати елемент'
    });

    addButton.addEventListener('click', () => {
        container.append(DOM.tag({
            name: 'div',
            class: 'list-group-item',
            content: ++counter
        }));
    });

    Core.getInstance().getMain().append(DOM.tag({
        name: 'p',
        class: 'text-end',
        content: addButton
    }), container);

    let wrapper = DOM.tag({
        name: 'div',
        class: 'd-flex gap-3 my-3'
    });

    let buttonDelete01 = new ButtonDeleteFirstElemOnContainer('bd-01', 'cd-01');
    buttonDelete01.appendTo(wrapper);

    let buttonDelete02 = new ProxyButton('bd-02', 'cd-01');
    buttonDelete02.appendTo(wrapper);

    Core.getInstance().getMain().append(wrapper);
}