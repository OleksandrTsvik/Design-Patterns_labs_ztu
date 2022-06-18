import { Header } from "../Header.js";
import { DOM } from "../../../DOM.js";

export class BootstrapHeader extends Header {
    render() {
        let items = [];

        for(let txt in this.links) {
            items.push(DOM.tag({
                name: 'a',
                class: 'nav-link',
                attributes: {
                    href: this.links[txt]
                },
                content: txt
            }));
        }

        return DOM.tag({
            name: 'nav',
            class: 'navbar navbar-expand-lg navbar-dark bg-dark',
            content: DOM.tag({
                name: 'div',
                class: 'container-fluid',
                content: [
                    DOM.tag({
                        name: 'button',
                        class: 'navbar-toggler',
                        attributes: {
                            'data-bs-toggle': 'collapse',
                            'data-bs-target': '#navbarNavAltMarkup',
                            'aria-controls': 'navbarNavAltMarkup',
                            'aria-expanded': 'false',
                            'aria-label': 'Toggle navigation',
                        },
                        content: DOM.tag({
                            name: 'span',
                            class: 'navbar-toggler-icon'
                        })
                    }),
                    DOM.tag({
                        name: 'div',
                        class: 'collapse navbar-collapse',
                        attributes: {
                            id: 'navbarNavAltMarkup'
                        },
                        content: DOM.tag({
                            name: 'div',
                            class: 'navbar-nav',
                            content: items
                        })
                    })
                ]
            })
        });
    }
}