import { Main } from "../Main.js";
import { DOM } from "../../../DOM.js";

export class MyMain extends Main {
    render() {
        return DOM.tag({
            name: 'main',
            class: 'my-main'
        });
    }
}