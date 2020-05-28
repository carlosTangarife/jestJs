import { isNull, isTrue, isFalse, isUndefined } from '../src/true'

describe('probar datos nullos', () => {
    test('valor nullo', () => {
        expect(isNull()).toBeNull();
    })
})

describe('probar datos falos', () => {
    test('valor falso', () => {
        expect(isFalse()).toBeFalsy();
    })
})

describe('probar datos verdaderos', () => {
    test('valor verdadero', () => {
        expect(isTrue()).toBeTruthy();
    })
})

describe('probar datos indefinidos', () => {
    test('valor indefinido', () => {
        expect(isUndefined()).toBeUndefined();
    })
})