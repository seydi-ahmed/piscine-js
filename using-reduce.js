function adder(arr, value) {
    return arr.reduce(
        (acc, i) => acc + i,
        value === undefined ? 0 : value
    )
}

function sumOrMul(arr, value) {
    return arr.reduce(
        (acc, i) => {
            if (i % 2 === 0) {
                return acc * i
            } else {
                return acc + i
            }
        },
        value === undefined ? 0 : value
    )
}

function funcExec(arr, value) {
    return arr.reduce(
        (acc, i) => {
            if (typeof i === "function") {
                return i(acc, value)
            } else {
                return acc
            }
        },
        value === undefined ? 0 : value
    )
}