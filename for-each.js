function forEach(arr, action) {
    for (let i = 0; i < arr.length; i++) {
        action(arr[i], i, arr)
    }
}