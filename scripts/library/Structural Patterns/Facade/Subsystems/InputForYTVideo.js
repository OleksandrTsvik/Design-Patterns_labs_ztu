import { DOM } from "../../../DOM.js";

export class InputForYTVideo {
    create() {
        return DOM.tag({
            name: 'div',
            class: 'input-group shadow',
            content: [
                DOM.tag({
                    name: 'span',
                    class: 'input-group-text',
                    content: 'YT url'
                }),
                DOM.tag({
                    name: 'input',
                    class: 'form-control',
                    attributes: {
                        placeholder: 'https://www.youtube.com/watch?v=VIDEO_CODE'
                    }
                })
            ]
        });
    }
}