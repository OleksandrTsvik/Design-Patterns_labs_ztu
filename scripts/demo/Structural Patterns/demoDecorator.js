import { Core } from "../../library/Creational Patterns/Singleton/Core.js";
import { DOM } from "../../library/DOM.js";
import { Notifier } from "../../library/Structural Patterns/Decorator/Notifier.js";
import { BootstrapAlert } from "../../library/Structural Patterns/Decorator/BootstrapAlert.js";
import { BootstrapModal } from "../../library/Structural Patterns/Decorator/BootstrapModal.js";
import { BOOTSTRAP_JS, BOOTSTRAP_STYLE } from "../../config/config.js";

export function runDecorator() {
    DOM.includeCSS(BOOTSTRAP_STYLE);
    DOM.includeJS(BOOTSTRAP_JS);

    Core.getInstance().addCaption('Decorator');

    let containerButtons = DOM.tag({
        name: 'div',
        class: 'd-flex my-3 gap-3'
    });
    let wrapper = DOM.tag({
        name: 'div',
        class: 'd-flex flex-column my-3'
    });

    let description = DOM.tag({
        name: 'div',
        content: [
            DOM.tag({ name: 'p', content: 'notifier00: notifier' }),
            DOM.tag({ name: 'p', content: 'notifier01: notifier + BootstrapAlert' }),
            DOM.tag({ name: 'p', content: 'notifier02: notifier + BootstrapAlert + BootstrapModal' }),
            DOM.tag({ name: 'p', content: 'notifier03: notifier + BootstrapModal' })
        ]
    });

    wrapper.append(description, containerButtons);
    Core.getInstance().getMain().append(wrapper);

    // ========== Notifier #00 ========== //
    let notifier00 = new Notifier();

    let btn00 = createBtn("notifier00", "secondary");
    btn00.addEventListener('click', () => notifier00.send("Notifier #0"));

    // ========== Notifier #01 ========== //
    let notifier01 = new Notifier();
    notifier01 = new BootstrapAlert(notifier01, wrapper);

    let btn01 = createBtn("notifier01");
    btn01.addEventListener('click', () => notifier01.send("Notifier #1"));

    // ========== Notifier #02 ========== //
    let btn02 = createBtn("notifier02", "dark");

    let notifier02 = new Notifier();
    notifier02 = new BootstrapAlert(notifier02, wrapper);
    notifier02 = new BootstrapModal(notifier02, wrapper, "mn-01", btn02);

    btn02.addEventListener('click', () => notifier02.send("Notifier #2"));

    // ========== Notifier #03 ========== //
    let btn03 = createBtn("notifier03", "success");

    let notifier03 = new Notifier();
    notifier03 = new BootstrapModal(notifier03, wrapper, "mn-03", btn03);

    btn03.addEventListener('click', () => notifier03.send("Notifier #3"));

    containerButtons.append(btn00, btn01, btn02, btn03);
}

function createBtn(text, type = 'primary') {
    return DOM.tag({
        name: 'button',
        class: `btn btn-${type}`,
        content: text
    });
}