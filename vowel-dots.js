const vowels = /[aeiou]/gi
function vowelDots(str) {
    return str.replace(/[aeiou]/gi, function (vow) {
        return vow + "."
    })
}
  
/*
  const inputString = "Hello, World!"
  const dottedString = vowelDots(inputString)
  console.log(dottedString)*/