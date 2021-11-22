const password = `momkeeeey`
const num = 30

if (password.length <= 8) {
  console.log(`the password is too short, try again.`)
} else {
  console.log(`password is ${password}`)
}     

if (num % 3 == 0 || num % 5 == 0) {
  console.log(`number is divisible by 3 or 5`)
} else {
  console.log(`number is not divisible by 3 or 5`)
}