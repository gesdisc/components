import type { API } from 'nouislider';
/**
 * copied mostly verbatim from the NoUI Slider docs: https://refreshless.com/nouislider/examples/#section-merging-tooltips
 * TODO: refactor this, it's a bit of a mess
 */
export declare function mergeTooltips(slider: HTMLElement & {
    noUiSlider: API;
}, // HtmlElement with an initialized slider
threshold?: number, // minimum proximity (in percentages) to merge tooltips
separator?: string): void;
