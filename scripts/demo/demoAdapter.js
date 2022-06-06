import { SliderBootstrap } from "../library/Adapter/SliderBootstrap.js";
import { SliderSwiper } from "../library/Adapter/SliderSwiper.js";
import { SliderSwiperAdapter } from "../library/Adapter/SliderSwiperAdapter.js";
import { Core } from "../library/Singleton/Core.js";
import { DOM } from "../library/DOM.js";
import { BOOTSTRAP_JS, BOOTSTRAP_STYLE, SWIPER_STYLE } from "../config/config.js";

export function runAdapter() {
    DOM.includeCSS(SWIPER_STYLE);
    DOM.includeCSS(BOOTSTRAP_STYLE);
    DOM.includeJS(BOOTSTRAP_JS);

    let wrapper = DOM.tag({
        name: 'div',
        class: 'd-flex flex-column px-3 mt-3 mb-4 gap-3'
    });

    const dirSlider = '/images/slider/';
    const namesImg = ['css', 'html', 'js', 'php'];

    let src = [];
    namesImg.forEach(name => src.push(dirSlider + name + '.jpg'));

    let sliderBootstrap01 = new SliderBootstrap('sb-1', src);
    let sliderBootstrap02 = new SliderBootstrap('sb-2', src, 'dark', false, true, false);

    let sliderSwiper01 = new SliderSwiper('sw', {
        images: src,
        loop: true
    });
    let elemSliderSwiper01 = sliderSwiper01
        .turnOnAutoplay()
        .renderImages()
        .renderPagination()
        .renderNavigation()
        .build();

    let sliderSwiperAdapter01 = new SliderSwiperAdapter('swa-1', src);
    let sliderSwiperAdapter02 = new SliderSwiperAdapter('swa-2', src, false, false, false);

    let sliders = [
        {elem: sliderBootstrap01, title: 'Slider Bootstrap 01'},
        {elem: sliderBootstrap02, title: 'Slider Bootstrap 02'},
        {elem: sliderSwiperAdapter01, title: 'Slider Swiper Adapter01'},
        {elem: sliderSwiperAdapter02, title: 'Slider Swiper Adapter02'},
    ];
    sliders.forEach(obj => wrapper.append(getTitle(obj.title), obj.elem.slider));

    wrapper.append(getTitle('Slider Swiper 01'), elemSliderSwiper01);
    Core.getInstance().getMain().append(wrapper);

    sliderSwiper01.init();
    sliderSwiperAdapter01.sliderSwiper.init();
    sliderSwiperAdapter02.sliderSwiper.init();
}

function getTitle(txt) {
    return DOM.tag({
        name: 'h3',
        class: 'text-center font-monospace mb-0 mt-3',
        content: txt
    });
}