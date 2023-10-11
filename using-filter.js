function filterShortStateName(arr) {
    return arr.filter(
        (i) =>
            i.length < 7
    )
}

function filterStartVowel(arr) {
    return arr.filter(
        (j) =>
            /^[aeiou]/i.test(j)
    )
}

function filter5Vowels(arr) {
    return arr.filter(
        (i) =>
            i.match(/[aeiou]/gi).length >= 5
    )
}

function filter1DistinctVowel(arr) {
    return arr.filter(
        (i) =>
            new Set(i.toLowerCase().match(/[aeiou]/gi)).size === 1
    )
}

function multiFilter(arr) {
    arr = arr.filter(
        (i) => {
            let capital = i.capital.length >= 8
            let name = !/^[aeiou]/i.test(i.name)
            let tag = /[aeiou]/i.test(i.tag)
            let region = i.region !== "South"
            return capital && name && tag && region
        }
    )
    return arr
}