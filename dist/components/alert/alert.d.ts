import TerraAlert from './alert.component.js';
export * from './alert.component.js';
export default TerraAlert;
declare global {
    interface HTMLElementTagNameMap {
        'terra-alert': TerraAlert;
    }
}
