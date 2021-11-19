const num = 15

let output = ``
switch(true) {
  case num % 3 == 0 && num % 5 == 0:
    output = `fizzbuzz`;
      break;
  case num % 3 == 0:
    output = `fizz`;
      break;
  case num % 5 == 0:
    output = `buzz`;
      break;
  default:
    output = num
}

console.log(output)

// removing break does not act as expected (continue to check next condition, then apply block), it instead ignores the condition and executes the block regardless.