import { DOM } from "../../DOM.js";
import { PageElement } from "./PageElement.js";

export class UserElement extends PageElement {
    build() {
        this.domElement =
            DOM.tag({
                name: 'div',
                class: 'user',
                content: [
                    DOM.tag({
                        name: 'div',
                        class: 'photo',
                        content:
                            DOM.tag({
                                name: 'img',
                                attributes: {
                                    src: this.params.avatar
                                }
                            })
                    }),
                    DOM.tag({
                        name: 'div',
                        class: 'content',
                        content:
                            DOM.tag({
                                name: 'div',
                                class: 'title',
                                content: `${this.params.firstName} ${this.params.lastName}`
                            })
                    })
                ]
            });
    }
}