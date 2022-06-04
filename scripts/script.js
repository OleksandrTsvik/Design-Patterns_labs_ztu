import { NewsElementCreator } from "./library/FactoryMethod/creators/NewsElementCreator.js";
import { UserElementCreator } from "./library/FactoryMethod/creators/UserElementCreator.js";
import { FormElementCreator } from "./library/FactoryMethod/creators/FormElementCreator.js";

import { Core } from "./library/Singleton/Core.js";

import { INIT_STYLE } from "./config/config.js";

Core.getInstance().init(INIT_STYLE.bootstrap);

client(new NewsElementCreator(), {
    title: 'Title of news',
    image: '../images/news.jpg',
    text: 'Text of news',
    link: '#'
});

client(new NewsElementCreator(), {
    title: 'Test title of news',
    image: '../images/news.jpg',
    text: 'Test text of news',
    link: '#test'
});

client(new UserElementCreator(), {
    firstName : 'Ivan',
    lastName : 'Ivanenko',
    avatar : '../images/avatar.jpg'
});

client(new FormElementCreator(), {});

function client(creator, params) {
    creator.createAndAppendTo(Core.getInstance().getMain(), params);
}