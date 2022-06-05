import { Core } from "./library/Singleton/Core.js";
import { Demo } from "./demo/Demo.js";
import { INIT_STYLE } from "./config/config.js";

Core.getInstance().init(INIT_STYLE.bootstrap);

let demo = new Demo();

demo.demoBuilder();
demo.demoFactoryMethod();
demo.demoPrototype();
demo.demoBridge();