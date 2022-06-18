import { runDemoBuilder } from "./Creational Patterns/demoBuilder.js";
import { runDemoFactoryMethod } from "./Creational Patterns/demoFactoryMethod.js";
import { runPrototype } from "./Creational Patterns/demoPrototype.js";
import { runBridge } from "./Structural Patterns/demoBridge.js";
import { runAdapter } from "./Structural Patterns/demoAdapter.js";
import { runComposite } from "./Structural Patterns/demoComposite.js";

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
}