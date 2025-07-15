import { css } from "lit";

export default css`
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

    --terra-map-background-color: var(--terra-color-carbon-10);
    --terra-map-border-color: var(--terra-color-carbon-20);
  }
`;
