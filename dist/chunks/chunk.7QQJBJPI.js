import {
  i
} from "./chunk.C7DL2MIN.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/components/caption/caption.styles.ts
init_dirname();
init_buffer();
init_process();
var caption_styles_default = i`
    :host {
        display: block;
        font-family: var(--terra-caption-font-family);
        font-size: var(--terra-caption-font-size);
        font-weight: var(--terra-caption-font-weight);
        line-height: var(--terra-caption-line-height);
        color: var(--terra-caption-color);
        margin: 0;
    }

    /* Credit text within captions has higher contrast */
    ::slotted(.credit),
    ::slotted([class*='credit']) {
        color: var(--terra-caption-credit-color);
    }
`;

export {
  caption_styles_default
};
