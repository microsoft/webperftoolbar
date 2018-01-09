/** The level of precision we want to see for numbers */
export const DECIMAL_PLACES: number = 2;

/**
 * Formats a duration for output. Makes sure the numbers are valid and only returns a certain number of decimal places.
 * Invalid input returns a dash.
 * @param end The end timestamp
 * @param start The start timestamp
 * @param decimalPlaces The number of decimal places to show.
 */
export const duration: (end: number, start: number, decimalPlaces?: number) => string =
    (end: number, start: number, decimalPlaces: number = DECIMAL_PLACES): string => {
        if (isNaN(end) || isNaN(start)) {
            return "-";
        }

        if (end - start < 0) {
            return "-";
        }

        return (end - start).toLocaleString(undefined, {
            minimumFractionDigits: decimalPlaces,
            maximumFractionDigits: decimalPlaces,
        });
    };
