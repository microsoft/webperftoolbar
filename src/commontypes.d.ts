// begin types from https://github.com/Microsoft/TypeScript/issues/15012

type Required<T> = {
    [P in Purify<keyof T>]: NonNullable<T[P]>;
};
type Purify<T extends string> = {[P in T]: T; }[T];
type NonNullable<T> = T & {};

// end types from https://github.com/Microsoft/TypeScript/issues/15012

/**
 * The types we expect from entry.initiatorType.
 * Values from https://w3c.github.io/resource-timing/#dom-performanceresourcetiming-initiatortype
 */
type InitiatorType = "link" | "script" | "img" | "iframe" | "css" | "navigation" | "xmlhttprequest" | "fetch" | "beacon" | "other";

/**
 * Finish the typings for a file gotten by `performance.getEntriesByType("resource")`
 */
interface IResourcePerformanceEntry extends PerformanceEntry, PerformanceResourceTiming {
    decodedBodySize: number;
    encodedBodySize: number;
    initiatorType: InitiatorType;
    transferSize: number;
}
