class Pokemon {
    constructor(name, hp, attack, defense, abilities) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.abilities = abilities;
    }
}

class Trainer {
    //name is trainer name
    //Pokemon container object is an array
    constructor(pokemonTeam) {
        this.pokemonTeam = [];
    }
    all() {
        return this.pokemonTeam;
    }
    get(name) {
        return this.pokemonTeam.find((element) => {
            return element.name == name;
        })
    }
    add(pokemonObject) {
        this.pokemonTeam.push(pokemonObject);
    }
}

let elle = new Trainer()

//Lapras PokeAPI Links:
//https://pokeapi-nycda.firebaseio.com/pokemon/131.json
// https://pokeapi.co/api/v2/pokemon/131/
axios.get("https://pokeapi.co/api/v2/pokemon/131/").then((response) => {
    let data = response.data;
    // console.log(data)
    // let abilitiesArray = data.abilities.length

    // for (let i = 0; i < abilitiesArray; i++) {
    //     let abilitiesName = data.abilities[i].ability.name
    //     console.log(abilitiesName)
    // }

    // console.log(abilitiesArray)

    let abilitiesList = []

    data.abilities.forEach(element => {
        let abilitiesName = element.ability.name;
        abilitiesList.push(abilitiesName);
    })

    let lapras = new Pokemon(
        data.name,
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
        abilitiesList

    )

    elle.add(lapras)
    // console.log(lapras)
})

console.log(elle)

//Latias PokeAPI Links:
//https://pokeapi-nycda.firebaseio.com/pokemon/380.json
//https://pokeapi.co/api/v2/pokemon/380/
axios.get("https://pokeapi.co/api/v2/pokemon/380/").then((response) => {
    let data = response.data;

    let abilitiesList = []

    data.abilities.forEach(element => {
        let abilitiesName = element.ability.name;
        abilitiesList.push(abilitiesName);
    })

    let latias = new Pokemon(
        data.name,
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
        abilitiesList,
    )

    elle.add(latias)
    // console.log(latias)
})


//Lucario PokeAPI Links:
// https://pokeapi-nycda.firebaseio.com/pokemon/448.json
//https://pokeapi.co/api/v2/pokemon/448/
axios.get("https://pokeapi.co/api/v2/pokemon/448/").then((response) => {
    let data = response.data;

    let abilitiesList = []

    data.abilities.forEach(element => {
        let abilitiesName = element.ability.name;
        abilitiesList.push(abilitiesName);
    })

    let lucario = new Pokemon(
        data.name,
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
        abilitiesList,
    )
    elle.add(lucario)
    // console.log(lucario)
})

