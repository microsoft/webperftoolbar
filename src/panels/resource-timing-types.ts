import { IPanelConfig } from "../ipanel";

/** Describes the configuration for the bytes over wire button. */
export interface IBytesOverWireButtonConfig {
    /** The emoji for the bytes over wire button. */
    bytesOverWireButtonEmoji?: string;
    /** The title of the bytes over wire button. */
    bytesOverWireButtonTitle?: string;
}

/** Describes the configuration for the iamge bytes over wire button. */
export interface IImageBytesOverWireButtonConfig {
    /** The emoji for the image bytes over wire button. */
    imageBytesOverWireButtonEmoji?: string;
    /** The title for the image bytes over wire button. */
    imageBytesOverWireButtonTitle?: string;
}

/** Describes the configuration options available for the network panel */
export interface IResourceTimingsPanelConfig extends IPanelConfig, IBytesOverWireButtonConfig, IImageBytesOverWireButtonConfig {
    /** The name of the panel */
    panelName?: string;
    /**
     * The global performance object, can be included in the config to enable injection of a mock object for testing.
     * This pane only requires the getEntriesByType method
     */
    performance: Partial<Performance> & Required<{ getEntriesByType(entryType: string): {} }>;
}

/**
 * Types that map to the string from PerformanceResourceTiming.initatorType, with the exception of "all"
 * which is added to help summarization.
 * @see https://www.w3.org/TR/resource-timing-1/#dom-performanceresourcetiming-initiatortype
 * @note These enum values are lowercase rather than uppercase since we string match against the values
 * provided by the browser API.
 */
export enum InitiatorTypes {
    all,
    other,
    link,
    script,
    img,
    css,
    iframe,
    xmlhttprequest,
}

/**
 * Describes a row in the summary table
 */
export type SummaryRow = {
    decodedBytes: number;
    format: "all" | InitiatorType;
    largestBytes: number;
    numFiles: number;
    overWireBytes: number;
};
