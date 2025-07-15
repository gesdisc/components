import Component from '../../components/browse-variables/browse-variables.component.js';
/**
 * @summary Browse through the NASA CMR or Giovanni catalogs.
 * @documentation https://disc.gsfc.nasa.gov/components/browse-variables
 * @status MVP
 * @since 1.0
 *
 * @emits terra-variables-change - emitted when the user selects or unselects variables
 *
 * @dependency terra-variable-keyword-search
 * @dependency terra-button
 * @dependency terra-skeleton
 * @dependency terra-icon
 * @dependency terra-loader
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {}>;
export default reactWrapper;
