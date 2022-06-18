import { Tabs } from "./Tabs.js";
import { DOM } from "../../../DOM.js";

export class HorizontalTabs extends Tabs {
    constructor(params, button) {
        super(params, button);
    }

    createElement() {
        let container = DOM.tag({ name: 'div' });
        let navbar = DOM.tag({ name: 'nav' });

        let containerButtons = DOM.tag({
            name: 'div',
            class: 'nav nav-tabs',
            attributes: {
                'role': 'tablist'
            }
        });

        let containerText = DOM.tag({
            name: 'div',
            class: 'tab-content'
        });

        this.params.forEach(tab => {
            containerButtons.append(this.button.createElement(tab.title, tab.id));

            containerText.append(DOM.tag({
                name: 'div',
                class: 'tab-pane fade',
                attributes: {
                    id: tab.id,
                    role: 'tabpanel'
                },
                content: tab.text
            }));
        });

        navbar.append(containerButtons);
        container.append(navbar, containerText);
        return container;
    }
}