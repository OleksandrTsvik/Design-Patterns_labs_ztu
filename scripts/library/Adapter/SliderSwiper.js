import Swiper from '../../../alien/swiper/swiper-bundle.esm.browser.js';
import { DOM } from "../DOM.js";

export class SliderSwiper {
    classSlider;
    params; // { images: ['/images/1.jpg'] }

    #slider;
    #swiper;

    constructor(classSlider, params) {
        this.classSlider = classSlider;
        this.params = params;

        this.#slider = DOM.tag({
            name: 'div',
            class: `${this.classSlider} swiper`
        });
    }

    get swiper() {
        return this.#swiper;
    }

    init() {
        this.#swiper = new Swiper(`.${this.classSlider}`, this.params);
    }

    build() {
        return this.#slider;
    }

    renderImages() {
        let images = [];

        this.params.images.forEach(src => {
            images.push(DOM.tag({
                name: 'div',
                class: 'swiper-slide',
                content: DOM.tag({
                    name: 'img',
                    attributes: {
                        src: src
                    }
                })
            }));
        });

        this.#slider.append(DOM.tag({
            name: 'div',
            class: 'swiper-wrapper',
            content: images
        }));

        return this;
    }

    renderPagination() {
        this.params.pagination = {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        };

        this.#slider.append(DOM.tag({
            name: 'div',
            class: 'swiper-pagination'
        }));

        return this;
    }

    renderNavigation() {
        this.params.navigation = {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        };

        this.#slider.append(
            DOM.tag({
                name: 'div',
                class: 'swiper-button-prev'
            }),
            DOM.tag({
                name: 'div',
                class: 'swiper-button-next'
            })
        );

        return this;
    }

    turnOnAutoplay() {
        this.params.autoplay = {
            stopOnLastSlide: false,
            disableOnInteraction: false
        };

        return this;
    }

    turnOfAutoplay() {
        this.params.autoplay = false;

        return this;
    }
}