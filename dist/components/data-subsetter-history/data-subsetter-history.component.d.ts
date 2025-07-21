import { nothing } from 'lit';
import TerraElement from '../../internal/terra-element.js';
import type { CSSResultGroup } from 'lit';
import TerraDialog from '../dialog/dialog.component.js';
/**
 * @summary Short summary of the component's intended use.
 * @documentation https://disc.gsfc.nasa.gov/components/data-subsetter-history
 * @status experimental
 * @since 1.0
 *
 * @dependency terra-example
 *
 * @slot - The default slot.
 * @slot example - An example slot.
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --example - An example CSS custom property.
 */
export default class TerraDataSubsetterHistory extends TerraElement {
    #private;
    static dependencies: Record<string, typeof TerraElement>;
    static styles: CSSResultGroup;
    label: string;
    bearerToken: string;
    /**
     * if a user has never done a subset request, by default they don't see the history panel at all
     * this prop allows you to override that behavior and always show the history panel
     */
    alwaysShow: boolean;
    collapsed: boolean;
    selectedJob?: string;
    hideCancelled: boolean;
    dialog: TerraDialog;
    connectedCallback(): void;
    private toggleCollapsed;
    render(): import("lit-html").TemplateResult<1> | typeof nothing;
}
