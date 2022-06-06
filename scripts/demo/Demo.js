import { runDemoBuilder } from "./demoBuilder.js";
import { runDemoFactoryMethod } from "./demoFactoryMethod.js";
import { runPrototype } from "./demoPrototype.js";
import { runBridge } from "./demoBridge.js";
import { runAdapter } from "./demoAdapter.js";
import { runComposite } from "./demoComposite.js";

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