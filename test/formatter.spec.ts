/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT License.
 */

import { expect } from "chai";
import "mocha";

import * as Formatter from "../src/formatter";

describe("Formatter", () => {
    describe("duration", () => {
        it("should return a dash for invalid input in the first parameter", () => {
            expect(Formatter.duration(undefined as any, 0)).to.equal("-"); // tslint:disable-line:no-any
        });

        it("should return a dash for invalid input in the second parameter", () => {
            expect(Formatter.duration(0, undefined as any)).to.equal("-"); // tslint:disable-line:no-any
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

    describe("html", () => {
        it("should pass through multiple values strings", () => {
            const href = "https://github.com";
            const name = "GitHub";
            expect(Formatter.html`<a href="${href}">${name}</a>`).to.equal('<a href="https://github.com">GitHub</a>');
        });
    });

    describe("sanitize.html", () => {
        it("should pass through a literal", () => {
            expect(Formatter.sanitize.html`a`).to.equal("a");
        });

        it("should sanitize only a placeholder", () => {
            expect(Formatter.sanitize.html`${"&"}`).to.equal("&#38;");
        });

        it("should sanitize one literal and one placeholder", () => {
            expect(Formatter.sanitize.html`a${"&"}`).to.equal("a&#38;");
        });

        it("should be tested on realistic input", () => {
            const unsafe = "<script>alert(window);</script>";
            expect(Formatter.sanitize.html`<p>${unsafe}</p>`).to.equal("<p>&#60;script&#62;alert(window);&#60;/script&#62;</p>");
        });

        describe("exhaustive unsafe characters", () => {
            it("should sanitize quotations", () => {
                expect(Formatter.sanitize.html`quot ${"\""}`).to.equal("quot &#34;");
            });

            it("should sanitize ampersands", () => {
                expect(Formatter.sanitize.html`amp ${"&"}`).to.equal("amp &#38;");
            });

            it("should sanitize less than", () => {
                expect(Formatter.sanitize.html`lt ${"<"}`).to.equal("lt &#60;");
            });

            it("should sanitize greater than", () => {
                expect(Formatter.sanitize.html`gt ${">"}`).to.equal("gt &#62;");
            });

            it("should sanitize single quotes", () => {
                expect(Formatter.sanitize.html`apos ${"'"}`).to.equal("apos &#39;");
            });

            it("should sanitize back slash", () => {
                expect(Formatter.sanitize.html`back slash ${"\\"}`).to.equal("back slash &#92;");
            });

            it("should sanitize equals", () => {
                expect(Formatter.sanitize.html`equal ${"="}`).to.equal("equal &#61;");
            });
        });
    });
});
