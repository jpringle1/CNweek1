const text = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"

const vowels = [
    "a",
    "e",
    "i",
    "o",
    "u"
]

let n = -1
let textIndex

for (i in vowels) {
    textIndex=text.length-text.split(``).reverse().indexOf(vowels[i])
    if (textIndex > n){
        n = textIndex
    }
}

console.log(n)