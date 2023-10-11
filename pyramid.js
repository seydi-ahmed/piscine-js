function pyramid(str, num) {
    var result = ""
    let spaces = " ".repeat(str.length)
    for (var i = 1; i <= num; i++) {
        result += spaces.repeat(num - i) + str.repeat(2 * i - 1) + "\n"
    }
    return result.slice(0, -1)
}

console.log(pyramid('{}', 7))