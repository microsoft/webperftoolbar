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
