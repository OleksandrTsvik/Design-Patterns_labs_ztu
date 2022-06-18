import { DOM } from "../../library/DOM.js";
import { ModalBuilder } from "../../library/Creational Patterns/Builder/ModalBuilder.js";
import { NewsElementCreator } from "../../library/Creational Patterns/FactoryMethod/creators/NewsElementCreator.js";
import { FormElementCreator } from "../../library/Creational Patterns/FactoryMethod/creators/FormElementCreator.js";
import { Core } from "../../library/Creational Patterns/Singleton/Core.js";
import { BOOTSTRAP_JS, BOOTSTRAP_STYLE } from "../../config/config.js";

export function runDemoBuilder() {
    DOM.includeCSS(BOOTSTRAP_STYLE);
    DOM.includeJS(BOOTSTRAP_JS);

    let wrapper = DOM.tag({
        name: 'div',
        class: 'd-flex px-3 my-3 gap-3'
    });

    let m1 = new ModalBuilder('m1')
        .addHeader('Header')
        .addBody('Body')
        .addBody('Body1')
        .addFooter('Close')
        .setButton('modal 1')
        .build();

    let m2 = new ModalBuilder('m2')
        .addHeader(DOM.tag({
            name: 'h2',
            class: 'text-center w-100',
            content: 'Text header'
        }))
        .addBody( Core.getInstance().clientFactoryMethodGet(new NewsElementCreator(), {
            title: 'Title of news',
            image: '../images/news.jpg',
            text: 'Text of news',
            link: '#'
        }) )
        .addBody( Core.getInstance().clientFactoryMethodGet(new FormElementCreator(), {}) )
        .addFooter('Close')
        .setButton('modal 2')
        .build();

    let m3 = new ModalBuilder('m3')
        .addBody( Core.getInstance().clientFactoryMethodGet(new NewsElementCreator(), {
            title: 'Title of news',
            image: '../images/news.jpg',
            text: 'Text of news',
            link: '#'
        }) )
        .addFooter( DOM.tag({
            name: 'div',
            class: 'd-flex gap-2',
            content: [
                DOM.tag({
                    name: 'button',
                    class: 'btn btn-success',
                    attributes: {
                        'data-bs-dismiss': 'modal'
                    },
                    content: 'Like'
                }),
                DOM.tag({
                    name: 'button',
                    class: 'btn btn-warning',
                    attributes: {
                        'data-bs-dismiss': 'modal'
                    },
                    content: 'Close'
                })
            ]
        }) )
        .setButton('modal 3')
        .build();

    wrapper.append(m1.getModal(), m1.getButton());
    wrapper.append(m2.getModal(), m2.getButton());
    wrapper.append(m3.getModal(), m3.getButton());
    Core.getInstance().getMain().append(wrapper);
}