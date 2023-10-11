function every(arr, fn) {
    for (var i = 0; i < arr.length; i++) {
        if (!fn(arr[i])) return false
    }
    return true
}

function some(arr, fn) {
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i])) return true
    }
    return false
}

function none(array, fn) {
    if (!some(array, fn)){
        return true
    }
    return false
}