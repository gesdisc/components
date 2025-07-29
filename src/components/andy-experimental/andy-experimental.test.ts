import '../../../dist/terra-ui-components.js';
import { expect, fixture, html } from '@open-wc/testing';

describe('<terra-andy-experimental>', () => {
    it('should render a component', async () => {
        const el = await fixture(html` <terra-andy-experimental></terra-andy-experimental> `);

        expect(el).to.exist;
    });
});
