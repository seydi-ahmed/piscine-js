function fold(arr, fn, acc) {
    for (var i = 0; i < arr.length; i++) {
        acc = fn(acc, arr[i], i, arr)
    }
    return acc
}

function foldRight(arr, fn, acc) {
    for (var i = arr.length - 1; i >= 0; i--) {
        acc = fn(acc, arr[i], i, arr)
    }
    return acc
}

function reduce(arr, fn) {
    let acc = arr[0]
    for (var i = 1; i < arr.length; i++) {
        acc = fn(acc, arr[i], i, arr)
    }
    return acc
}

function reduceRight(arr, fn) {
    let acc = arr[arr.length - 1]
    for (var i = arr.length - 2; i >= 0; i--) {
        acc = fn(acc, arr[i], i, arr)
    }
    return acc
}