import { callBackHell } from '../src/callback-hell';

describe('Probando un callback', () => {
    test('CallbackHell', (done) => {
        function otherCallback(data) {
            expect(data).toBe("Hola Javascripters")
            done();
        };

        callBackHell(otherCallback);
    });
})