import Component from '../../components/data-access/data-access.component.js';
/**
 * @summary Discover and export collection granules with search, temporal, spatial, and cloud cover filters.
 * @documentation https://terra-ui.netlify.app/components/data-access
 * @status stable
 * @since 1.0
 *
 * @dependency terra-loader
 * @dependency terra-icon
 * @dependency terra-date-picker
 * @dependency terra-spatial-picker
 * @dependency terra-slider
 *
 * @attr short-name - Collection short name used to build the Collection Entry ID.
 * @attr version - Collection version used to build the Collection Entry ID.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {}>;
export default reactWrapper;
