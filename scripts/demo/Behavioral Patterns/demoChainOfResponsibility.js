import { DOM } from "../../library/DOM.js";
import { Core } from "../../library/Creational Patterns/Singleton/Core.js";
import { WeatherContainerHandler } from "../../library/Behavioral Patterns/Chain of Responsibility/WeatherContainerHandler.js";
import { SearchWeatherHandler } from "../../library/Behavioral Patterns/Chain of Responsibility/SearchWeatherHandler.js";
import { AddCityHandler } from "../../library/Behavioral Patterns/Chain of Responsibility/AddCityHandler.js";
import { DisplayWeatherHandler } from "../../library/Behavioral Patterns/Chain of Responsibility/DisplayWeatherHandler.js";
import { SearchInputHandler } from "../../library/Behavioral Patterns/Chain of Responsibility/SearchInputHandler.js";
import { Alert } from "../../library/Creational Patterns/Prototype/Alert.js";
import { BOOTSTRAP_JS, BOOTSTRAP_STYLE, BOOTSTRAP_ICONS } from "../../config/config.js";

export function runChainOfResponsibility() {
    DOM.includeCSS(BOOTSTRAP_STYLE);
    DOM.includeCSS(BOOTSTRAP_ICONS);
    DOM.includeJS(BOOTSTRAP_JS);

    Core.getInstance().addCaption('Chain Of Responsibility');

    let alertNotFoundWeather = new Alert('', 'warning d-none', false);
    let elemNotFoundWeather = alertNotFoundWeather.createElement();
    Core.getInstance().getMain().append(elemNotFoundWeather);

    let openWeatherToken = '8baf42eed3db5c30345b1cf4a5952b32';

    let searchInput = new SearchInputHandler();
    let weatherContainer = new WeatherContainerHandler();
    let searchWeather = new SearchWeatherHandler();
    let addCity = new AddCityHandler();
    let displayWeather = new DisplayWeatherHandler();

    searchInput
        .setNext(weatherContainer)
        .setNext(searchWeather)
        .setNext(addCity)
        .setNext(displayWeather);

    searchInput.handle({
        buttonId: 'btn-weather',
        inputId: 'input-weather',
        searchInputAppendTo: Core.getInstance().getMain()
    });

    searchInput.handle({
        id: 'weather-container',
        weatherContainerAppendTo: Core.getInstance().getMain()
    });

    let elemDisplayWeather = document.querySelector('#weather-container');

    searchInput.handle({
        city: 'Житомир',
        openWeatherToken: openWeatherToken,
        elemError: elemNotFoundWeather,
        displayTo: elemDisplayWeather
    });

    let btnWeather = document.querySelector('#btn-weather');
    let inputWeather = document.querySelector('#input-weather');

    btnWeather.addEventListener('click', () => {
        let searchWeather = new SearchWeatherHandler();
        let addCity = new AddCityHandler();
        let displayWeather = new DisplayWeatherHandler();

        searchWeather
            .setNext(addCity)
            .setNext(displayWeather);

        searchInput.handle({
            city: inputWeather.value,
            openWeatherToken: openWeatherToken,
            elemError: elemNotFoundWeather,
            displayTo: elemDisplayWeather
        });
    });

    elemDisplayWeather.querySelector('.list-group').addEventListener('click', (event) => {
        let elem = event.target;

        if (elem.nodeName === 'A' &&
            elem.classList.contains('list-group-item-action') &&
            !elem.classList.contains('active')
        ) {
            let searchWeather = new SearchWeatherHandler();
            let displayWeather = new DisplayWeatherHandler();

            searchWeather
                .setNext(displayWeather);

            searchInput.handle({
                city: elem.textContent,
                openWeatherToken: openWeatherToken,
                elemError: elemNotFoundWeather,
                displayTo: elemDisplayWeather
            });
        }
    });
}