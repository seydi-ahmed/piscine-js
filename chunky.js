function chunk(arr, size){
    if (size < 2){
        return arr
    }
    if (size > arr.lenght){
        return arr
    }
    var tab = []
    if (arr.length%size == 0){
        for (let i = 0; i < arr.length; i+=size) {
            var tabi = []
            for (let j = i; j < i+size; j++) {
                tabi.push(arr[j])
            }
            tab.push(tabi)
        }
        return tab
    }
    else{
        var restant = (arr.length%size)*size
        for (let i = 0; i < restant; i+=size) {
            var tabi = []
            for (let j = i; j < i+size; j++) {
                tabi.push(arr[j])
            }
            tab.push(tabi)
        }
        var fin = arr.length - (arr.length-restant)
        var tabi = []
        for (let i = fin; i < arr.length; i++) {
            tabi.push(arr[i])
        }
        tab.push(tabi)
        return tab
    }
}

/*
var tab = [1,2,3,4,5,6,7,8,9,10,11,12]
console.log(chunk(tab, 5))*/

/*
function chunk(arr, size) {
    var result = [];
    for (var i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}*/