let notification = {
    weekendAlarm : "no alarm needed",
    weekdayAlarm : "get up at 7am"
}

const day = "Sunday"
let alarm

if (day == "Saturday" || day == "Sunday") {
    alarm = notification.weekendAlarm;
} else {
    alarm = notification.weekdayAlarm;
}

console.log(alarm)

// objects are "mutable". aka, we can change what's inside after we've made them, even when an object has been defined with const

// if a function is in an object, it is called a method.