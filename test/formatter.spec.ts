import { assert, expect } from "chai";
import "mocha";
import * as sinon from "sinon";

import * as Formatter from "../src/formatter";

describe("Formatter", () => {
    describe("duration", () => {
        it("should return a dash for invalid input in the first parameter", () => {
            expect(Formatter.duration(undefined, 0)).to.equal("-");
        });

        it("should return a dash for invalid input in the second parameter", () => {
            expect(Formatter.duration(0, undefined)).to.equal("-");
        });

        it("should default to two decimal places", () => {
            expect(Formatter.duration(1, 0)).to.equal("1.00");
        });

        it("should allow custom number of decimals", () => {
            expect(Formatter.duration(1, 0, 1)).to.equal("1.0");
        });

        it("should do subtract the start from the end", () => {
            expect(Formatter.duration(1, 0, 0)).to.equal("1");
        });

        it("should not allow negative durations", () => {
            expect(Formatter.duration(0, 1, 0)).to.equal("-");
        });

        it("should return - for zero duration", () => {
            expect(Formatter.duration(0, 0)).to.equal("-");
        });
    });

    describe("pathToFilename", () => {
        it("should return everything after the last slash", () => {
            expect(Formatter.pathToFilename("https://foo/a.b?c=d")).to.equal("a.b?c=d");
        });

        it("should trim long file names", () => {
            expect(Formatter.pathToFilename("https://foo/abc", 1)).to.equal("a...");
        });
    });

    describe("sizeToString", () => {
        const twoToTheTenth: number = 1024;
        const bigNumber: number = 10000;

        it("should only format when requesting bytes", () => {
            expect(Formatter.sizeToString(bigNumber, "b")).to.equal("10,000.00 b");
        });

        it("should reduce 2^10 bytes to 1 Kb", () => {
            expect(Formatter.sizeToString(twoToTheTenth, "Kb")).to.equal("1.00 Kb");
        });

        it("should reduce 2^20 bytes to 1 Mb", () => {
            expect(Formatter.sizeToString(twoToTheTenth * twoToTheTenth, "Mb")).to.equal("1.00 Mb");
        });
    });
});
