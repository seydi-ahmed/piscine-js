function flat(arr, num) {
    if (!Array.isArray(arr)) {
        return arr
    }
    if (num === 0) {
        return arr
    }
    if (num === undefined) {
        num = 1
    }
    return arr.reduce(
        (acc, cur) => {
            return acc.concat(flat(cur, num - 1))
        },
        []
    )
}


const nestedArray = [1, [2, 3], [4, [5, 6]]]
console.log(flat(nestedArray, 2)) // Résultat : [1, 2, 3, 4, [5, 6]]
