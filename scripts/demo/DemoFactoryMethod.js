import { NewsElementCreator } from "../library/FactoryMethod/creators/NewsElementCreator.js";
import { UserElementCreator } from "../library/FactoryMethod/creators/UserElementCreator.js";
import { FormElementCreator } from "../library/FactoryMethod/creators/FormElementCreator.js";
import { Core } from "../library/Singleton/Core.js";

export function runDemoFactoryMethod() {
    Core.getInstance().clientFactoryMethod(new NewsElementCreator(), {
        title: 'Title of news',
        image: '../images/news.jpg',
        text: 'Text of news',
        link: '#'
    });

    Core.getInstance().clientFactoryMethod(new NewsElementCreator(), {
        title: 'Test title of news',
        image: '../images/news.jpg',
        text: 'Test text of news',
        link: '#test'
    });

    Core.getInstance().clientFactoryMethod(new UserElementCreator(), {
        firstName : 'Ivan',
        lastName : 'Ivanenko',
        avatar : '../images/avatar.jpg'
    });

    Core.getInstance().clientFactoryMethod(new FormElementCreator(), {});
}