import { assert, expect } from 'chai';
import 'mocha';
import * as sinon from 'sinon';

import { Toolbar } from '../src/toolbar';
import { Button } from '../src/button';
import { IPanel } from '../src/ipanel';
import { MockPanel } from './mock/panel.mock';

describe('Toolbar class', () => {

    it('should construct with no panels', () => {
        const container = document.createElement("div");
        const toolbar = new Toolbar([], container);

        expect(container.childElementCount).to.equal(1);
    });

    it('can render buttons', () => {
        var panel = new MockPanel(() => [new Button("", () => "", () => "")]);

        const container = document.createElement("div");
        const toolbar = new Toolbar([panel], container);

        toolbar.render();

        const expectedList = container.firstElementChild;
        expect(expectedList).instanceof(HTMLUListElement, "We expect the toolbar to be a list");
        expect(expectedList.childElementCount).equals(1, "We expect that list to have one item");
    });
});