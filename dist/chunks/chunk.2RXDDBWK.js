import {
  i
} from "./chunk.PH7RLQK2.js";

// src/components/data-rods/data-rods.styles.ts
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
