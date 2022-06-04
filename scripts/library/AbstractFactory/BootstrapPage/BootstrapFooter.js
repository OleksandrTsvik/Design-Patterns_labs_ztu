import { Footer } from "../Footer.js";
import { DOM } from "../../DOM.js";

export class BootstrapFooter extends Footer {
    render() {
        return DOM.tag({
            name: 'footer',
            class: 'mt-auto py-3 bg-dark',
            content: DOM.tag({
                name: 'p',
                class: 'text-center text-muted m-0',
                content: this.text
            })
        });
    }
}