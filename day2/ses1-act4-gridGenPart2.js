horiz = `-----------------`
vert = `     |     |       `
grid = [
  `X`,
  `O`,
  'X',
  ' ',
  ' ',
  'X',
  ' ',
  `O`,
  `X`
]

console.log(
  `
${vert}  
  ${grid[0]}  |  ${grid[1]}  |  ${grid[2]}  
${vert}    
${horiz}
${vert}  
  ${grid[3]}  |  ${grid[4]}  |  ${grid[5]}    
${vert}  
${horiz}
${vert}  
  ${grid[6]}  |  ${grid[7]}  |  ${grid[8]}  
${vert}  
  `
)