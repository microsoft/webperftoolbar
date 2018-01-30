/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT License.
 */

/** The level of precision we want to see for numbers */
export const DECIMAL_PLACES: number = 2;

/** The maximum length of a file name */
export const MAX_FILE_NAME_LENGTH: number = 60;

/**
 * Formats a duration for output. Makes sure the numbers are valid and only returns a certain number of decimal places.
 * Invalid input returns a dash.
 * @param end The end timestamp
 * @param start The start timestamp
 * @param decimalPlaces The number of decimal places to show.
 */
export const duration = (end: number, start: number, decimalPlaces: number = DECIMAL_PLACES): string => {
    if (isNaN(end) ||
        isNaN(start) ||
        (end - start < 0) ||
        (end === 0 && start === 0)) {
        return "-";
    }

    return (end - start).toLocaleString(undefined, {
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces,
    });
};

/**
 * Formats a path into a filename.
 * @param path The file name to be formatted.
 * @param maxLength The maximum length of the returned file name, plus three characters for periods.
 */
export const pathToFilename = (path: string, maxLength: number = MAX_FILE_NAME_LENGTH): string => {
    let trimmed: string = path.substring(path.lastIndexOf("/") + 1);

    if (trimmed.length > maxLength) {
        trimmed = `${trimmed.substring(0, maxLength)}...`;
    }

    return trimmed;
};

enum FileSizeUnits {
    b,
    Kb,
    Mb,
}

/**
 * Simple object for passing to toLocaleString to configure the number of decimal places to display.
 */
const LOCALE_STRING_DECIMAL_PLACES: { maximumFractionDigits: number; minimumFractionDigits: number } = {
    minimumFractionDigits: DECIMAL_PLACES,
    maximumFractionDigits: DECIMAL_PLACES,
};

/**
 * Converts a size in bytes to another size, with a unit.
 * @param bytes The size in bytes.
 * @param unit The desired unit to convert to.
 */
export const sizeToString = (bytes: number, unit: keyof typeof FileSizeUnits = "Kb"): string => {
    const twoExpTen: number = 1024;

    if (bytes === 0) {
        return "-";
    }

    switch (unit) {
        case FileSizeUnits[FileSizeUnits.b]:
            return `${bytes.toLocaleString(undefined, LOCALE_STRING_DECIMAL_PLACES)} b`;
        case FileSizeUnits[FileSizeUnits.Kb]:
            return `${(bytes / twoExpTen).toLocaleString(undefined, LOCALE_STRING_DECIMAL_PLACES)} Kb`;
        case FileSizeUnits[FileSizeUnits.Mb]:
            return `${(bytes / (twoExpTen * twoExpTen)).toLocaleString(undefined, LOCALE_STRING_DECIMAL_PLACES)} Mb`;
        default:
            throw new Error("unknown unit");
    }
};

/**
 * Describes a formatter for HTML template strings.
 * Naming it method .html(...) allows lit-html tooling to recognize the template string as HTML.
 */
type HtmlTemplateStringFormatter = { html(literals: TemplateStringsArray, ...placeholders: string[]): string };

/**
 * Builds an HTML template string for output.
 * We provide this method so lit-html tooling can recognize HTML strings.
 */
export const html = (literals: TemplateStringsArray, ...placeholders: string[]): string => {
    const outArr: string[] = new Array(literals.length + placeholders.length);
    const endsWithPlaceholder = literals.length === placeholders.length;

    for (let inIndex = 0, outIndex = 0; outIndex < outArr.length - 1; inIndex++) {
        outArr[outIndex++] = literals[inIndex];
        outArr[outIndex++] =  placeholders[inIndex];
    }

    if (!endsWithPlaceholder) {
        outArr[outArr.length - 1] = literals[literals.length - 1];
    }

    return outArr.join("");
};

/**
 * Sanitizes inputs into an HTML template string.
 */
export const sanitize: HtmlTemplateStringFormatter = {
    html: (literals: TemplateStringsArray, ...placeholders: string[]): string => {
        for (let i = 0; i < placeholders.length; i++) {
            placeholders[i] = placeholders[i].replace(
                /["&<>'\\`=]/g,
                (str: string) => `&#${str.charCodeAt(0)};`,
            );
        }

        return html(literals, ...placeholders);
    },
};
