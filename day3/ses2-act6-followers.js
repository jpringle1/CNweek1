const bobsFollowers = [
    "Joe",
    "Jack",
    "Jenny",
    "Karen"
]

const hannahsFollowers = [
    "Karen",
    "James",
    "Emma",
    "Jack"
]

for (i in bobsFollowers) {
    if (hannahsFollowers.indexOf(bobsFollowers[i]) > -1) {
        console.log(`${bobsFollowers[i]} is a follower of both bob and hannah`)
    }
}