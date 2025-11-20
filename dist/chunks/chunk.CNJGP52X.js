import {
  i
} from "./chunk.C7DL2MIN.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/components/menu/menu.styles.ts
init_dirname();
init_buffer();
init_process();
var menu_styles_default = i`
    :host {
        display: block;
        position: relative;
        background: var(--terra-panel-background-color);
        border: solid var(--terra-panel-border-width) var(--terra-panel-border-color);
        border-radius: var(--terra-border-radius-medium);
        padding: var(--terra-spacing-x-small) 0;
        overflow: auto;
        overscroll-behavior: none;
    }

    ::slotted(terra-divider) {
        --spacing: var(--terra-spacing-x-small);
    }
`;

export {
  menu_styles_default
};
