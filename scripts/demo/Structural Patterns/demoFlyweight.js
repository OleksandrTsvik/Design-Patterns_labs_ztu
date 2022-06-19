import { DOM } from "../../library/DOM.js";
import { Core } from "../../library/Creational Patterns/Singleton/Core.js";
import { Cell } from "../../library/Structural Patterns/Flyweight/Cell.js";
import { FlyweightFactory } from "../../library/Structural Patterns/Flyweight/FlyweightFactory.js";
import { BOOTSTRAP_JS, BOOTSTRAP_STYLE } from "../../config/config.js";

export function runFlyweight() {
    DOM.includeCSS(BOOTSTRAP_STYLE);
    DOM.includeJS(BOOTSTRAP_JS);

    Core.getInstance().addCaption('Flyweight');

    let params = {
        '2': {
            'text-color': '#f9f9f9',
            'background-color': '#00B74A',
            height: 30,
            width: 70
        },
        '3': {
            'text-color': '#f9f9f9',
            'background-color': '#1266F1',
            height: 50,
            width: 100
        },
        '5': {
            'text-color': '#262626',
            'background-color': '#BCAAA4',
            height: 40,
            width: 80
        },
        '7': {
            'text-color': '#262626',
            'background-color': '#D4E157',
            height: 25,
            width: 60
        },
        'default': {
            'text-color': '#f9f9f9',
            'background-color': '#B23CFD',
            height: 20,
            width: 50
        }
    };

    let descriptions = [];
    for (let key in params) {
        let content;
        let style = `background-color: ${params[key]['background-color']}; ` +
                    `color: ${params[key]['text-color']}; `;

        if (!isNaN(key)) {
            content = `number % ${key} === 0`;
        } else {
            content = 'default';
        }

        descriptions.push(DOM.tag({
            name: 'p',
            class: 'px-1 py-2',
            content: content + `; height = ${params[key].height}px; width = ${params[key].width}px.`,
            attributes: {
                style
            }
        }));
    }

    let wrapper = DOM.tag({
        name: 'div',
        content: descriptions
    });

    let cells = [];
    let countRows = 10;
    let countColumns = 12;
    let minRandomNum = -1000, maxRandomNum = 1000;

    let table = DOM.tag({
        name: 'table',
        class: 'table flyweight text-center mb-3'
    });

    for (let i = 0; i < countRows; i++) {
        let trElem = DOM.tag({
            name: 'tr'
        });

        for (let j = 0; j < countColumns; j++) {
            let num = random(minRandomNum, maxRandomNum);
            let param;

            for (let key in params) {
                if (!isNaN(key) && num % parseInt(key) === 0) {
                    param = params[key];
                    break;
                }
            }

            if (!param) {
                param = params.default;
            }

            cells.push(new Cell(num, i, j, param['text-color'], param['background-color'], param.height, param.width));
            trElem.append(cells[cells.length - 1].create());
        }

        table.append(trElem);
    }

    Core.getInstance().getMain().append(wrapper, table,
        DOM.tag({ name: 'p', content: `Кількість клітинок в таблиці: ${cells.length}.` }),
        DOM.tag({ name: 'p', content: `Кількість записів у фабриці легковаговика: ${FlyweightFactory.getCount()}.` }),
    );
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}