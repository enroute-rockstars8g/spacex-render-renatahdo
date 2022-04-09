export const getPokemons = async() => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon`)
        if(response.status !== 200) return;
        const pokemons = await response.json();
        return pokemons;
    } catch (e) {
        console.log(e);
    }
};

export const getPokemonById = async(name: string) => {
    try {
        let nameFormatted = name.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameFormatted}`)
        if(response.status !== 200) return;
        const pokemon = await response.json();
        return pokemon;
    } catch (e) {
        console.log(e);
    }
};