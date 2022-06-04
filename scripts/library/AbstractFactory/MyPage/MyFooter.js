import { Footer } from "../Footer.js";
import { DOM } from "../../DOM.js";

export class MyFooter extends Footer {
    render() {
        return DOM.tag({
            name: 'footer',
            class: 'my-footer',
            content: this.text
        });
    }
}