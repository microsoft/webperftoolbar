/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT License.
 */

export interface IBasicButton {
    emoji: string;
    title: string;
    value(): string;
}
