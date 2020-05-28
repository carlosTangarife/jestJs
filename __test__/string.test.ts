describe('Comprobar cadenas de texto', () => {
    const text = 'es un bonito día';
    test('debe contener la palabra bonito', () => {
        expect(text).toMatch(/bonito/)
    })

    test('no debe contener la palabra bonito', () => {
        expect(text).not.toMatch(/elegante/)
    })

    test('el texto deberia tener una longitud de 16 ', () => {
        expect(text).toHaveLength(16)
    })    
})