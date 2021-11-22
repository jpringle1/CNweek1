let coffeeIsGrinding = false;

const pressGrindBeans = () => {
    if (coffeeIsGrinding) {
        console.log("stopping the grind");
        coffeeIsGrinding= false ;
    } else {
        console.log("grinding is about to begin");
        coffeeIsGrinding = true;
        return 2
    }
}

pressGrindBeans();
pressGrindBeans();

// functions take parameters and arguments. They are NOT THE SAME. they are parameters when you're DECLARING them, and passing in arguments when you're EXECUTING them
// parameters : function(parameter1, parameter2)