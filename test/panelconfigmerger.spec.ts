import { assert, expect } from "chai";
import "mocha";

import { IPanelConfig } from "../src/ipanel";
import { PanelConfigMerger } from "../src/panelconfigmerger";

describe("PanelConfigMerger class", () => {

    interface IOneNumber extends IPanelConfig {
        a: number;
    }

    interface ITwoNumbers extends IOneNumber {
        b: number;
    }

    const DEFAULT_A: number = 1;
    const OVERRIDE_A: number = 10;
    const OVERRIDE_B: number = 20;

    it("should use the default config if there is no override", () => {
        const defaultConfig: IOneNumber = { a: DEFAULT_A };

        const output: IOneNumber = PanelConfigMerger.merge(defaultConfig, undefined);

        expect(output.a).to.equal(DEFAULT_A, "the value from the default config should be used");
    });

    it("should ignore extra config properties from the override object", () => {
        const defaultConfig: IOneNumber = { a: DEFAULT_A };
        const overrideConfig: ITwoNumbers = { a: OVERRIDE_A, b: OVERRIDE_B };

        const output: IOneNumber = PanelConfigMerger.merge(defaultConfig, overrideConfig);

        expect(output).to.not.have.property("b", undefined, "B doesn't exist in the default and should be ignored");
    });

    it("should override with values from the second object", () => {
        const defaultConfig: IOneNumber = { a: DEFAULT_A };
        const overrideConfig: ITwoNumbers = { a: OVERRIDE_A, b: OVERRIDE_B };

        const output: IOneNumber = PanelConfigMerger.merge(defaultConfig, overrideConfig);

        expect(output.a).to.equal(OVERRIDE_A, "the value for A should come from the override config");
    });

});
