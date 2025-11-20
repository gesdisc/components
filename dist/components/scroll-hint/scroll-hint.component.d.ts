import TerraElement from '../../internal/terra-element.js';
import TerraIcon from '../icon/icon.component.js';
import type { CSSResultGroup } from 'lit';
/**
 * @summary Scroll hint is an animated button that prompts visitors to scroll.
 * @documentation https://terra-ui.netlify.app/components/scroll-hint
 * @status stable
 * @since 1.0
 *
 * @dependency terra-icon
 *
 * @event terra-scroll - Emitted when the scroll hint is clicked and scrolling begins.
 *
 * @csspart base - The component's base wrapper.
 * @csspart button - The clickable button element.
 * @csspart icon-container - The container for the icon and pulsing ring.
 * @csspart icon - The chevron icon.
 * @csspart ring - The pulsing ring around the icon.
 * @csspart text - The "SCROLL TO CONTINUE" text.
 *
 * @cssproperty --terra-scroll-hint-icon-background-color - The background color of the icon circle.
 * @cssproperty --terra-scroll-hint-icon-color - The color of the chevron icon.
 * @cssproperty --terra-scroll-hint-text-color - The color of the text.
 * @cssproperty --terra-scroll-hint-ring-color - The color of the pulsing ring.
 */
export default class TerraScrollHint extends TerraElement {
    static styles: CSSResultGroup;
    static dependencies: {
        'terra-icon': typeof TerraIcon;
    };
    /** When true, the component will be positioned inline in the DOM flow instead of fixed to the viewport. */
    inline: boolean;
    /** When true, forces dark mode styles regardless of system preference. Useful when placing the component on a dark background. */
    dark: boolean;
    /** The delay in milliseconds before showing the scroll hint after inactivity. Defaults to 3000ms (3 seconds). */
    inactivityDelay: number;
    private visible;
    handleInlineChange(): void;
    private scrollTimeout?;
    private clickTimeout?;
    private inactivityTimeout?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private setupEventListeners;
    private cleanupEventListeners;
    private handleScroll;
    private handleDocumentClick;
    private isAtBottomOfPage;
    private handleClick;
    private scrollDown;
    private hide;
    private startInactivityTimer;
    private clearTimers;
    render(): import("lit-html").TemplateResult<1>;
}
