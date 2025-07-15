import type { TerraFormControl } from '../terra-element.js';
/** Runs a set of generic tests for Shoelace form controls */
export declare function runFormControlBaseTests<T extends TerraFormControl = TerraFormControl>(tagNameOrConfig: string | {
    tagName: string;
    init?: (control: T) => void;
    variantName: string;
}): void;
