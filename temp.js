coffeeShop = {
    branch : "Liverpool",
    drinkMenu : [
        ["drink1", 12],
        ["drink2", 24],
        ["drink3", 35],
        ["drink4", 46]
    ],
    foodMenu : [
        ["food1", 12],
        ["food2", 23],
        ["food3", 34],
        ["food4", 45]
    ],

    drinksOrdered() {

    }
    // foodOrdered() {
    //     return ``
    // }
}


objectt = {
    menu : [
        ["drink1", 12],
        ["drink2", 24],
        ["drink3", 35]
    ],

    methodd(order) {
        let bill = []
        for (x in arguments) {
            for (i in this.menu) {
                if(this.menu[i][0] == arguments[x]) {
                    bill.push([arguments[x], this.menu[i][1]])
                }
            }
        }

        for (i in bill) {
            console.log(`${bill[i][0]} || ${bill[i][1]}`)
        }
        }
    }


// coffeeShop.drinksOrdered("drink1")

objectt.methodd("drink1","drink2")
// //method(order) {
//     drink=order
//     price=this.method(index)
// }


