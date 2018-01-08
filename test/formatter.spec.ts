import { assert, expect } from "chai";
import "mocha";
import * as sinon from "sinon";

import * as Formatter from "../src/formatter";

describe("Formatter class", () => {
    describe("duration", () => {
        it("should return a dash for invalid input in the first parameter", () => {
            expect(Formatter.duration(undefined, 0)).to.equal("-");
        });

        it("should return a dash for invalid input in the second parameter", () => {
            expect(Formatter.duration(0, undefined)).to.equal("-");
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
