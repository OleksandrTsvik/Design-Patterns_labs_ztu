import { runDemoBuilder } from "./DemoBuilder.js";
import { runDemoFactoryMethod } from "./DemoFactoryMethod.js";
import { runPrototype } from "./DemoPrototype.js";
import { runBridge } from "./DemoBridge.js";

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
}