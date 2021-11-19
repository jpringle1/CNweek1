let balance = 233
const pinStored = 1234

let dispense = (pinInput, withdrawalAmount) => {
    if (pinInput !== pinStored) {
        console.log("You have entered the wrong pin. Try again.")
    } else {
        if (withdrawalAmount > balance) {
            console.log("You do not have enough money to fulfill the request");
        } else {
                balance -= withdrawalAmount
                console.log(`You have successfully withdrawn £${withdrawalAmount}. You now have £${balance}`)
        }
    }   

}

dispense(1234, 24)
dispense(1234, 23)
dispense(1234, 200)
dispense(1232, 24)