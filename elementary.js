function multiply(a,b){
    var result = 0
    var bb = false
    if (b < 0){
        b = -b
        bb = true
    }
    for (var i = 0; i < b; i++){
        result += a
    }
    if (bb == false){
        return result
    }else{
        return -result
    }
}

function divide(a,b){
    var result = 0
    if (b == 0){
        return 0
    }
    if (a == 0){
        return 0
    }
    var aa = false
    if (a < 0){
        a = -a
        aa = true
    }
    var bb = false
    if (b < 0){
        b = -b
        bb = true
    }
    while (a >= b){
        a -= b
        result += 1
    }
    if (aa == true){
        result = -result
    }
    if (bb == false){
        return result
    }else{
        return -result
    }
}

function modulo(a,b){
    if (a == 0 || b == 0){
        return 0
    }
    var res1 = divide(a,b)
    return a - (multiply(res1,b))
}

/*
a = -123
b = 22

console.log(multiply(a,b))
console.log(divide(a,b))
console.log(modulo(a,b))*/