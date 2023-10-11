function split(str, sep) {
    if (sep == null) {
        sep = ","
    }

    var result = []
    if (sep == "") {
        for (var i = 0; i < str.length; i++) {
            result.push(str[i])
        }
        return result
    }

    var num = str.indexOf(sep)
    while (num > -1) {
        num = str.indexOf(sep)
        if (num == -1) {
            break
        }
        result.push(str.slice(0, num))
        str = str.slice(num + sep.length)
    }
    result.push(str)
    return result
}

function join(arr, sep) {
    if (sep == null) {
        sep = ","
    }
    var result = arr[0].toString()
    for (var i = 1; i < arr.length; i++) {
        result += sep + arr[i]
    }
    return result
}

/*
const str = "hello, world!, rg , tgtg"
const sep = ","
const arr = split(str, sep)
const str2 = join(arr,sep)
console.log(arr)
console.log(str)*/