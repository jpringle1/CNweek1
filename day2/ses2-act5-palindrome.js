const num = `2020`

if(num == num.split(``).reverse().join(``)) {
    console.log(`${num} is a palindrome`)
} else {
    console.log(`${num} is not a palindrome`)
}