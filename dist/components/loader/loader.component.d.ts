import TerraElement from '../../internal/terra-element.js';
import type { CSSResultGroup } from 'lit';
/**
 * @summary Loaders are used to indicate there is content that is loading.
 * @documentation https://disc.gsfc.nasa.gov/components/loader
 * @status experimental
 * @since 1.0
 *
 *
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --example - An example CSS custom property.
 */
export default class TerraLoader extends TerraElement {
    static styles: CSSResultGroup;
    /** The loader's variant */
    variant: 'small' | 'large' | 'orbit';
    /** The percent complete for the loader to display */
    percent: string;
    /** an indeterminate loader has an unknown progress and will show a spinner */
    indeterminate: boolean;
    _currentPercent: number;
    formatPercent(percent: string): string;
    render(): import("lit-html").TemplateResult<1>;
}
