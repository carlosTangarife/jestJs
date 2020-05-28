import { sumar, restar, dividir, multiplicar } from '../src/maths';

describe('Calculos matematicos', () => {
    test('Prueba de sumas', () => {
        expect(sumar(1, 1)).toBe(2)
    })

    test('Prueba de resta', () => {
        expect(restar(1, 1)).toBe(0)
    })

    test('Prueba de multiplicar', () => {
        expect(multiplicar(2, 2)).toBe(4)
    })

    test('Prueba de dividir', () => {
        expect(dividir(8, 4)).toBe(2)
    })    
})