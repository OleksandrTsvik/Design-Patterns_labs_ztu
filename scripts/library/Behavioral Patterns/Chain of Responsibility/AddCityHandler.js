import { Handler } from "./Handler.js";
import { DOM } from "../../DOM.js";

export class AddCityHandler extends Handler {
    handle(params) {
        if (params.hasOwnProperty('city') &&
            params.hasOwnProperty('weather') &&
            params.hasOwnProperty('displayTo')
        ) {
            let elemCityList = params.displayTo.querySelector('.list-group');
            let cities = elemCityList.children;

            let isExistCity = false;

            for (let city of cities) {
                if (this.#trimCityName(city.textContent) === this.#trimCityName(params.city)) {
                    isExistCity = true;
                    break;
                }
            }

            if (!isExistCity) {
                elemCityList.append(DOM.tag({
                    name: 'a',
                    class: 'list-group-item list-group-item-action',
                    content: this.#trimCityName(params.city),
                    attributes: {
                        href: '#'
                    }
                }));
            }

            for (let city of cities) {
                if (this.#trimCityName(city.textContent) === this.#trimCityName(params.city)) {
                    city.classList.add('active');
                    isExistCity = true;
                } else {
                    city.classList.remove('active');
                }
            }

            super.handle({
                city: this.#trimCityName(params.city),
                weather: params.weather,
                displayTo: params.displayTo
            });
        } else {
            super.handle(params);
        }
    }

    #trimCityName(city) {
        let name = city.trim().toLowerCase();
        return name[0].toUpperCase() + name.slice(1);
    }
}