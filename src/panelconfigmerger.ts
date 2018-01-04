import { IPanelConfig } from "./ipanel";

/**
 * Merges two panel configurations.
 */
export class PanelConfigMerger {
    /**
     * Merges two panel configurations.
     * @param defaultConfig The default configuration that contains all of the configuration properties.
     * @param overrideConfig The overridden config settings. It can be incomplete.
     */
    public static merge<T extends IPanelConfig>(defaultConfig: T, overrideConfig: Partial<T> | undefined): T {
        if (overrideConfig) {
            // tslint:disable-next-line:no-any
            const obj: T = {} as any as T;

            for (const prop in defaultConfig) {
                if (defaultConfig.hasOwnProperty(prop)) {
                    obj[prop] = overrideConfig.hasOwnProperty(prop) ? overrideConfig[prop] : defaultConfig[prop];
                }
            }

            return obj;
        } else {
            return defaultConfig;
        }
    }
}
