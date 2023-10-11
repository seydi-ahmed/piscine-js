function letterSpaceNumber(str) {
    const regex = /([a-zA-Z]) (\d)(?![\d])\b/g
    const matches = str.match(regex) || []
    
    return matches
}
  
  

/*console.log(letterSpaceNumber('example 1, example 20'))*/
// output: ['e 1']