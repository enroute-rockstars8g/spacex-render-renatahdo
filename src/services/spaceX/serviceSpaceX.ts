export const getRockets = async() => {
    try {
        const response = await fetch(`https://api.spacexdata.com/v3/rockets`)
        if(response.status !== 200) return;
        const rockets = await response.json();
        return rockets;
    } catch (e) {
        console.log(e);
    }
};

export const getRocketById = async(name: string) => {
    try {
        let nameFormatted = name.toLowerCase();
        const response = await fetch(`https://api.spacexdata.com/v3/rockets/${nameFormatted}`)
        if(response.status !== 200) return;
        const rocket = await response.json();
        return rocket;
    } catch (e) {
        console.log(e);
    }
};

export const getRocketIdByPokemon = (pokemon: any) => {
    try {
        const { name } = pokemon;
        if (name.startsWith("a") || name.startsWith("e") || name.startsWith("i") || name.startsWith("m") || 
        name.startsWith("q") || name.startsWith("u") || name.startsWith("x")){
            return "falcon1"
        } else if (name.startsWith("b") || name.startsWith("f") || name.startsWith("j") || name.startsWith("n") || 
        name.startsWith("n") || name.startsWith("v") || name.startsWith("y")){
            return "falcon9"
        } else if (name.startsWith("c") || name.startsWith("g") || name.startsWith("k") || name.startsWith("o") || 
        name.startsWith("s") || name.startsWith("w") || name.startsWith("z")){
            return "starship"
        } else {
            return "falconheavy"
        }
    } catch (e) {
        console.log(e);
        return "";
    }
};