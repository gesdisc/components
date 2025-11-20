import { css } from "lit";

export default css`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap");

  :root,
  :host,
  .terra-theme-horizon {
    color-scheme: normal light;

    --terra-color-carbon-black: hsla(0, 0%, 0%, 1);
    --terra-color-spacesuit-white: hsla(0, 100%, 100%, 1);
    --terra-color-nasa-red: hsla(3, 91%, 59%, 1);
    --terra-color-nasa-blue: hsla(217, 78%, 50%, 1);

    --terra-color-nasa-red-tint: hsla(3, 100%, 66%, 1);
    --terra-color-nasa-red-shade: hsla(357, 99%, 36%, 1);
    --terra-color-nasa-blue-tint: hsla(212, 100%, 58%, 1);
    --terra-color-nasa-blue-shade: hsla(218, 86%, 31%, 1);

    --terra-color-international-orange: hsla(23, 83%, 53%, 1);
    --terra-color-international-orange-tint: hsl(23, 82%, 61%);
    --terra-color-international-orange-shade: hsla(24, 90%, 32%, 1);
    --terra-color-active-green: hsla(145, 67%, 57%, 1);
    --terra-color-active-green-tint: hsl(145, 52%, 64%, 1);
    --terra-color-active-green-shade: hsla(144, 75%, 38%, 1);
    --terra-color-nasa-blue-dark: hsla(214, 52%, 24.5%, 1);
    --terra-color-blue-light: hsla(218, 62%, 85%, 1);

    --terra-color-carbon-90: hsla(240, 8%, 10%, 1);
    --terra-color-carbon-80: hsla(240, 4%, 19%, 1);
    --terra-color-carbon-70: hsla(240, 2%, 27%, 1);
    --terra-color-carbon-60: hsla(240, 2%, 35%, 1);
    --terra-color-carbon-50: hsla(240, 1%, 47%, 1);
    --terra-color-carbon-40: hsla(240, 2%, 59%, 1);
    --terra-color-carbon-30: hsla(240, 1%, 73%, 1);
    --terra-color-carbon-20: hsla(0, 0%, 82%, 1);
    --terra-color-carbon-10: hsla(0, 0%, 89%, 1);
    --terra-color-carbon-5: hsl(0, 0%, 96%, 1);

    --terra-color-success-green: hsl(145, 67%, 40%);
    --terra-color-success-green-hover: hsl(145, 67%, 30%);
    --terra-color-success-green-focus: hsl(145, 52%, 54%);

    --terra-color-default-gray: hsla(240, 13%, 66%, 1);
    --terra-color-default-gray-tint: hsla(240, 2%, 59%, 1);
    --terra-color-default-gray-shade: hsl(240, 9%, 40%, 1);

    --terra-button-border-width: 1px;

    --terra-button-font-size-small: var(--terra-font-size-x-small);
    --terra-button-font-size-medium: var(--terra-font-size-small);
    --terra-button-font-size-large: var(--terra-font-size-medium);

    --terra-button-height-small: 1.875rem;
    --terra-button-height-medium: 2.25rem;
    --terra-button-height-large: 3rem;

    --terra-button-outline-text-color: var(--terra-color-carbon-black);
    --terra-button-text-text-color: var(--terra-color-nasa-blue);
    --terra-button-text-text-color-hover: var(--terra-color-nasa-blue-shade);
    --terra-button-page-link-text-color: var(--terra-color-carbon-black);

    --terra-border-radius-small: 0.125rem;
    --terra-border-radius-medium: 0.25rem;
    --terra-border-radius-large: 0.5rem;
    --terra-border-radius-x-large: 1rem;

    --terra-icon-small: 1.2rem;
    --terra-icon-medium: 1.75rem;
    --terra-icon-large: 2.2rem;
    --terra-icon-x-large: 3rem;

    --terra-avatar-size-small: 2rem;
    --terra-avatar-size-medium: 2.5rem;
    --terra-avatar-size-large: 3.5rem;

    --terra-avatar-background-color: var(--terra-color-carbon-40);
    --terra-avatar-color: var(--terra-color-spacesuit-white);

    --terra-avatar-font-family: var(--terra-font-family--inter);
    --terra-avatar-font-weight: var(--terra-font-weight-normal);

    --terra-chip-height-small: 1.375rem;
    --terra-chip-height-medium: 1.875rem;
    --terra-chip-height-large: 2.5rem;

    --terra-chip-padding-small: var(--terra-spacing-x-small);
    --terra-chip-padding-medium: var(--terra-spacing-small);
    --terra-chip-padding-large: var(--terra-spacing-medium);
    --terra-chip-margin: var(--terra-spacing-2x-small);

    --terra-chip-border-width: 1.5px;

    --terra-chip-font-family: var(--terra-font-family--inter);
    --terra-chip-font-weight: var(--terra-font-weight-bold);

    --terra-chip-background-color: var(--terra-color-spacesuit-white);
    --terra-chip-border-color: var(--terra-color-nasa-blue);
    --terra-chip-color: var(--terra-color-carbon-70);
    --terra-chip-color-hover: var(--terra-color-carbon-90);
    --terra-chip-icon-color: var(--terra-color-carbon-70);
    --terra-chip-icon-color-hover: var(--terra-color-carbon-90);

    --terra-chip-transition: fill var(--terra-transition-fast);

    --terra-accordion-background-color: var(--terra-color-spacesuit-white);
    --terra-accordion-border-color: var(--terra-color-carbon-20);
    --terra-accordion-border-width: 1px;
    --terra-accordion-border-radius: var(--terra-border-radius-large);
    --terra-accordion-summary-background-color: var(--terra-color-carbon-5);
    --terra-accordion-summary-background-color-hover: var(
      --terra-color-carbon-10
    );
    --terra-accordion-summary-border-color: var(--terra-color-carbon-20);
    --terra-accordion-summary-padding: var(--terra-spacing-small)
      var(--terra-spacing-medium);
    --terra-accordion-summary-font-size: var(--terra-font-size-small);
    --terra-accordion-summary-font-weight: var(--terra-font-weight-semibold);
    --terra-accordion-summary-color: var(--terra-color-carbon-80);
    --terra-accordion-content-padding: var(--terra-spacing-medium);
    --terra-accordion-transition: background-color var(--terra-transition-fast);

    --terra-skeleton-background-color: var(--terra-color-carbon-50);
    --terra-skeleton-sheen-color: var(--terra-color-carbon-60);
    --terra-skeleton-border-radius: var(--terra-border-radius-medium);
    --terra-skeleton-margin-bottom: var(--terra-spacing-small);
    --terra-skeleton-min-height: var(--terra-spacing-medium);

    --terra-loader-size-small: 30px;
    --terra-loader-size-medium: 52px;
    --terra-loader-size-large: 100px;
    --terra-loader-stroke-width-small: 3.5px;
    --terra-loader-stroke-width-medium: 3.5px;
    --terra-loader-stroke-width-large: 2.5px;

    --terra-loader-track-color: var(--terra-color-carbon-20);
    --terra-loader-progress-color: var(--terra-color-nasa-blue);
    --terra-loader-planet-color: var(--terra-color-carbon-20);
    --terra-loader-moon-color: var(--terra-color-nasa-blue);

    --terra-loader-text-letter-spacing: var(--terra-letter-spacing-loose);
    --terra-loader-text-padding: var(--terra-spacing-2x-small);

    --terra-menu-item-font-family: var(--terra-font-family--inter);
    --terra-menu-item-background-color-hover: var(--terra-color-carbon-10);
    --terra-menu-item-background-color-focus: var(--terra-color-nasa-blue);
    --terra-menu-item-color: var(--terra-color-carbon-70);
    --terra-menu-item-color-hover: var(--terra-color-carbon-90);
    --terra-menu-item-color-focus: var(--terra-color-spacesuit-white);

    --terra-popup-arrow-size: 6px;
    --terra-popup-arrow-color: var(--terra-color-carbon-black);

    --terra-alert-line-height: var(--terra-line-height-normal);
    --terra-alert-filled-background-color-primary: var(
      --terra-color-nasa-blue-shade
    );
    --terra-alert-filled-background-color-success: var(
      --terra-color-success-green
    );
    --terra-alert-filled-background-color-neutral: var(--terra-color-carbon-60);
    --terra-alert-filled-background-color-warning: var(
      --terra-color-international-orange
    );
    --terra-alert-filled-background-color-danger: var(--terra-color-nasa-red);
    --terra-alert-filled-color: var(--terra-color-spacesuit-white);
    --terra-alert-filled-icon-color: var(--terra-color-spacesuit-white);

    --terra-border-radius-circle: 50%;

    --terra-shadow-x-small: 0 1px 2px hsl(240 3.8% 46.1% / 6%);
    --terra-shadow-small: 0 1px 2px hsl(240 3.8% 46.1% / 12%);
    --terra-shadow-medium: 0 2px 4px hsl(240 3.8% 46.1% / 12%);
    --terra-shadow-large: 0 2px 8px hsl(240 3.8% 46.1% / 12%);
    --terra-shadow-x-large: 0 4px 16px hsl(240 3.8% 46.1% / 12%);

    --terra-spacing-3x-small: 0.125rem;
    --terra-spacing-2x-small: 0.25rem;
    --terra-spacing-x-small: 0.5rem;
    --terra-spacing-small: 0.75rem;
    --terra-spacing-medium: 1rem;
    --terra-spacing-large: 1.25rem;
    --terra-spacing-x-large: 1.75rem;
    --terra-spacing-2x-large: 2.25rem;
    --terra-spacing-3x-large: 3rem;
    --terra-spacing-4x-large: 4.5rem;

    --terra-transition-x-slow: 1000ms;
    --terra-transition-slow: 500ms;
    --terra-transition-medium: 250ms;
    --terra-transition-fast: 150ms;
    --terra-transition-x-fast: 50ms;

    --terra-font-family--inter: "Inter", sans-serif;
    --terra-font-family--public-sans: "Public Sans", sans-serif;
    --terra-font-family--dm-mono: "DM Mono", monospace;

    --terra-font-color-primary: var(--terra-color-carbon-90);
    --terra-font-color-secondary: var(--terra-color-carbon-70);
    --terra-font-color-tertiary: var(--terra-color-carbon-50);

    --terra-font-size-2x-small: 0.625rem;
    --terra-font-size-x-small: 0.75rem;
    --terra-font-size-small: 0.875rem;
    --terra-font-size-medium: 1rem;
    --terra-font-size-large: 1.25rem;
    --terra-font-size-x-large: 1.5rem;
    --terra-font-size-2x-large: 2.25rem;
    --terra-font-size-3x-large: 3rem;
    --terra-font-size-4x-large: 4.5rem;

    --terra-font-weight-light: 300;
    --terra-font-weight-normal: 400;
    --terra-font-weight-semibold: 600;
    --terra-font-weight-bold: 700;

    --terra-letter-spacing-denser: -0.03em;
    --terra-letter-spacing-dense: -0.015em;
    --terra-letter-spacing-normal: normal;
    --terra-letter-spacing-loose: 0.075em;
    --terra-letter-spacing-looser: 0.15em;

    --terra-line-height-denser: 1;
    --terra-line-height-dense: 1.4;
    --terra-line-height-normal: 1.8;
    --terra-line-height-loose: 2.2;
    --terra-line-height-looser: 2.6;

    --terra-focus-ring-color: var(--terra-color-nasa-blue);
    --terra-focus-ring-style: solid;
    --terra-focus-ring-width: 3px;
    --terra-focus-ring: var(--terra-focus-ring-style)
      var(--terra-focus-ring-width) var(--terra-focus-ring-color);
    --terra-focus-ring-offset: 1px;

    --terra-input-height-small: 1.875rem;
    --terra-input-height-medium: 2.5rem;
    --terra-input-height-large: 3.125rem;

    --terra-input-font-family: var(--terra-font-family--public-sans);
    --terra-input-font-size: var(--terra-font-size-small);
    --terra-input-color: hsla(240, 4%, 19%, 1);
    --terra-input-font-weight: var(--terra-font-weight-normal);
    --terra-input-line-height: var(--terra-line-height-denser);
    --terra-input-border-color: var(--terra-color-carbon-20);
    --terra-input-background-color: var(--terra-color-spacesuit-white);
    --terra-input-border-width: 1px;
    --terra-input-border-radius: var(--terra-border-radius-medium);

    --terra-input-background-color-hover: var(--terra-input-background-color);
    --terra-input-background-color-focus: var(--terra-input-background-color);
    --terra-input-background-color-disabled: var(--terra-color-carbon-10);
    --terra-input-border-color-hover: var(--terra-color-carbon-40);
    --terra-input-border-color-focus: var(--terra-color-primary-50);
    --terra-input-border-color-disabled: var(--terra-color-carbon-30);

    --terra-input-required-content: "*";
    --terra-input-required-content-offset: -2px;
    --terra-input-required-content-color: var(--terra-color-nasa-red);

    --terra-input-border-radius-small: var(--terra-border-radius-medium);
    --terra-input-border-radius-medium: var(--terra-border-radius-medium);
    --terra-input-border-radius-large: var(--terra-border-radius-medium);

    --terra-input-font-weight: var(--terra-font-weight-normal);
    --terra-input-font-size-small: var(--terra-font-size-small);
    --terra-input-font-size-medium: var(--terra-font-size-medium);
    --terra-input-font-size-large: var(--terra-font-size-large);
    --terra-input-letter-spacing: var(--terra-letter-spacing-normal);

    --terra-input-color-hover: var(--terra-color-carbon-70);
    --terra-input-color-focus: var(--terra-color-carbon-70);
    --terra-input-color-disabled: var(--terra-color-carbon-90);
    --terra-input-icon-color: var(--terra-color-carbon-50);
    --terra-input-icon-color-hover: var(--terra-color-carbon-60);
    --terra-input-icon-color-focus: var(--terra-color-carbon-60);
    --terra-input-placeholder-color: var(--terra-color-carbon-50);
    --terra-input-placeholder-color-disabled: var(--terra-color-carbon-60);
    --terra-input-spacing-small: var(--terra-spacing-small);
    --terra-input-spacing-medium: var(--terra-spacing-medium);
    --terra-input-spacing-large: var(--terra-spacing-large);

    --terra-input-focus-ring-color: hsl(198.6 88.7% 48.4% / 40%);
    --terra-input-focus-ring-offset: 0;

    --terra-input-filled-background-color: var(--terra-color-carbon-10);
    --terra-input-filled-background-color-hover: var(--terra-color-carbon-10);
    --terra-input-filled-background-color-focus: var(--terra-color-carbon-10);
    --terra-input-filled-background-color-disabled: var(
      --terra-color-carbon-10
    );
    --terra-input-filled-color: var(--terra-color-carbon-80);
    --terra-input-filled-color-hover: var(--terra-color-carbon-80);
    --terra-input-filled-color-focus: var(--terra-color-carbon-70);
    --terra-input-filled-color-disabled: var(--terra-color-carbon-80);

    --terra-input-label-font-family: var(--terra-font-family--inter);
    --terra-input-label-font-size: var(--terra-font-size-small);
    --terra-input-label-color: var(--terra-color-carbon-80);
    --terra-input-label-line-weight: var(var(--terra-font-weight-semibold));
    --terra-input-label-line-height: var(--terra-line-height-looser);

    --terra-map-background-color: var(--terra-color-carbon-5);
    --terra-map-border-color: var(--terra-color-carbon-20);

    --terra-input-help-text-font-size-small: var(--terra-font-size-x-small);
    --terra-input-help-text-font-size-medium: var(--terra-font-size-small);
    --terra-input-help-text-font-size-large: var(--terra-font-size-medium);
    --terra-input-help-text-color: var(--terra-color-carbon-50);

    --terra-checkbox-size-small: 0.875rem;
    --terra-checkbox-size-medium: 1.125rem;
    --terra-checkbox-size-large: 1.375rem;

    --terra-checkbox-background-color: var(--terra-color-spacesuit-white);
    --terra-checkbox-background-color-hover: var(--terra-color-spacesuit-white);
    --terra-checkbox-background-color-checked: var(--terra-color-nasa-blue);
    --terra-checkbox-background-color-checked-hover: var(
      --terra-color-nasa-blue-shade
    );
    --terra-checkbox-background-color-disabled: var(--terra-color-carbon-10);
    --terra-checkbox-border-color: var(--terra-color-carbon-20);
    --terra-checkbox-border-color-hover: var(--terra-color-carbon-40);
    --terra-checkbox-border-color-checked: var(--terra-color-nasa-blue);
    --terra-checkbox-border-color-checked-hover: var(
      --terra-color-nasa-blue-shade
    );
    --terra-checkbox-border-color-disabled: var(--terra-color-carbon-30);
    --terra-checkbox-border-width: 1px;
    --terra-checkbox-border-radius: 2px;
    --terra-checkbox-icon-color: var(--terra-color-spacesuit-white);
    --terra-checkbox-label-color: var(--terra-color-carbon-80);
    --terra-checkbox-label-font-family: var(--terra-font-family--inter);
    --terra-checkbox-label-font-size: var(--terra-font-size-small);
    --terra-checkbox-label-font-weight: var(--terra-font-weight-normal);

    --terra-checkbox-focus-ring-color: var(--terra-color-nasa-blue);
    --terra-checkbox-focus-ring-width: var(--terra-focus-ring-width);
    --terra-checkbox-focus-ring-offset: var(--terra-focus-ring-offset);

    --terra-radio-size-small: 0.875rem;
    --terra-radio-size-medium: 1.125rem;
    --terra-radio-size-large: 1.375rem;

    --terra-radio-background-color: var(--terra-color-spacesuit-white);
    --terra-radio-background-color-hover: var(--terra-color-spacesuit-white);
    --terra-radio-background-color-checked: var(--terra-color-nasa-blue);
    --terra-radio-background-color-checked-hover: var(
      --terra-color-nasa-blue-shade
    );
    --terra-radio-background-color-disabled: var(--terra-color-carbon-10);
    --terra-radio-border-color: var(--terra-color-carbon-20);
    --terra-radio-border-color-hover: var(--terra-color-carbon-40);
    --terra-radio-border-color-checked: var(--terra-color-nasa-blue);
    --terra-radio-border-color-checked-hover: var(
      --terra-color-nasa-blue-shade
    );
    --terra-radio-border-color-disabled: var(--terra-color-carbon-30);
    --terra-radio-border-width: 1px;
    --terra-radio-icon-color: var(--terra-color-spacesuit-white);
    --terra-radio-label-color: var(--terra-color-carbon-80);
    --terra-radio-label-font-family: var(--terra-font-family--inter);
    --terra-radio-label-font-size: var(--terra-font-size-small);
    --terra-radio-label-font-weight: var(--terra-font-weight-normal);

    --terra-radio-focus-ring-color: var(--terra-color-nasa-blue);
    --terra-radio-focus-ring-width: var(--terra-focus-ring-width);
    --terra-radio-focus-ring-offset: var(--terra-focus-ring-offset);

    --terra-toggle-size-small: 0.875rem;
    --terra-toggle-size-medium: 1.125rem;
    --terra-toggle-size-large: 1.375rem;

    --terra-toggle-background-color-off: var(--terra-color-carbon-30);
    --terra-toggle-background-color-on: var(--terra-color-nasa-blue);
    --terra-toggle-border-color-off: var(--terra-color-carbon-30);
    --terra-toggle-border-color-on: var(--terra-color-nasa-blue);
    --terra-toggle-thumb-background-color: var(--terra-color-spacesuit-white);
    --terra-toggle-thumb-border-color-off: var(--terra-color-carbon-30);
    --terra-toggle-thumb-border-color-on: var(--terra-color-nasa-blue);
    --terra-toggle-label-color: var(--terra-color-carbon-90);

    --terra-toggle-focus-ring-color: var(--terra-color-nasa-blue);

    --terra-link-color: var(--terra-color-carbon-90);
    --terra-link-color-hover: var(--terra-color-carbon-90);
    --terra-link-text-decoration: underline;
    --terra-link-text-decoration-style: dotted;
    --terra-link-underline-offset: 2px;

    --terra-pagination-button-color: var(--terra-color-carbon-90);
    --terra-pagination-button-color-hover: var(--terra-color-carbon-90);
    --terra-pagination-button-color-current: var(--terra-color-carbon-black);

    --terra-pagination-icon-button-background-color: var(
      --terra-color-spacesuit-white
    );
    --terra-pagination-icon-button-border-color: var(--terra-color-carbon-30);
    --terra-pagination-icon-button-background-color-hover: var(
      --terra-color-carbon-5
    );
    --terra-pagination-icon-button-border-color-hover: var(
      --terra-color-carbon-40
    );
    --terra-pagination-icon-button-background-color-disabled: var(
      --terra-color-carbon-5
    );
    --terra-pagination-icon-button-border-color-disabled: var(
      --terra-color-carbon-20
    );
    --terra-pagination-icon-button-icon-color-disabled: var(
      --terra-color-carbon-40
    );

    --terra-slider-track-background-color: #fafafa;
    --terra-slider-track-border-color: var(--terra-input-border-color);
    --terra-slider-connect-color: var(--terra-color-nasa-blue);

    --terra-slider-handle-background-color: var(--terra-color-spacesuit-white);
    --terra-slider-handle-border-color: var(--terra-color-nasa-blue);

    --terra-slider-label-color: var(--terra-color-carbon-90);
    --terra-slider-range-color: var(--terra-color-carbon-90);

    --terra-overlay-background-color: hsl(240 3.8% 46.1% / 33%);

    --terra-panel-background-color: var(--terra-color-spacesuit-white);
    --terra-panel-border-color: var(--terra-color-carbon-20);
    --terra-panel-border-width: 1px;

    --terra-alert-white-background-color: var(--terra-panel-background-color);
    --terra-alert-white-color: var(--terra-color-carbon-70);

    --terra-tooltip-border-radius: var(--terra-border-radius-medium);
    --terra-tooltip-background-color: var(--terra-color-carbon-80);
    --terra-tooltip-color: var(--terra-color-spacesuit-white);
    --terra-tooltip-font-family: var(--terra-font-family--public-sans);
    --terra-tooltip-font-weight: var(--terra-font-weight-normal);
    --terra-tooltip-font-size: var(--terra-font-size-small);
    --terra-tooltip-line-height: var(--terra-line-height-looser);
    --terra-tooltip-padding: var(--terra-spacing-2x-small)
      var(--terra-spacing-x-small);
    --terra-tooltip-arrow-size: 6px;

    --terra-z-index-drawer: 700;
    --terra-z-index-dialog: 1000;
    --terra-z-index-dropdown: 900;
    --terra-z-index-toast: 950;
    --terra-z-index-tooltip: 1000;

    --terra-caption-font-family: var(--terra-font-family--public-sans);
    --terra-caption-font-size: var(--terra-font-size-small);
    --terra-caption-font-weight: var(--terra-font-weight-normal);
    --terra-caption-line-height: var(--terra-line-height-normal);
    --terra-caption-color: var(--terra-color-carbon-50);
    --terra-caption-credit-color: var(--terra-color-carbon-70);

    --terra-status-indicator-font-family: var(--terra-font-family--inter);
    --terra-status-indicator-font-size: var(--terra-font-size-small);
    --terra-status-indicator-font-weight: var(--terra-font-weight-normal);
    --terra-status-indicator-label-color: var(--terra-color-carbon-90);
    --terra-status-indicator-dot-color-active: var(--terra-color-active-green);
    --terra-status-indicator-dot-color-completed: var(--terra-color-carbon-40);
    --terra-status-indicator-dot-color-testing: var(
      --terra-color-international-orange
    );
    --terra-status-indicator-dot-color-future: var(--terra-color-nasa-blue);

    --terra-tag-font-family: var(--terra-font-family--inter);
    --terra-tag-font-size-small: var(--terra-font-size-x-small);
    --terra-tag-font-size-medium: var(--terra-font-size-small);
    --terra-tag-font-size-large: var(--terra-font-size-medium);
    --terra-tag-font-weight: var(--terra-font-weight-normal);
    --terra-tag-font-weight-urgent: var(--terra-font-weight-bold, 700);

    --terra-tag-icon-size-small: 1.25rem;
    --terra-tag-icon-size-medium: 1.5rem;
    --terra-tag-icon-size-large: 1.75rem;
    --terra-tag-icon-inner-size-small: 0.75rem;
    --terra-tag-icon-inner-size-medium: 0.875rem;
    --terra-tag-icon-inner-size-large: 1rem;
    --terra-tag-icon-border-color: var(--terra-color-carbon-40);

    --terra-tag-color: var(--terra-color-carbon-90);
    --terra-tag-background-color: transparent;
    --terra-tag-border-color: var(--terra-color-carbon-30);
    --terra-tag-border-color-hover: var(--terra-color-carbon-40);
    --terra-tag-background-color-hover: var(--terra-color-carbon-5);

    --terra-tag-urgent-color: var(--terra-color-spacesuit-white);
    --terra-tag-urgent-background-color: var(--terra-color-nasa-red);

    --terra-tag-padding-small: 0.25rem 0.5rem;
    --terra-tag-padding-medium: var(--terra-spacing-x-small, 0.5rem)
      var(--terra-spacing-small, 0.75rem);
    --terra-tag-padding-large: 0.625rem 1rem;

    --terra-scroll-hint-icon-background-color: var(--terra-color-carbon-black);
    --terra-scroll-hint-icon-color: var(--terra-color-spacesuit-white);
    --terra-scroll-hint-text-color: var(--terra-color-carbon-black);
    --terra-scroll-hint-ring-color: var(--terra-color-nasa-red);
  }

  @media (prefers-color-scheme: dark) {
    :root,
    :host {
      color-scheme: dark;

      --terra-color-nasa-red: hsl(2, 68%, 52%);

      --terra-color-nasa-red-shade: hsla(0, 91%, 37%, 1);

      --terra-color-default-gray: hsla(240, 2%, 59%, 1);
      --terra-color-default-gray-tint: hsla(240, 10%, 70%, 1);
      --terra-color-default-gray-shade: hsl(240, 9%, 40%, 1);

      --terra-color-carbon-90: hsl(0, 0%, 96%);
      --terra-color-carbon-80: hsla(0, 0%, 89%, 1);
      --terra-color-carbon-70: hsla(0, 0%, 82%, 1);
      --terra-color-carbon-60: hsla(240, 1%, 73%, 1);
      --terra-color-carbon-50: hsla(240, 2%, 59%, 1);
      --terra-color-carbon-40: hsla(240, 1%, 47%, 1);
      --terra-color-carbon-30: hsla(240, 2%, 35%, 1);
      --terra-color-carbon-20: hsl(240, 2%, 27%);
      --terra-color-carbon-10: hsl(240, 3%, 19%);
      --terra-color-carbon-5: hsla(240, 8%, 10%, 1);

      --terra-button-outline-text-color: var(--terra-color-spacesuit-white);
      --terra-button-text-text-color: hsl(217, 78%, 58%);
      --terra-button-text-text-color-hover: var(--terra-color-nasa-blue);
      --terra-button-page-link-text-color: var(--terra-color-spacesuit-white);

      --terra-input-border-color: var(--terra-color-carbon-60);

      --terra-map-background-color: var(--terra-color-carbon-10);
      --terra-map-border-color: var(--terra-color-carbon-20);

      --terra-chip-background-color: var(--terra-color-carbon-black);
      --terra-chip-color: var(--terra-color-carbon-60);
      --terra-chip-color-hover: var(--terra-color-carbon-80);
      --terra-chip-icon-color: var(--terra-color-carbon-60);
      --terra-chip-icon-color-hover: var(--terra-color-carbon-80);

      --terra-caption-color: var(--terra-color-carbon-60);
      --terra-caption-credit-color: var(--terra-color-carbon-70);

      --terra-status-indicator-label-color: var(--terra-color-carbon-60);

      --terra-tag-color: var(--terra-color-carbon-60);
      --terra-tag-icon-border-color: var(--terra-color-carbon-30);
      --terra-tag-border-color: var(--terra-color-carbon-20);
      --terra-tag-border-color-hover: var(--terra-color-carbon-30);
      --terra-tag-background-color-hover: var(--terra-color-carbon-10);

      --terra-scroll-hint-icon-background-color: var(
        --terra-color-spacesuit-white
      );
      --terra-scroll-hint-icon-color: var(--terra-color-carbon-black);
      --terra-scroll-hint-text-color: var(--terra-color-spacesuit-white);

      --terra-toggle-label-color: var(--terra-color-carbon-60);

      --terra-link-color: var(--terra-color-carbon-60);
      --terra-link-color-hover: var(--terra-color-carbon-60);

      --terra-pagination-button-color: var(--terra-color-carbon-60);
      --terra-pagination-button-color-hover: var(--terra-color-carbon-80);
      --terra-pagination-button-color-current: var(--terra-color-carbon-90);
      --terra-pagination-icon-button-background-color: var(
        --terra-color-carbon-10
      );
      --terra-pagination-icon-button-border-color: var(--terra-color-carbon-30);
      --terra-pagination-icon-button-background-color-hover: var(
        --terra-color-carbon-5
      );
      --terra-pagination-icon-button-border-color-hover: var(
        --terra-color-carbon-40
      );
      --terra-pagination-icon-button-background-color-disabled: var(
        --terra-color-carbon-5
      );
      --terra-pagination-icon-button-border-color-disabled: var(
        --terra-color-carbon-20
      );
      --terra-pagination-icon-button-icon-color-disabled: var(
        --terra-color-carbon-40
      );

      --terra-slider-track-background-color: var(--terra-color-carbon-10);
      --terra-slider-track-border-color: var(--terra-color-carbon-20);
      --terra-slider-connect-color: var(--terra-color-nasa-blue-tint);
      --terra-slider-handle-background-color: var(--terra-color-carbon-black);
      --terra-slider-handle-border-color: var(--terra-color-nasa-blue-tint);
      --terra-slider-label-color: var(--terra-color-carbon-60);
      --terra-slider-range-color: var(--terra-color-carbon-60);
    }
  }

  :host,
  .terra-theme-dark {
    color-scheme: dark;

    --terra-color-nasa-red: hsl(2, 68%, 52%);

    --terra-color-nasa-red-shade: hsla(0, 91%, 37%, 1);

    --terra-color-default-gray: hsla(240, 2%, 59%, 1);
    --terra-color-default-gray-tint: hsla(240, 10%, 70%, 1);
    --terra-color-default-gray-shade: hsl(240, 9%, 40%, 1);

    --terra-color-carbon-90: hsl(0, 0%, 96%);
    --terra-color-carbon-80: hsla(0, 0%, 89%, 1);
    --terra-color-carbon-70: hsla(0, 0%, 82%, 1);
    --terra-color-carbon-60: hsla(240, 1%, 73%, 1);
    --terra-color-carbon-50: hsla(240, 2%, 59%, 1);
    --terra-color-carbon-40: hsla(240, 1%, 47%, 1);
    --terra-color-carbon-30: hsla(240, 2%, 35%, 1);
    --terra-color-carbon-20: hsl(240, 2%, 27%);
    --terra-color-carbon-10: hsl(240, 3%, 19%);
    --terra-color-carbon-5: hsla(240, 8%, 10%, 1);

    --terra-button-outline-text-color: var(--terra-color-spacesuit-white);
    --terra-button-text-text-color: hsl(217, 78%, 58%);
    --terra-button-text-text-color-hover: var(--terra-color-nasa-blue);
    --terra-button-page-link-text-color: var(--terra-color-spacesuit-white);

    --terra-input-border-color: var(--terra-color-carbon-60);

    --terra-panel-background-color: var(--terra-color-carbon-10);
    --terra-panel-border-color: var(--terra-color-carbon-20);

    --terra-map-background-color: var(--terra-color-carbon-10);
    --terra-map-border-color: var(--terra-color-carbon-20);

    --terra-chip-background-color: var(--terra-color-carbon-black);
    --terra-chip-color: var(--terra-color-carbon-60);
    --terra-chip-color-hover: var(--terra-color-carbon-80);
    --terra-chip-icon-color: var(--terra-color-carbon-60);
    --terra-chip-icon-color-hover: var(--terra-color-carbon-80);

    --terra-alert-white-background-color: var(--terra-color-carbon-10);
    --terra-alert-white-color: var(--terra-color-carbon-60);

    --terra-accordion-background-color: var(--terra-color-carbon-10);
    --terra-accordion-border-color: var(--terra-color-carbon-20);
    --terra-accordion-summary-background-color: var(--terra-color-carbon-5);
    --terra-accordion-summary-background-color-hover: var(
      --terra-color-carbon-10
    );
    --terra-accordion-summary-border-color: var(--terra-color-carbon-20);
    --terra-accordion-summary-color: var(--terra-color-carbon-60);

    --terra-caption-color: var(--terra-color-carbon-60);
    --terra-caption-credit-color: var(--terra-color-carbon-70);

    --terra-status-indicator-label-color: var(--terra-color-carbon-60);

    --terra-tag-color: var(--terra-color-carbon-60);
    --terra-tag-icon-border-color: var(--terra-color-carbon-30);
    --terra-tag-border-color: var(--terra-color-carbon-20);
    --terra-tag-border-color-hover: var(--terra-color-carbon-30);
    --terra-tag-background-color-hover: var(--terra-color-carbon-10);

    --terra-scroll-hint-icon-background-color: var(
      --terra-color-spacesuit-white
    );
    --terra-scroll-hint-icon-color: var(--terra-color-carbon-black);
    --terra-scroll-hint-text-color: var(--terra-color-spacesuit-white);

    --terra-checkbox-background-color: var(--terra-color-carbon-10);
    --terra-checkbox-background-color-hover: var(--terra-color-carbon-10);
    --terra-checkbox-background-color-checked: var(--terra-color-nasa-blue);
    --terra-checkbox-background-color-checked-hover: var(
      --terra-color-nasa-blue-shade
    );
    --terra-checkbox-background-color-disabled: var(--terra-color-carbon-10);
    --terra-checkbox-border-color: var(--terra-color-carbon-20);
    --terra-checkbox-border-color-hover: var(--terra-color-carbon-40);
    --terra-checkbox-border-color-checked: var(--terra-color-nasa-blue);
    --terra-checkbox-border-color-checked-hover: var(
      --terra-color-nasa-blue-shade
    );
    --terra-checkbox-border-color-disabled: var(--terra-color-carbon-30);
    --terra-checkbox-label-color: var(--terra-color-carbon-60);

    --terra-radio-background-color: var(--terra-color-carbon-10);
    --terra-radio-background-color-hover: var(--terra-color-carbon-10);
    --terra-radio-background-color-checked: var(--terra-color-nasa-blue);
    --terra-radio-background-color-checked-hover: var(
      --terra-color-nasa-blue-shade
    );
    --terra-radio-background-color-disabled: var(--terra-color-carbon-10);
    --terra-radio-border-color: var(--terra-color-carbon-20);
    --terra-radio-border-color-hover: var(--terra-color-carbon-40);
    --terra-radio-border-color-checked: var(--terra-color-nasa-blue);
    --terra-radio-border-color-checked-hover: var(
      --terra-color-nasa-blue-shade
    );
    --terra-radio-border-color-disabled: var(--terra-color-carbon-30);
    --terra-radio-label-color: var(--terra-color-carbon-60);

    --terra-toggle-label-color: var(--terra-color-carbon-60);

    --terra-link-color: var(--terra-color-carbon-60);
    --terra-link-color-hover: var(--terra-color-carbon-60);

    --terra-pagination-button-color: var(--terra-color-carbon-60);
    --terra-pagination-button-color-hover: var(--terra-color-carbon-80);
    --terra-pagination-button-color-current: var(--terra-color-carbon-90);
    --terra-pagination-icon-button-background-color: var(
      --terra-color-carbon-10
    );
    --terra-pagination-icon-button-border-color: var(--terra-color-carbon-30);
    --terra-pagination-icon-button-background-color-hover: var(
      --terra-color-carbon-5
    );
    --terra-pagination-icon-button-border-color-hover: var(
      --terra-color-carbon-40
    );
    --terra-pagination-icon-button-background-color-disabled: var(
      --terra-color-carbon-5
    );
    --terra-pagination-icon-button-border-color-disabled: var(
      --terra-color-carbon-20
    );
    --terra-pagination-icon-button-icon-color-disabled: var(
      --terra-color-carbon-40
    );

    --terra-slider-track-background-color: var(--terra-color-carbon-10);
    --terra-slider-track-border-color: var(--terra-color-carbon-20);
    --terra-slider-connect-color: var(--terra-color-nasa-blue-tint);
    --terra-slider-handle-background-color: var(--terra-color-carbon-black);
    --terra-slider-handle-border-color: var(--terra-color-nasa-blue-tint);
    --terra-slider-label-color: var(--terra-color-carbon-60);
    --terra-slider-range-color: var(--terra-color-carbon-60);
  }
`;
