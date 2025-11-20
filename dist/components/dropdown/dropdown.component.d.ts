import TerraPopup from '../popup/popup.component.js';
import type { CSSResultGroup } from 'lit';
import type SlMenu from '../menu/menu.js';
import TerraElement from '../../internal/terra-element.js';
/**
 * @summary Dropdowns expose additional content that "drops down" in a panel.
 * @documentation https://terra-ui.netlify.app/components/dropdown
 * @status stable
 * @since 2.0
 *
 * @dependency terra-popup
 *
 * @slot - The dropdown's main content, typically a `<terra-menu>` element.
 * @slot trigger - The dropdown's trigger, usually a `<terra-button>` element.
 *
 * @event terra-show - Emitted when the dropdown opens.
 * @event terra-after-show - Emitted after the dropdown opens and all animations are complete.
 * @event terra-hide - Emitted when the dropdown closes.
 * @event terra-after-hide - Emitted after the dropdown closes and all animations are complete.
 *
 * @csspart base - The component's base wrapper, an `<terra-popup>` element.
 * @csspart base__popup - The popup's exported `popup` part. Use this to target the dropdown's popup container.
 * @csspart trigger - The container that wraps the trigger.
 * @csspart panel - The panel that gets shown when the dropdown is open.
 *
 * @animation dropdown.show - The animation to use when showing the dropdown.
 * @animation dropdown.hide - The animation to use when hiding the dropdown.
 */
export default class TerraDropdown extends TerraElement {
    static styles: CSSResultGroup;
    static dependencies: {
        'terra-popup': typeof TerraPopup;
    };
    popup: TerraPopup;
    trigger: HTMLSlotElement;
    panel: HTMLSlotElement;
    private closeWatcher;
    /**
     * Indicates whether or not the dropdown is open. You can toggle this attribute to show and hide the dropdown, or you
     * can use the `show()` and `hide()` methods and this attribute will reflect the dropdown's open state.
     */
    open: boolean;
    /**
     * The preferred placement of the dropdown panel. Note that the actual placement may vary as needed to keep the panel
     * inside of the viewport.
     */
    placement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end';
    /** Disables the dropdown so the panel will not open. */
    disabled: boolean;
    /**
     * By default, the dropdown is closed when an item is selected. This attribute will keep it open instead. Useful for
     * dropdowns that allow for multiple interactions.
     */
    stayOpenOnSelect: boolean;
    /**
     * The dropdown will close when the user interacts outside of this element (e.g. clicking). Useful for composing other
     * components that use a dropdown internally.
     */
    containingElement?: HTMLElement;
    /** The distance in pixels from which to offset the panel away from its trigger. */
    distance: number;
    /** The distance in pixels from which to offset the panel along its trigger. */
    skidding: number;
    /**
     * Enable this option to prevent the panel from being clipped when the component is placed inside a container with
     * `overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.
     */
    hoist: boolean;
    /**
     * When true, the dropdown opens on mouse hover instead of click.
     * @default false
     */
    hover: boolean;
    private hoverTimeout;
    private hideTimeout;
    /**
     * Syncs the popup width or height to that of the trigger element.
     */
    sync: 'width' | 'height' | 'both' | undefined;
    connectedCallback(): void;
    firstUpdated(): void;
    disconnectedCallback(): void;
    private removeHoverListeners;
    focusOnTrigger(): void;
    getMenu(): SlMenu | undefined;
    private handleKeyDown;
    private handleDocumentKeyDown;
    private handleDocumentMouseDown;
    private handlePanelSelect;
    handleTriggerClick(): void;
    private handleTriggerMouseEnter;
    private handleTriggerMouseLeave;
    private handlePanelMouseEnter;
    private handlePanelMouseLeave;
    handleTriggerKeyDown(event: KeyboardEvent): Promise<void>;
    handleTriggerKeyUp(event: KeyboardEvent): void;
    handleTriggerSlotChange(): void;
    private attachHoverListeners;
    private attachPanelHoverListeners;
    updateAccessibleTrigger(): void;
    /** Shows the dropdown panel. */
    show(): Promise<void>;
    /** Hides the dropdown panel */
    hide(): Promise<void>;
    /**
     * Instructs the dropdown menu to reposition. Useful when the position or size of the trigger changes when the menu
     * is activated.
     */
    reposition(): void;
    addOpenListeners(): void;
    removeOpenListeners(): void;
    handleOpenChange(): Promise<void>;
    handleHoverChange(): void;
    render(): import("lit-html").TemplateResult<1>;
}
