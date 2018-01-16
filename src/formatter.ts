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
export const duration: (end: number, start: number, decimalPlaces?: number) => string =
    (end, start, decimalPlaces = DECIMAL_PLACES) => {
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
export const pathToFilename: (path: string, maxLength?: number) => string =
    (path, maxLength = MAX_FILE_NAME_LENGTH) => {
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
 * @param unit The desired unit to conver to.
 */
export const sizeToString: (bytes: number, unit?: keyof typeof FileSizeUnits) => string =
    (bytes, unit = "Kb"): string => {
        const twoExpTen: number = 1024;

        if (bytes === 0) {
            return "-";
        }

        switch (unit) {
            case "b":
                return `${bytes.toLocaleString(undefined, LOCALE_STRING_DECIMAL_PLACES)} b`;
            case "Kb":
                return `${(bytes / twoExpTen).toLocaleString(undefined, LOCALE_STRING_DECIMAL_PLACES)} Kb`;
            case "Mb":
                return `${(bytes / (twoExpTen * twoExpTen)).toLocaleString(undefined, LOCALE_STRING_DECIMAL_PLACES)} Mb`;
            default:
                throw new Error("unknown unit");
        }
    };
