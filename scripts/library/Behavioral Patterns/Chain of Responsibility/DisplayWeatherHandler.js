import { Handler } from "./Handler.js";
import { DOM } from "../../DOM.js";

export class DisplayWeatherHandler extends Handler {
    handle(params) {
        if (params.hasOwnProperty('city') &&
            params.hasOwnProperty('weather') &&
            params.hasOwnProperty('displayTo')
        ) {
            let elemInfo = params.displayTo.querySelector('.card .card-body');

            elemInfo.querySelector('.card-body h3').innerHTML = `Погода у місті: ${params.city}`;
            elemInfo.querySelector('.card-body img').src = `http://openweathermap.org/img/wn/${params.weather.weather[0].icon}.png`;

            elemInfo.querySelector('.card-body .table tr:nth-of-type(1) td').innerHTML = params.weather.main.pressure;
            elemInfo.querySelector('.card-body .table tr:nth-of-type(2) td').innerHTML = params.weather.main.humidity;
            elemInfo.querySelector('.card-body .table tr:nth-of-type(3) td').innerHTML = params.weather.main.temp;
        } else {
            super.handle(params);
        }
    }
}