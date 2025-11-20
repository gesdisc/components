import {
  i
} from "./chunk.C7DL2MIN.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/components/dropdown/dropdown.styles.ts
init_dirname();
init_buffer();
init_process();
var dropdown_styles_default = i`
    :host {
        display: inline-block;
    }

    .dropdown::part(popup) {
        z-index: var(--terra-z-index-dropdown);
    }

    .dropdown[data-current-placement^='top']::part(popup) {
        transform-origin: bottom;
    }

    .dropdown[data-current-placement^='bottom']::part(popup) {
        transform-origin: top;
    }

    .dropdown[data-current-placement^='left']::part(popup) {
        transform-origin: right;
    }

    .dropdown[data-current-placement^='right']::part(popup) {
        transform-origin: left;
    }

    .dropdown__trigger {
        display: block;
    }

    .dropdown__panel {
        font-family: var(--terra-font-family--inter);
        font-size: var(--terra-font-size-medium);
        font-weight: var(--terra-font-weight-normal);
        box-shadow: var(--terra-shadow-large);
        border-radius: var(--terra-border-radius-medium);
        pointer-events: none;
        background: var(--terra-panel-background-color);
        border: solid var(--terra-panel-border-width) var(--terra-panel-border-color);
    }

    .dropdown--open .dropdown__panel {
        display: block;
        pointer-events: all;
    }

    /* When users slot a menu, make sure it conforms to the popup's auto-size */
    ::slotted(terra-menu) {
        max-width: var(--auto-size-available-width) !important;
        max-height: var(--auto-size-available-height) !important;
    }
`;

export {
  dropdown_styles_default
};
