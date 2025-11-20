import {
  i
} from "./chunk.C7DL2MIN.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/components/radio-group/radio-group.styles.ts
init_dirname();
init_buffer();
init_process();
var radio_group_styles_default = i`
    :host {
        display: block;
    }

    .form-control {
        position: relative;
        border: none;
        padding: 0;
        margin: 0;
    }

    .form-control__label {
        padding: 0;
    }

    .form-control--required .form-control__label::after {
        content: var(--terra-input-required-content);
        color: var(--terra-input-required-content-color);
        margin-inline-start: var(--terra-input-required-content-offset);
    }

    .visually-hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }
`;

export {
  radio_group_styles_default
};
