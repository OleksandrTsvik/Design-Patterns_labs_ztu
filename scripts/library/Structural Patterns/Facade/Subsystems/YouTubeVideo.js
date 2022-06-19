import { DOM } from "../../../DOM.js";
import { HEIGHT_YT_VIDEO } from "../../../../config/config.js";

export class YouTubeVideo {
    create(url) {
        return DOM.tag({
            name: 'iframe',
            class: 'w-100 d-none',
            attributes: {
                src: url,
                height: HEIGHT_YT_VIDEO,
                title: 'YouTube video player',
                frameborder: '0',
                allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
                allowfullscreen: 'true'
            }
        });
    }
}