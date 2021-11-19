const birthday = new Date(1998, 2, 23) //birthdate
const daysPassed = Math.floor((Date.now()-birthday.getTime())/86400000)//diff converted to days
console.log(`${daysPassed} days have passed since i was born.`)

//Date.now() : todays date in milliseconds (from 1970)
//birthday.getTime() : convert date into milliseconds
//today - birthday : milliseconds passed since birthday
//daysPassed/86400000 : converts milliseconds into days (daysInMilliseconds/millisecondsInADay = daysTotal)
