import TerraAndyExperimental from './andy-experimental.component.js';

export * from './andy-experimental.component.js';
export default TerraAndyExperimental;

TerraAndyExperimental.define('terra-andy-experimental');

declare global {
    interface HTMLElementTagNameMap {
      'terra-andy-experimental': TerraAndyExperimental;
    }
}
