import TerraIcon from '../icon/icon.component.js';
import type { CSSResultGroup } from 'lit';
import TerraElement from '../../internal/terra-element.js';
/**
 * @summary Avatars are used to represent a person or object.
 * @documentation https://terra-ui.netlify.app/components/avatar
 * @status stable
 * @since 1.0
 *
 * @dependency terra-icon
 *
 * @event terra-error - The image could not be loaded. This may because of an invalid URL, a temporary network condition, or some
 * unknown cause.
 *
 * @slot icon - The default icon to use when no image or initials are present. Works best with `<terra-icon>`.
 *
 * @csspart base - The component's base wrapper.
 * @csspart icon - The container that wraps the avatar's icon.
 * @csspart initials - The container that wraps the avatar's initials.
 * @csspart image - The avatar image. Only shown when the `image` attribute is set.
 *
 * @cssproperty --size - The size of the avatar.
 */
export default class TerraAvatar extends TerraElement {
    static styles: CSSResultGroup;
    static dependencies: {
        'terra-icon': typeof TerraIcon;
    };
    private hasError;
    /** The image source to use for the avatar. */
    image: string;
    /** A label to use to describe the avatar to assistive devices. */
    label: string;
    /** Initials to use as a fallback when no image is available (1-2 characters max recommended). */
    initials: string;
    /** Indicates how the browser should load the image. */
    loading: 'eager' | 'lazy';
    /** The shape of the avatar. */
    shape: 'circle' | 'square' | 'rounded';
    handleImageChange(): void;
    private handleImageLoadError;
    render(): import("lit-html").TemplateResult<1>;
}
