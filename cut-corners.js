function round(num) {
    let neg = false
    if ( num < 0) {
        neg = true
        num = -num
    }

    let taille = 0
    while (!(num < 1 && num > -1)) {
        num -= 1
        taille++
    }

    if (num < 0.5) {
        if (neg) {
            return -taille
        } else {
            return taille
        }
    } else {
        if (neg) {
            return -(taille + 1)
        } else {
            return taille + 1
        }
    }
}

function floor(num) {
    let neg = false
    if (num < 0) {
        neg = true
        num = -num
    }

    let num2 = num
    let taille = 0
    while (!(num2 < 1 && num2 > -1)) {
        num2 -= 1
        taille++
    }
    if (neg) {
        return -taille - 1
    } else {
        return taille
    }
}

function ceil(num) {
    if (!num) return 0
    let neg = false
    if (num < 0) {
        neg = true
        num = -num
    }
    let num2 = num
    let taille = 0
    while (!(num2 < 1 && num2 >= 0)) {
        num2 -= 1
        taille++
    }
    if (neg) {
        return -taille
    } else {
        return taille + 1
    }
}

function trunc(num) {
    let taille = 0
    if (num > 0xfffffffff) {
        num -= 0xfffffffff
        taille += 0xfffffffff
    }

    let neg = false
    if (num < 0) {
        neg = true
        num = -num
    }

    let num2 = num
    while (!(num2 < 1 && num2 > -1)) {
        num2 -= 1
        taille++
    }
    if (neg) {
        return -taille
    }
    return taille
}

/*
const num = -2.7
console.log(round(num))
console.log(ceil(num))
console.log(floor(num))*/