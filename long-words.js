function longWords(arr) {
    return arr.every(
        (i) =>
            i.length >= 5
    )
}

function oneLongWord(arr) {
    return arr.some(
        (i) =>
            i.length >= 10
    )
}

function noLongWords(arr) {
    return arr.every(
        (i) =>
            i.length < 7
    )
}