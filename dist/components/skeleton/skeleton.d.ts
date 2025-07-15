import TerraSkeleton from './skeleton.component.js';
export * from './skeleton.component.js';
export default TerraSkeleton;
declare global {
    interface HTMLElementTagNameMap {
        'terra-skeleton': TerraSkeleton;
    }
}
