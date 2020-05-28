import { getDatafromApi } from '../src/promise';

describe('Probando promesas', () => {
    test('la api de ryck and morty deberia retornar caracters', (done) => {
        const url= "https://rickandmortyapi.com/api/character/"
        getDatafromApi(url).then(({data}) => {
            expect(data.results.length).toBeGreaterThan(0);
            done();
        });
    });

    test("Resuelve un Hola!", () => {
        expect(Promise.resolve("hola!")).resolves.toBe("Hola!")
    })

    test("Rechaza un Hola!", () => {
        expect(Promise.reject("hola")).resolves.toBe("Hola!")
    })

    test("Resuelve un Hola", async () => {
        await expect(Promise.resolve("Hola")).resolves.toBe("Hola")
    })
});