/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT License.
 */

/**
 * Throw if an argument is null.
 * @param arg The value to verify isn't null
 * @param message The message to throw if the argument is null
 */
export const assertNotNull = <T>(arg: T | null, message: string) => {
    if (arg !== null) {
        return arg;
    }

    throw new Error(message);
};
