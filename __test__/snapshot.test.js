import { getCharacter } from '../src/snapshot';
import rick from '../src/rick.json';

describe('Trabajando con snapshot', ()=> {
    test('snapshot', () => {
        expect(getCharacter(rick)).toMatchSnapshot();
    })

    test('snapshot con excepciones', () => {
        const user = {
            id: Math.floor(Math.random() * 20),
            date: new Date(),
            name: "Carlos",
            lastname: "Tangarife"
        };

        expect(user).toMatchSnapshot();
    })

    test('snapshot sin excepciones', () => {
        const user = {
            id: Math.floor(Math.random() * 20),
            date: new Date(),
            name: "Carlos",
            lastname: "Tangarife"
        };

        expect(user).toMatchSnapshot({
            id: expect.any(Number),
            date: expect.any(Date)
        });
    })
})
