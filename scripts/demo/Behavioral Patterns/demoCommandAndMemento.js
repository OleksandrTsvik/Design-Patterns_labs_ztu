import { DOM } from "../../library/DOM.js";
import { Core } from "../../library/Creational Patterns/Singleton/Core.js";
import { ApplicationEditor } from "../../library/Behavioral Patterns/Memento/ApplicationEditor.js";
import { BOOTSTRAP_JS, BOOTSTRAP_STYLE } from "../../config/config.js";

export function runCommandAndMemento() {
    DOM.includeCSS(BOOTSTRAP_STYLE);
    DOM.includeJS(BOOTSTRAP_JS);

    Core.getInstance().addCaption('Command and Memento');

    let editor = new ApplicationEditor();
    editor.addTo(Core.getInstance().getMain());
}