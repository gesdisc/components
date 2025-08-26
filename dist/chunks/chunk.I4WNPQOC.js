import {
  i
} from "./chunk.M73GHNHJ.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/components/accordion/accordion.styles.ts
init_dirname();
init_buffer();
init_process();
var accordion_styles_default = i`
    :host {
        display: block;
    }

    .accordion {
        background: #fff;
        margin-bottom: 1rem;
        border: 1px solid rgb(222, 226, 230);
        border-radius: 6px;
        background: white;
        overflow: hidden;
    }

    .accordion-summary {
        background: #f8f9fa;
        padding: 12px 15px;
        border-bottom: 1px solid #dee2e6;
        font-size: 0.95rem;
        font-weight: 500;
        color: #374151;
        cursor: pointer;
        outline: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        transition: background-color 0.2s;
    }

    .accordion-summary:hover {
        background: #e9ecef;
    }

    .accordion-summary-right {
        display: flex;
        align-items: flex-end;
        gap: 10px;
    }

    .accordion-summary terra-icon {
        transition: transform 0.2s ease;
    }

    :host([open]) .accordion-summary terra-icon {
        transform: rotate(180deg);
    }

    .accordion-content {
        padding: 1rem;
    }
`;

export {
  accordion_styles_default
};
