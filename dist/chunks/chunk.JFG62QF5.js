import {
  i
} from "./chunk.M73GHNHJ.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/components/data-rods/data-rods.styles.ts
init_dirname();
init_buffer();
init_process();
var data_rods_styles_default = i`
    :host {
        display: grid;
        gap: 1.5rem 0.75rem;
        grid-template-rows: auto;
        grid-template-columns: 1fr 1fr;
    }

    terra-variable-combobox {
        grid-column: 1 / 2;
    }

    terra-spatial-picker {
        grid-column: 2 / 3;
    }

    terra-date-range-slider {
        grid-column: 1 / 3;
        padding-block-start: 2rem;
    }

    terra-time-series {
        grid-column: 1 / 3;
        z-index: 9;
    }

    terra-spatial-picker::part(leaflet-bbox),
    terra-spatial-picker::part(leaflet-edit) {
        display: none;
    }
`;

export {
  data_rods_styles_default
};
