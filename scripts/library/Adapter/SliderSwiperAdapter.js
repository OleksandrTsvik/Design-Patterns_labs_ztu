import { SliderSwiper } from "./SliderSwiper.js";

export class SliderSwiperAdapter {
    #sliderSwiper;

    constructor(classSlider, imagesSrc, controls = true, indicators = false, autoplay = true, params = {}) {
        this.#sliderSwiper = new SliderSwiper(classSlider, {
            ...params,
            images: imagesSrc,
            loop: true
        });

        this.#sliderSwiper.renderImages();

        if (controls) {
            this.#sliderSwiper.renderNavigation();
        }

        if (indicators) {
            this.#sliderSwiper.renderPagination();
        }

        if (autoplay) {
            this.#sliderSwiper.turnOnAutoplay();
        } else {
            this.#sliderSwiper.turnOfAutoplay();
        }
    }

    get slider() {
        return this.#sliderSwiper.build();
    }

    get sliderSwiper() {
        return this.#sliderSwiper;
    }
}