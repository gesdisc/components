import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/components/date-range-slider/noui-slider-utilities.ts
init_dirname();
init_buffer();
init_process();
function mergeTooltips(slider, threshold = 15, separator = " - ") {
  const textIsRtl = getComputedStyle(slider).direction === "rtl";
  const isRtl = slider.noUiSlider.options.direction === "rtl";
  const isVertical = slider.noUiSlider.options.orientation === "vertical";
  const tooltips = slider.noUiSlider.getTooltips();
  const origins = slider.noUiSlider.getOrigins();
  tooltips.forEach(function(tooltip, index) {
    if (tooltip) {
      origins[index].appendChild(tooltip);
    }
  });
  slider.noUiSlider.on(
    "update",
    function(values, _handle, _unencoded, _tap, positions) {
      var pools = [[]];
      var poolPositions = [[]];
      var poolValues = [[]];
      var atPool = 0;
      if (tooltips[0]) {
        pools[0][0] = 0;
        poolPositions[0][0] = positions[0];
        poolValues[0][0] = values[0];
      }
      for (var i = 1; i < positions.length; i++) {
        if (!tooltips[i] || positions[i] - positions[i - 1] > threshold) {
          atPool++;
          pools[atPool] = [];
          poolValues[atPool] = [];
          poolPositions[atPool] = [];
        }
        if (tooltips[i]) {
          pools[atPool].push(i);
          poolValues[atPool].push(values[i]);
          poolPositions[atPool].push(positions[i]);
        }
      }
      pools.forEach(function(pool, poolIndex) {
        var handlesInPool = pool.length;
        for (var j = 0; j < handlesInPool; j++) {
          var handleNumber = pool[j];
          if (j === handlesInPool - 1) {
            var offset = 0;
            poolPositions[poolIndex].forEach(function(value) {
              offset += 1e3 - value;
            });
            var direction = isVertical ? "bottom" : "right";
            var last = isRtl ? 0 : handlesInPool - 1;
            var lastOffset = 1e3 - poolPositions[poolIndex][last];
            offset = (textIsRtl && !isVertical ? 100 : 0) + offset / handlesInPool - lastOffset;
            tooltips[handleNumber].innerHTML = poolValues[poolIndex].join(separator);
            tooltips[handleNumber].style.display = "block";
            tooltips[handleNumber].style[direction] = offset + "%";
          } else {
            tooltips[handleNumber].style.display = "none";
          }
        }
      });
    }
  );
}

export {
  mergeTooltips
};
