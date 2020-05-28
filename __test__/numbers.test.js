import { numbers } from '../src/numbers';

describe('Comparar números', () => {
    test('Mayor que', () => {
        expect(numbers(1,2)).toBeGreaterThan(2);
    });

    test('Menor que', () => {
        expect(numbers(1,2)).toBeLessThan(10);
    });

    test('Menor o igual que', () => {
        expect(numbers(2,2)).toBeLessThanOrEqual(4);
    });

    test('igual que con flotantes', () => {
        expect(numbers(0.2,0.2)).toBeCloseTo(0.4);
    });
})
