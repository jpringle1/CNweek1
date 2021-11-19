const birthday = new Date(1998, 2, 23) //birthdate
const birthdayMilli=birthday.getTime() //birthday in milliseconds
const today = Date.now()//todays date in millis
const millisPassed = today-birthdayMilli//diff = todayMilli - bdayMilli
const daysPassed = Math.floor(millisPassed/86400000)//diff converted to days
console.log(`${daysPassed} days have passed since i was born.`)
