import { DOM } from "../DOM.js";

export class SliderBootstrap {
    _id;
    _images;
    _type;
    _controls;
    _indicators;
    _autoplay;

    #slider;

    constructor(id, imagesSrc, type = 'dark', controls = true, indicators = false, autoplay = true) {
        this._id = id;
        this._images = imagesSrc;
        this._type = type;
        this._controls = controls;
        this._indicators = indicators;
        this._autoplay = autoplay;

        this.#build();
    }

    get slider() {
        return this.#slider;
    }

    #build() {
        this.#slider = DOM.tag({
            name: 'div',
            class: 'carousel slide',
            attributes: {
                id: this._id,
                'data-bs-ride': 'carousel'
            },
            content: DOM.tag({
                name: 'div',
                class: 'carousel-inner',
                content: this.#renderImages()
            })
        });

        this.#addType();
        this.#addControls();
        this.#addIndicators();
        this.#addAutoplay();
    }

    #renderImages() {
        let images = [];

        this._images.forEach(src => {
            images.push(DOM.tag({
                name: 'div',
                class: 'carousel-item',
                content: DOM.tag({
                    name: 'img',
                    class: 'd-block w-100',
                    attributes: {
                        src: src
                    }
                })
            }));
        });

        if (images.length > 0) {
            images[0].addClass('active');
        }

        return images;
    }

    #addType() {
        switch (this._type) {
            case 'dark':
                this.#slider.addClass('carousel-dark');
                break;
        }
    }

    #addControls() {
        if (!this._controls) {
            return;
        }

        this.#slider.append(
            DOM.tag({
                name: 'button',
                class: 'carousel-control-prev',
                attributes: {
                    'data-bs-target': `#${this._id}`,
                    'data-bs-slide': 'prev'
                },
                content: [
                    DOM.tag({
                        name: 'span',
                        class: 'carousel-control-prev-icon',
                        attributes: {
                            'aria-hidden': 'true'
                        }
                    }),
                    DOM.tag({
                        name: 'span',
                        class: 'visually-hidden',
                        content: 'Previous'
                    })
                ]
            }),
            DOM.tag({
                name: 'button',
                class: 'carousel-control-next',
                attributes: {
                    'data-bs-target': `#${this._id}`,
                    'data-bs-slide': 'next'
                },
                content: [
                    DOM.tag({
                        name: 'span',
                        class: 'carousel-control-next-icon',
                        attributes: {
                            'aria-hidden': 'true'
                        }
                    }),
                    DOM.tag({
                        name: 'span',
                        class: 'visually-hidden',
                        content: 'Next'
                    })
                ]
            })
        );
    }

    #addIndicators() {
        if (!this._indicators) {
            return;
        }

        let indicators = [];
        this._images.forEach((src, index) => {
            indicators.push(DOM.tag({
                name: 'button',
                attributes: {
                    'data-bs-target': `#${this._id}`,
                    'data-bs-slide-to': `${index}`,
                    'aria-label': `Slide ${index + 1}`
                }
            }));
        });

        if (indicators.length > 0) {
            indicators[0].addClass('active');
            indicators[0].attr('aria-current', 'true');
        }

        let container = DOM.tag({
            name: 'div',
            class: 'carousel-indicators',
            content: indicators
        });

        this.#slider.prepend(container);
    }

    #addAutoplay() {
        if (!this._autoplay) {
            this.#slider.attr('data-bs-interval', 'false');
        }
    }
}