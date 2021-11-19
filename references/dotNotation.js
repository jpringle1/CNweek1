
// Methods
    //Misc
    "string or number".split(``).reverse().indexOf(1) //by chaining multiple methods, i can perform multiple operations on one line
    
    //String

    //Array
        "string".split(``) //splits string or numbers into an array
        array.reverse() //reverses array
        array.indexOf(i) //finds item within array
        array.push("item") //append item to array
        array.pop() //removes last item in array
        array.shift() //removes first item from array

    // Math
        Math.random() //random number between 0 and 1
        Math.random()*10 //random number between 0 and 10
        Math.round() //round number
        Math.round(math.random()*10) //random integer between 0 and 10
        Math.ceil //round down
        Math.floor //round up
        Math.sign(-2) //returns 1 if postitive, 0 if negative

    // Dates
        new Date(year, month, day) // creates day in computer format (almost unusable)
        getTime(new Date(year, month, day)) //converts date into milliseconds
        Date.now() //todays date in milliseconds

    // Console logs
        console.log(`My age is ${i}`) // template literal : call variable within string, "Dynamically inject variables/JS into strings"
        console.log("my favourite drink is " + var1) //concatenation
        console.log("hello world"); //prints text to console
        console.log("hello".toUpperCase); //makes printed string upper case

// Variables
    let var1; //declares variable without value. AKA doesn't "initialise"
    var1 = 2; //assignes value to variable (initialises) without using let/without declaring it again (if it has been previously declared)
    let var1 = 2; //declares and initialises variable with value
    const var1 = 2; //declares variable which CANNOT BE CHANGED LATER. use when you can
    var var1 = 2; //old and outdated method of declaring variable. var, unlike let, does not allow "hoisting", as hoisting variables can be confusing and result in errors (hoisting is just declaring a variable after it has already been initialised). Let also throws errors when trying to declare an already declared variable.

// Functions
    let functionEx = (parameter) => { //Declare a function with parameters
        globalVar++;
        return parameter1
    }

    functionEx(argument) //Execute function with arguments

    function test(name, age, colour) { //OUTDATED FUNCTION DEFINITION
        console.log(`my name is ${name}, my age is ${age}, favourite colour is ${colour}`)
    }

// Objects
    Object() //create new object, wrapper for given value    
    let object = {name : 'spot', breed : 'dog'} //creates an object (think of python dictionaries: each object has attributes and names you can use to call that attribute)
    object.name //call an attribute of an object

//Loops
    // For

        // Basic Usage
            for (let i = 0 /*set variable of increment*/; i < 10 /*Do while i < 10*/; i++ /* increment i at the end of each loop*/) {
            //loop contents
                break //forcefully ends loop
            }

        // loop through every item in array
            for (i in array) {
                console.log(array[i])
            }

    // While : very similar to for, but used only when number of iterations isn't known. 
        while (i < 5) {
            console.log(`while loop = ${i}`)
            i++;
        } 

    // Do While : executes statement until condition = false. Statement executes at least once.
        do {
            console.log(`do loop = ${i}`)
            i++
        } while (i < 5);

//Comparisons
    // If
        if (i == 1 && x < 2) {
            //statement content
        } else if (true /*or 1 or -1*/) {
            //statement content
        } else {
            //statement block
        }



    // Switch
        switch(x) { //if x == y, if x == z, etc
            case y:
                //code here
                break;
            case z:
                //code here
                break;
            default: //like else
                //code here
        }
        
        switch(true) { //if x == y, if x == z, etc
            case x == y:
                //code here
                break;
            case z == a:
                //code here
                break;
            default: //like else
                //code here
        }

// Arrays
    let array = [1,2,3,4,5] //declare simple array
    grid[1] //specified item in array

// truthy and falsy
    //some values are considered by their nature true or false. 
    // false
        // ("")
        // (0)
        // (false)
    //true
        // (" ")
        // (1)
        // (-1)
        // (true)

//arithmetic operators
    // + : addition
    // - : subtraction
    // / : division
    // * : multiplication
    // % : remainder/modulus
    // ** : exponentiation : x to the power of y
    // ++ : increment
    // -- : decrement

//Relational operators
    // < : less than
    // > : greater than
    // <= : less than or equal to 
    // >= : greater than or equal operator
    
//Equality operators : similar to relational, but are boolean based
    // == : equal to 
    // === : strict equal to (javascript doesn't assume things for you. 1 <> "1")
    // != : not equal to
    // !== : strict not equal

//Logical operators
    // && : AND
    // || : OR  
    // ?? : Nullish Coalescing

//Bitwise shift operators
    // << : left shift
    // >> : right shift
    // >>> : unsigned right shift

//Conditional operator : quick way to return value based on condition
    (condition ? ifTru :ifFalse)

//Assignment operators
    // = : Assignment operator
    // *= : Multiplication operator
    // **= : Exponentiation assingment : raises value of variable to power of operand
    // /= : Division assignment
    // &= : Remainder assignment
    // += : Addition assignment
    // -= : Subtraction assignment
    // <<= : Left shift assignment
    // >>= : Right shift assignment
    // >>>= : Unsigned right shift assignment
    // &= : bitwise AND assignment
    // ^= : Bitwise XOR assignment
    // |= : Bitwise OR assignment 
    // &&= : Logical AND assignment
    // ||= : Logical OR assignment
    // ??= : Logical nullish assignment