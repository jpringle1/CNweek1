let songs = [
  "song 1 - artist 1", 
  "song 2 - artist 2",
  "song 3 - artist 3"
]

songs.push("song 4 - artist 4", "song 5 - artist 5")
songs.pop()
songs.shift()

for (i in songs) {
  console.log(songs[i])
}