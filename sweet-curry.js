function mult2(a) {
    return (b) => a * b
}

//console.log((mult2(3))(4))

function add3(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

//console.log(((add3(9))(11))(3))

function sub4(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return a - b - c - d
            }
        }
    }
}

//console.log((((sub4(20))(1))(3))(9))