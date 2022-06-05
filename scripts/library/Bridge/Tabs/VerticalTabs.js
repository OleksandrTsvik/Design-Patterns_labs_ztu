import { Tabs } from "./Tabs.js";
import { DOM } from "../../DOM.js";

export class VerticalTabs extends Tabs {
    constructor(params, button) {
        super(params, button);
    }

    createElement() {
        let container = DOM.tag({
            name: 'div',
            class: 'd-flex align-items-start'
        });

        let containerButtons = DOM.tag({
            name: 'div',
            class: 'nav flex-column nav-pills me-3',
            attributes: {
                'role': 'tablist',
                'aria-orientation': 'vertical'
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

        container.append(containerButtons, containerText);
        return container;
    }
}