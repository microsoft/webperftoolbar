import { assert, expect } from 'chai';
import 'mocha';
import { Toolbar } from '../src/toolbar';

describe('Toolbar class', () => {
    it('should construct with no panels', () => {
        const container = document.createElement("div");
        const toolbar = new Toolbar([], container);
        assert.equal(1, container.childElementCount);
    });
});