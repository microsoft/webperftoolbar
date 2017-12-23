import { assert, expect } from "chai";
import "mocha";
import * as sinon from "sinon";

import { Formatter } from "../src/formatter";

describe("Formatter class", () => {
    describe("duration method", () => {
        it("should return a dash for invalid input", () => {
            expect(Formatter.duration(undefined, 0)).to.equal("-", "invalid input in first parameter generates a dash");
            expect(Formatter.duration(0, undefined)).to.equal("-", "invalid input in second parameter generates a dash");
        });

        it("should default to two decimal places", () => {
            expect(Formatter.duration(0, 0)).to.equal("0.00");
        });

        it("should allow custom number of decimals", () => {
            expect(Formatter.duration(0, 0, 1)).to.equal("0.0");
        });

        it("should do subtract the start from the end", () => {
            expect(Formatter.duration(1, 0, 0)).to.equal("1");
            expect(Formatter.duration(0, 1, 0)).to.equal("-1");
        });
    });
});
