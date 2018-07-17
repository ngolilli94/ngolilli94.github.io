class Pokemon {
    constructor(name, hp, attack, defense, abilities) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.abilities = [];
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

let elle = new Trainer()

//Lapras PokeAPI Link:
// https://pokeapi.co/api/v2/pokemon/131/
axios.get("https://pokeapi-nycda.firebaseio.com/pokemon/131.json").then((response) => {
    let data = response.data;
    // console.log(data)
    // let abilitiesArray = data.abilities.length

    // for (let i = 0; i < abilitiesArray; i++) {
    //     let abilitiesName = data.abilities[i].ability.name
    //     console.log(abilitiesName)
    // }

    // console.log(abilitiesArray)

    let lapras = new Pokemon(
        data.name,
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
        data.abilities.forEach(element => {
            return element.ability.name;
        }),
    )

    elle.add(lapras)
})

console.log(elle)

//Latias PokeAPI Link:
//https://pokeapi.co/api/v2/pokemon/380/
axios.get("https://pokeapi-nycda.firebaseio.com/pokemon/380.json").then((response) => {
    let data = response.data;

    let latias = new Pokemon(
        data.name,
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
        data.abilities.forEach(element => {
            return element.ability.name;
        }),
    )

    elle.add(latias)
})


//Lucario PokeAPI Link:
//https://pokeapi.co/api/v2/pokemon/448/
axios.get("https://pokeapi-nycda.firebaseio.com/pokemon/448.json").then((response) => {
    let data = response.data;

    let lucario = new Pokemon(
        data.name,
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
        data.abilities.forEach(element => {
            return element.ability.name;
        }),
    )
    elle.add(lucario)
})

