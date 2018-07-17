class Pokemon {
    constructor(hp, attack, defense, abilities) {
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.abilities = abilities;
    }
}

class Trainer {
    //name is trainer name
    //Pokemon container object is an array
    constructor(originalTrainer) {
        this.originalTrainer = originalTrainer;
        this.pokemonTeam = [];
    }
    all() {
        return this.pokemonTeam;
    }
    get(name) {
        //check this!!
        return this.pokemonTeam.find((element) => {
            return element.name == name;
        })
    }
    add(pokemonObject) {
        this.pokemonTeam.push(pokemonObject);
    }
}

//Lapras PokeAPI Link:
// https://pokeapi.co/api/v2/pokemon/131/
axios.get("https://pokeapi-nycda.firebaseio.com/pokemon/131.json").then((response) => {
    let data = response.data;
    console.log(data)

    console.log(data.abilities)
    let lapras = new Pokemon(
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
        data.abilities.forEach(element => {
            
        }),
    )
})

//Latias PokeAPI Link:
//https://pokeapi.co/api/v2/pokemon/380/
axios.get("https://pokeapi-nycda.firebaseio.com/pokemon/380.json").then((response) => {
    let data = response.data;
    console.log(data)

    let lapras = new Pokemon(
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
        data.abilities.forEach(element => {
            
        }),
    )
})


//Lucario PokeAPI Link:
//https://pokeapi.co/api/v2/pokemon/448/
axios.get("https://pokeapi-nycda.firebaseio.com/pokemon/448.json").then((response) => {
    let data = response.data;
    console.log(data)

    let lapras = new Pokemon(
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
        data.abilities.forEach(element => {
            
        }),
    )
})