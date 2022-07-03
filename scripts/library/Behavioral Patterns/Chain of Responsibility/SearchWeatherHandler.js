import { Handler } from "./Handler.js";

export class SearchWeatherHandler extends Handler {
    handle(params) {
        if (params.hasOwnProperty('city') &&
            params.hasOwnProperty('openWeatherToken') &&
            params.hasOwnProperty('elemError') &&
            params.hasOwnProperty('displayTo')
        ) {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${params.city}&appid=${params.openWeatherToken}&units=metric`;

            fetch(url)
                .then(response => response.json())
                .then(weather => {
                    if (weather.cod === 200) {
                        params.elemError.classList.add('d-none');
                        super.handle({ city: params.city, weather, displayTo: params.displayTo });
                    } else {
                        params.elemError.innerHTML = `Погоду у місті '${params.city}' не знайдено`;
                        params.elemError.classList.remove('d-none');
                    }
                });
        } else {
            super.handle(params);
        }
    }
}