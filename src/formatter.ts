/**
 * A class for formatting strings or numbers.
 */
export class Formatter {
    /** The level of precision we want to see for numbers */
    public static readonly decimalPlaces: number = 2;

    /**
     * Formats a duration for output. Makes sure the numbers are valid and only returns a certain number of decimal places.
     * Invalid input returns a dash.
     * @param end The end timestamp
     * @param start The start timestamp
     * @param decimalPlaces The number of decimal places to show.
     */
    public static duration(end: number, start: number, decimalPlaces: number = Formatter.decimalPlaces): string {
        if (isNaN(end) || isNaN(start)) {
            return "-";
        }

        return (end - start).toFixed(decimalPlaces);
    }

}
