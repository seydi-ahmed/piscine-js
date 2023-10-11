function currify(fn) {
    return function currified(...args) {
        if (args.length >= fn.length) {
            return fn(...args)
        } else {
            return currified.bind(null, ...args)
        }
    }
}


/*const mult2 = (el1, el2) => el1 * el2
console.log(mult2(2, 2)) // result expected 4

const mult2Curried = currify(mult2)

console.log(mult2Curried(2)(2)) // result expected 4*/