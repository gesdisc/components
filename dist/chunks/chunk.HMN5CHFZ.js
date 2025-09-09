import {
  i
} from "./chunk.M73GHNHJ.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/components/time-average-map/time-average-map.styles.ts
init_dirname();
init_buffer();
init_process();
var time_average_map_styles_default = i`
  :host {
    display: block;
    height: 800px;
  }

  #map {
    position: relative;
    width: 100%;
    height: 100%;
  }

  #settings{
    opacity: 0.75;
    position: absolute;
    bottom: 150px;
    left: 10px;
    background: rgba(255, 255, 255, 0.9);
    padding: 8px 10px;
    border-radius: 4px;
    font-size: 12px;
    font-family: monospace;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    z-index: 10;
    pointer-events: auto;
  }

  label {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export {
  time_average_map_styles_default
};
