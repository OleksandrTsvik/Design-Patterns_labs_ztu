import { Main } from "../Main.js";
import { DOM } from "../../DOM.js";

export class BootstrapMain extends Main {
    render() {
        return DOM.tag({
            name: 'main',
            class: 'container flex-shrink-0'
        });
    }
}