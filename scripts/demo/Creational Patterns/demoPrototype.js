import { Alert } from "../../library/Creational Patterns/Prototype/Alert.js";
import { AlertLink } from "../../library/Creational Patterns/Prototype/AlertLink.js";
import { DOM } from "../../library/DOM.js";
import { Core } from "../../library/Creational Patterns/Singleton/Core.js";
import { BOOTSTRAP_JS, BOOTSTRAP_STYLE } from "../../config/config.js";

export function runPrototype() {
    DOM.includeCSS(BOOTSTRAP_STYLE);
    DOM.includeJS(BOOTSTRAP_JS);

    let wrapper = DOM.tag({
        name: 'div',
        class: 'd-flex flex-column px-3 my-3'
    });

    let alert01 = new Alert('Alert #1', 'primary', false);
    let alert02 = new Alert('Alert #1', 'primary', false, new AlertLink('test link', '#'));

    let clone01Alert01 = alert01.clone();
    clone01Alert01.type = 'success';
    clone01Alert01.text = 'Clone Alert 01';

    let clone02Alert01 = clone01Alert01.clone();
    clone02Alert01.type = 'warning';
    clone02Alert01.withBtn = true;

    let clone03Alert02 = alert02.clone();
    clone03Alert02.withBtn = true;
    clone03Alert02.link.text = 'Clone link alert';

    wrapper.append(
        alert01.createElement(),
        alert02.createElement(),
        clone01Alert01.createElement(),
        clone02Alert01.createElement(),
        clone03Alert02.createElement()
    );
    Core.getInstance().getMain().append(wrapper);
}