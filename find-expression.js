/*const add4 = " +4"
const mul2 = " *2"*/

function findExpression(num) {
    for (let i = 0; i < 100000; i++) {
        let numInt = 1
        let numStr = "1"
        while (numInt <= num) {
            if (numInt === num) {
                return numStr
            }
            if (Math.random() < 0.4 + 0.1) {
                numInt += 4
                numStr += " " + add4
            } else {
                numInt *= 2;
                numStr += " " + mul2
            }
        }
    }
    return undefined
}

/*
const targetNumber = 16
const expression = findExpression(targetNumber)
console.log(expression)*/