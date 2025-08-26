import { nothing } from 'lit';
import TerraElement from '../../internal/terra-element.js';
import type { CSSResultGroup } from 'lit';
import TerraDialog from '../dialog/dialog.component.js';
import { AuthController } from '../../auth/auth.controller.js';
/**
 * @summary Shows a floating panel with a user's recent data subset requests and their status, with quick access to results and re-submission.
 * @documentation https://disc.gsfc.nasa.gov/components/data-subsetter-history
 * @status stable
 * @since 1.0
 *
 * @dependency terra-icon
 * @dependency terra-data-subsetter
 * @dependency terra-dialog
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
    _authController: AuthController<this>;
    connectedCallback(): void;
    private toggleCollapsed;
    render(): import("lit-html").TemplateResult<1> | typeof nothing;
}
