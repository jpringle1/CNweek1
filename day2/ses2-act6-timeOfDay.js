const time = 1200
const placeOfWork = "Liverpool"
const townOfHome = "Huyton"

switch(true) {
    case time < 0700 || time >= 1700:
        console.log(`i am currently home in ${townOfHome}`)
        break;
    case time >= 0700 && time < 1700:
        console.log(`i am working in ${placeOfWork}`)
        break;
}