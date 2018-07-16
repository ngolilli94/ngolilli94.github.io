class Pokemon{
 constructor(hp, attack, defense, abilities) {
     this.hp = hp;
     this.attack = attack;
     this.defense = defense;
     this.abilities = abilities;
 }   
}

class Trainer{
    //name is trainer name
    //Pokemon container object is an array
    constructor(originalTrainer){
        this.originalTrainer = originalTrainer;
        this.pokemonTeam = [];
    }
    all(){
        return this.pokemonTeam;
    }
    get(name){
        //check this!!
        return this.pokemonTeam.find( (element) => {
            return element.name == name;
        })
    }
    add(pokemonObject){
        this.pokemonTeam.push(pokemonObject);
    }

}