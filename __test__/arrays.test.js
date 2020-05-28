import {arrayFruits, arrayColors} from'../src/arrays'

describe('comprobar que existe un elemento en el array de frutas', () => {
    test('deberia tener una banana', () => {
        expect(arrayFruits()).toContain('banana');
    });

    test('no deberia tener platano', () => {
        expect(arrayFruits()).not.toContain('platano');
    });    
})

describe('comprobar tamaños de los arreglos de frutas y colores', () => {
    test('deberia tener 6 frutas', () => {
        expect(arrayFruits()).toHaveLength(6);
    });

    test('no deberia tener 5 colores', () => {
        expect(arrayColors()).toHaveLength(5);
    });    
})