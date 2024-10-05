import {expect, describe, test} from 'vitest';
import { prepareWord } from './utils';

describe('prepareWord function tests', () => {
    test('Test for all caps chars', () => {
      expect(prepareWord('ANYA')).toBe('Anya');
    });

    test('Test for all little chars', () => {
        expect(prepareWord('anya')).toBe('Anya');
    });

    test('Test for all different chars', () => {
        expect(prepareWord('dAddY')).toBe('Daddy');
    });
});

