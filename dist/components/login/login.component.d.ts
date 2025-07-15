import type { CSSResultGroup } from 'lit';
import TerraElement from '../../internal/terra-element.js';
import TerraButton from '../button/button.js';
import TerraIcon from '../icon/icon.js';
import TerraLoader from '../loader/loader.js';
/**
 * @summary A form that logs in to Earthdata Login (EDL) and returns a bearer token.
 * @documentation https://disc.gsfc.nasa.gov/components/login
 * @status stable
 * @since 1.0
 *
 * @event terra-login - Emitted when a bearer token has been received from EDL.
 */
export default class TerraLogin extends TerraElement {
    #private;
    static dependencies: {
        'terra-button': typeof TerraButton;
        'terra-icon': typeof TerraIcon;
        'terra-loader': typeof TerraLoader;
    };
    static styles: CSSResultGroup;
    render(): import("lit-html").TemplateResult<1>;
}
