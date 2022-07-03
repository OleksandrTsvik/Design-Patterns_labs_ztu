import { Core } from "./library/Creational Patterns/Singleton/Core.js";
import { Demo } from "./demo/Demo.js";
import { INIT_STYLE } from "./config/config.js";

Core.getInstance().init(INIT_STYLE.bootstrap);

let demo = new Demo();

// demo.demoBuilder();
// demo.demoFactoryMethod();
// demo.demoPrototype();
// demo.demoBridge();
// demo.demoAdapter();
// demo.demoComposite();

// demo.demoDecorator();
// demo.demoFacade();
// demo.demoFlyweight();
// demo.demoProxy();

demo.demoChainOfResponsibility();
demo.demoCommandAndMemento();
