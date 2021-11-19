// write out some key value pairs
// what are key value pairs
//objects contain multiple key : value pairs

let offer = "none";
let time = 1200;

const cafe = {
    name: "whitesheep",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks: [
        "drink1",
        "drink2",
        "drink3",
        "drink4"
    ],

    breakfastOffer: "Free croissant with coffee",
    lunchOffer: "free egg",
    noOffer: "You get NOTHING. FULL PRICE FOR YOU.",

    openCafe() {
        if (this.hasSpecialOffers) {
            return "time for a special offer";
        }
    },

    closedCafe() {
        return "we are closed GO AWAY";
    }
};

console.log(cafe.openCafe())