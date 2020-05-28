describe("Comparadores comunes", () => {
    const user1 = {
        name: "carlos",
        lastname: "tangarife"
    }
    
    const user2 = {
        name: "carlos",
        lastname: "tangarife"
    }

    const user3 = {
        name: "carlos",
        lastname: "tangarife gil"
    }

    test("igualda de de elementos", () => {
        expect(user1).toEqual(user2);
    });

    test("desigualdad de de elementos", () => {
        expect(user1).not.toEqual(user3);
    });    
})