coffeeShop = {
    branch : "Liverpool",
    drinkMenu : [
        ["drink1", 11],
        ["drink2", 22],
        ["drink3", 33]
    ],

    foodMenu : [
        ["food1", 44],
        ["food2", 55],
        ["food3", 66],
        ["food4", 77]
    ],

    ordered(menu, order) {
        let bill = []
        let total =0

        if (menu == "food") {
            menu = this.foodMenu;
        } else if (menu == "drink") {
            menu = this.drinkMenu;
        } else {
            console.log(`${menu} is not a valid menu. try again.`)
            return;
        }

        for (x in order) {
            for (i in menu) {
                if(menu[i][0] == order[x]) {
                    bill.push([order[x], menu[i][1]])//add name and price of ordered items to bill
                    total += menu[i][1]
                }
            }
        }
        
        for (i in bill) {  //list bill
            console.log(`${bill[i][0]} || £${bill[i][1]}`)
        }

        console.log(`you spent a total of £${total}`) //list total price of order
        }
    }

coffeeShop.ordered(menu="food", order=["food4", "food1", "food2"])