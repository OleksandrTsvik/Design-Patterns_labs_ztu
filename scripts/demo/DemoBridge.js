import { HorizontalTabs } from "../library/Bridge/Tabs/HorizontalTabs.js";
import { VerticalTabs } from "../library/Bridge/Tabs/VerticalTabs.js";
import { Button } from "../library/Bridge/Buttons/Button.js";
import { Link } from "../library/Bridge/Buttons/Link.js";
import { Core } from "../library/Singleton/Core.js";

export function runBridge() {
    let horizontalTabs01 = new HorizontalTabs([
        {
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aliquid amet assumenda dolor eligendi eum itaque laborum laudantium libero numquam quasi quia quis, rem tempore voluptates. Ad asperiores dignissimos eveniet?',
            title: 'Tab 1',
            id: 'h-tab-1'
        },
        {
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut beatae, debitis eaque facilis illo iusto minima nostrum quia veritatis! Asperiores fugit itaque labore nostrum odit officiis quam quo ut.',
            title: 'Tab 2',
            id: 'h-tab-2'
        },
        {
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut delectus deserunt error, facere facilis laborum, officiis praesentium quae ullam, velit veniam voluptatum? Ab doloremque doloribus facere numquam, quaerat sed.',
            title: 'Tab 3',
            id: 'h-tab-3'
        }
    ], new Button());
    let horizontalTabs02 = new HorizontalTabs([
        {
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aliquid amet assumenda dolor eligendi eum itaque laborum laudantium libero numquam quasi quia quis, rem tempore voluptates. Ad asperiores dignissimos eveniet?',
            title: 'Link 1',
            id: 'h-tab-4'
        },
        {
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut beatae, debitis eaque facilis illo iusto minima nostrum quia veritatis! Asperiores fugit itaque labore nostrum odit officiis quam quo ut.',
            title: 'Link 2',
            id: 'h-tab-5'
        },
        {
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut delectus deserunt error, facere facilis laborum, officiis praesentium quae ullam, velit veniam voluptatum? Ab doloremque doloribus facere numquam, quaerat sed.',
            title: 'Link 3',
            id: 'h-tab-6'
        }
    ], new Link());

    let verticalTabs01 = new VerticalTabs([
        {
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aliquid amet assumenda dolor eligendi eum itaque laborum laudantium libero numquam quasi quia quis, rem tempore voluptates. Ad asperiores dignissimos eveniet?',
            title: 'Tab01',
            id: 'v-tab-1'
        },
        {
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut beatae, debitis eaque facilis illo iusto minima nostrum quia veritatis! Asperiores fugit itaque labore nostrum odit officiis quam quo ut.',
            title: 'Tab02',
            id: 'v-tab-2'
        },
        {
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut delectus deserunt error, facere facilis laborum, officiis praesentium quae ullam, velit veniam voluptatum? Ab doloremque doloribus facere numquam, quaerat sed.',
            title: 'Tab03',
            id: 'v-tab-3'
        },
        {
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores aspernatur assumenda aut dolorum esse eveniet incidunt, magnam necessitatibus neque optio quidem quisquam quod sequi sunt totam velit voluptatem voluptatum.',
            title: 'Tab04',
            id: 'v-tab-4'
        }
    ], new Link());

    let elemHorizontal01 = horizontalTabs01.createElement();
    elemHorizontal01.addClass('mb-3');

    let elemHorizontal02 = horizontalTabs02.createElement();
    elemHorizontal02.addClass('mb-3 p-3 border');

    let elemVertical01 = verticalTabs01.createElement();
    elemVertical01.addClass('mb-4');

    Core.getInstance().getMain().append(elemHorizontal01, elemHorizontal02, elemVertical01);
}