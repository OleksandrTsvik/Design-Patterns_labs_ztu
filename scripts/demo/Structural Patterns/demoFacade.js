import { DOM } from "../../library/DOM.js";
import { Core } from "../../library/Creational Patterns/Singleton/Core.js";
import { YTVideoUpload } from "../../library/Structural Patterns/Facade/YTVideoUpload.js";
import { BOOTSTRAP_JS, BOOTSTRAP_STYLE, BOOTSTRAP_ICONS } from "../../config/config.js";

export function runFacade() {
    DOM.includeCSS(BOOTSTRAP_STYLE);
    DOM.includeCSS(BOOTSTRAP_ICONS);
    DOM.includeJS(BOOTSTRAP_JS);

    Core.getInstance().addCaption('Facade');

    let links = DOM.tag({
        name: 'div',
        content: [
            DOM.tag({ name: 'p', content: 'https://www.youtube.com/watch?v=aJf8WN3abT0' }),
            DOM.tag({ name: 'p', content: 'https://www.youtube.com/watch?v=Qz6KK8TM4Bc' }),
            DOM.tag({ name: 'p', content: 'https://www.youtube.com/watch?v=P_IC6C0GUDk' }),
            DOM.tag({ name: 'p', content: 'https://www.youtube.com/watch?v=C2ItmxoMIaM' })
        ]
    });

    Core.getInstance().getMain().append(links);

    let ytVideoUpload01 = new YTVideoUpload();
    ytVideoUpload01.init(Core.getInstance().getMain());
}