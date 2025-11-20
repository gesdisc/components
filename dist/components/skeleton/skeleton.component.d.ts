import TerraElement from '../../internal/terra-element.js';
import type { CSSResultGroup } from 'lit';
/**
 * @summary Skeletons are loading indicators to represent where content will eventually be drawn.
 * @documentation https://terra-ui.netlify.app/components/skeleton
 * @status experimental
 * @since 1.0
 *
 * @dependency sl-skeleton
 */
export default class TerraSkeleton extends TerraElement {
    static styles: CSSResultGroup;
    rows: number;
    effect: 'pulse' | 'sheen' | 'none';
    variableWidths: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
