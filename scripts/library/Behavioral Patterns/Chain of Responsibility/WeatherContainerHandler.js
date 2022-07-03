import { Handler } from "./Handler.js";
import { DOM } from "../../DOM.js";

export class WeatherContainerHandler extends Handler {
    handle(params) {
        if (params.hasOwnProperty('weatherContainerAppendTo') && params.hasOwnProperty('id')) {
            params.weatherContainerAppendTo.append(DOM.tag({
                name: 'div',
                class: 'row',
                attributes: {
                    id: params.id
                },
                content: [
                    DOM.tag({
                        name: 'div',
                        class: 'col-6 col-md-4 col-lg-3',
                        content: DOM.tag({
                            name: 'div',
                            class: 'list-group'
                        })
                    }),
                    DOM.tag({
                        name: 'div',
                        class: 'col-6 col-md-8 col-lg-9',
                        content: DOM.tag({
                            name: 'div',
                            class: 'card',
                            content: DOM.tag({
                                name: 'div',
                                class: 'card-body',
                                content: [
                                    DOM.tag({
                                        name: 'h3',
                                        class: 'card-title'
                                    }),
                                    DOM.tag({
                                        name: 'img',
                                        class: 'increase-img-3x'
                                    }),
                                    DOM.tag({
                                        name: 'table',
                                        class: 'table table-striped',
                                        content: DOM.tag({
                                            name: 'tbody',
                                            content: [
                                                DOM.tag({
                                                    name: 'tr',
                                                    content: [
                                                        DOM.tag({
                                                            name: 'th',
                                                            content: 'Тиск'
                                                        }),
                                                        DOM.tag({
                                                            name: 'td'
                                                        })
                                                    ]
                                                }),
                                                DOM.tag({
                                                    name: 'tr',
                                                    content: [
                                                        DOM.tag({
                                                            name: 'th',
                                                            content: 'Вологість'
                                                        }),
                                                        DOM.tag({
                                                            name: 'td'
                                                        })
                                                    ]
                                                }),
                                                DOM.tag({
                                                    name: 'tr',
                                                    content: [
                                                        DOM.tag({
                                                            name: 'th',
                                                            content: 'Температура'
                                                        }),
                                                        DOM.tag({
                                                            name: 'td'
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            }));
        } else {
            super.handle(params);
        }
    }
}