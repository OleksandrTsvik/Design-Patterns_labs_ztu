import { ContainerFlex } from "../library/Composite/ContainerFlex.js";
import { NodeFlex } from "../library/Composite/NodeFlex.js";
import { Core } from "../library/Singleton/Core.js";
import { DOM } from "../library/DOM.js";
import { BOOTSTRAP_JS, BOOTSTRAP_STYLE } from "../config/config.js";

export function runComposite() {
    DOM.includeCSS(BOOTSTRAP_STYLE);
    DOM.includeJS(BOOTSTRAP_JS);

    let wrapper = DOM.tag({
        name: 'div',
        class: 'd-flex flex-column mt-3 mb-4 gap-3'
    });

    // ========== Container Flex #01 ========== //
    let container01Flex01 = new ContainerFlex();
    container01Flex01.add(new NodeFlex('Item 1', 'align-self-start p-3 border bg-light'));

    let container01Flex02 = new ContainerFlex('align-items-center');
    container01Flex02.add(new NodeFlex('Item 2'));
    container01Flex02.add(new NodeFlex('Item 3'));

    let container01Flex03 = new ContainerFlex('flex-column');

    let container01Flex04 = new ContainerFlex('flex-column');
    container01Flex04.add(new NodeFlex('Item 4'));
    container01Flex04.add(new NodeFlex('Item 5'));

    let container01Flex05 = new ContainerFlex();
    container01Flex05.add(new NodeFlex('Item 6'));
    container01Flex05.add(new NodeFlex('Item 7'));

    container01Flex02.add(container01Flex03);
    container01Flex03.add(container01Flex04);
    container01Flex03.add(container01Flex05);
    container01Flex01.add(container01Flex02);

    // ========== Container Flex #02 ========== //
    let container02Flex01 = new ContainerFlex('flex-column');

    let container02Flex02 = new ContainerFlex();
    container02Flex02.add(new NodeFlex('Логін', 'flex-fill form-label p-2 px-3 m-0 border bg-light', 'label', {for: 'con02f-login'}));
    container02Flex02.add(new NodeFlex('Пароль', 'flex-fill form-label p-2 m-0 border bg-light', 'label', {for: 'con02f-pass'}));

    let container02Flex03 = new ContainerFlex();
    container02Flex03.add(new NodeFlex('', 'flex-fill form-control border', 'input', {id: 'con02f-login'}));
    container02Flex03.add(new NodeFlex('', 'flex-fill form-control border', 'input', {id: 'con02f-pass'}));

    let container02Flex04 = new ContainerFlex('justify-content-center');
    container02Flex04.add(new NodeFlex('Submit', 'btn btn-primary w-25 mt-2', 'button'));

    container02Flex01.add(container02Flex02);
    container02Flex01.add(container02Flex03);
    container02Flex01.add(container02Flex04);

    wrapper.append(
        getTitle('Container Flex #01'), container01Flex01.build(),
        getTitle('Container Flex #02'), container02Flex01.build()
    );
    Core.getInstance().getMain().append(wrapper);
}

function getTitle(txt) {
    return DOM.tag({
        name: 'h3',
        class: 'text-center text-primary font-monospace',
        content: txt
    });
}