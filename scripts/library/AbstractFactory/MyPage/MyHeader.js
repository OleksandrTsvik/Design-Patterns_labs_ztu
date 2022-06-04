import { Header } from "../Header.js";
import { DOM } from "../../DOM.js";

export class MyHeader extends Header {
    render() {
        let items = [];

        for(let txt in this.links) {
            items.push(DOM.tag({
                name: 'li',
                content: DOM.tag({
                    name: 'a',
                    attributes: {
                        href: this.links[txt]
                    },
                    content: txt
                })
            }));
        }

        return DOM.tag({
            name: 'nav',
            class: 'my-nav',
            content: DOM.tag({
                name: 'ul',
                content: items
            })
        });
    }
}