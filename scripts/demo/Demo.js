import { runDemoBuilder } from "./Creational Patterns/demoBuilder.js";
import { runDemoFactoryMethod } from "./Creational Patterns/demoFactoryMethod.js";
import { runPrototype } from "./Creational Patterns/demoPrototype.js";
import { runBridge } from "./Structural Patterns/demoBridge.js";
import { runAdapter } from "./Structural Patterns/demoAdapter.js";
import { runComposite } from "./Structural Patterns/demoComposite.js";
import { runDecorator } from "./Structural Patterns/demoDecorator.js";
import { runFacade } from "./Structural Patterns/demoFacade.js";
import { runFlyweight } from "./Structural Patterns/demoFlyweight.js";
import { runProxy } from "./Structural Patterns/demoProxy.js";

export class Demo {
    demoBuilder() {
        runDemoBuilder();
    }

    demoFactoryMethod() {
        runDemoFactoryMethod();
    }

    demoPrototype() {
        runPrototype();
    }

    demoBridge() {
        runBridge();
    }

    demoAdapter() {
        runAdapter();
    }

    demoComposite() {
        runComposite();
    }

    demoDecorator() {
        runDecorator();
    }

    demoFacade() {
        runFacade();
    }

    demoFlyweight() {
        runFlyweight();
    }

    demoProxy() {
        runProxy();
    }
}