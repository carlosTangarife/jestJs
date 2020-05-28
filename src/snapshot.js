export const getCharacter = (data) => {
    const { gender, id, name, species, status } = data;
    return {
        id,
        gender,
        name,
        species,
        status
    }
}