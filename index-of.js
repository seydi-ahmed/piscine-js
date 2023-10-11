function indexOf(arr, value, ind) {
    for (var i = ind || 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}

function lastIndexOf(arr, value, ind) {
    for (var i = ind || arr.length - 1; i >= 0; i--) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}

function includes(arr, value, ind) {
    return indexOf(arr, value, ind) !== -1;
}

/*
arr = [1,2,4,5,5,5,4,3]
value = 4
console.log(indexOf(arr, value, 0))
console.log(lastIndexOf(arr, value, 1))
console.log(includes(arr, value, 2))*/