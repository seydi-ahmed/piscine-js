function sameAmount(str, rexp1, rexp2) {
    const matchCount = (str.match(new RegExp(rexp1, "g")) || []).length
    const matchCount2 = (str.match(new RegExp(rexp2, "g")) || []).length
    return matchCount === matchCount2
}


  // Example usage:
  const inputString = "Hq qqqqqqqqq"
  const regex1 = /q/g
  const regex2 = /qqqq/g
  
  const result = sameAmount(inputString, regex1, regex2)
  console.log(result) // Output: true, both regex1 and regex2 match "Hello" twice
  