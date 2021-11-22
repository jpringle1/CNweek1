const topping = `pineapple`
const favourites = [`cheese`, `tomato sauce`]
const excluded = [`pineapple`, `pepperoni`]

switch(true) {
  case favourites.indexOf(topping) >= 0:
    console.log(`${topping} is an essential ingredient.`)
      break;
  case excluded.indexOf(topping) >= 0:
    console.log(`if you put ${topping} on my pizza i will cut the breaks of your car.`)
      break;
  default:
    console.log(`i have no opinion on ${topping}`)
      break;
}