let name = "Joe"
let age = "23"
let favColour = "red"

function sentence(name2=name, age2=age, favColour2=favColour) {
  console.log(`My name is ${name2}. I am ${age2} years old, and my favourite colour is ${favColour2}.`)
}

sentence()

name = "Tom"
age = "19"
favColour = "green"

sentence()