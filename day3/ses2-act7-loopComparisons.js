//do while : executes statement until condition = false. Statement executes at least once.

let i = 0;

do {
    console.log(`do loop = ${i}`)
    i++
} while (i < 5);

//for : checks condition, executes statement if true. Requires known number of iterations.
for (let i = 0 ; i < 5; i++ ) {
    console.log(`for loop = ${i}`)
}
   
//while : very similar to for, but used only when number of iterations isn't known. 
i = 0;

while (i < 5) {
    console.log(`while loop = ${i}`)
    i++;
} 