const pet = {
    name : "Jet",
    age : 9,
    type : "Border Collie",
    colour : "Black",

    eat() {
        return `${this.name} is eating`
    },

    drink() {
        return `${this.name} is drinking`;
    }
}


console.log(pet.drink())
