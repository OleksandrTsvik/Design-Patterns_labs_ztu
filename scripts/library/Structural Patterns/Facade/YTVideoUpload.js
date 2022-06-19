import { DOM } from "../../DOM.js";
import { InputForYTVideo } from "./Subsystems/InputForYTVideo.js";
import { ButtonForYTVideo } from "./Subsystems/ButtonForYTVideo.js";
import { YouTubeVideo } from "./Subsystems/YouTubeVideo.js";

export class YTVideoUpload {
    inputGroupElem;
    buttonGroupElem;
    videoElem;

    constructor() {
        this.inputGroupElem = (new InputForYTVideo()).create();
        this.videoElem = (new YouTubeVideo()).create('');

        let inputElem = this.inputGroupElem.querySelector('input');
        this.buttonGroupElem = (new ButtonForYTVideo()).create(inputElem, this.videoElem);
    }

    init(appendTo) {
        let container = DOM.tag({
            name: 'div',
            class: 'my-3'
        });

        let wrapper = DOM.tag({
            name: 'div',
            class: 'd-flex flex-row p-3 gap-3'
        });

        wrapper.append(this.inputGroupElem, this.buttonGroupElem);
        container.append(wrapper, this.videoElem);
        appendTo.append(container);
    }
}