let orderCount = 0;

const takeOrder = (topping, sauce) => {
    console.log(`Order ${orderCount}: pizza with ${topping} as a topping and ${sauce} as a sauce.`);
    orderCount++;
}

takeOrder("pineapple", "tomato");
takeOrder("none", "mayonnaise");