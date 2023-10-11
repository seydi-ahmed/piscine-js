function slice(args, start, end) {
    if (end === undefined) {
        end = args.length
    }
    let result
    if (start < 0) {
        start = args.length + start
    }
    if (end < 0) {
        end = args.length + end
    }

    if (typeof args === "string") {
        result = ""
        for (let i = start; i < end; i++) {
            result += args[i]
        }
    }

    if (Array.isArray(args)) {
        result = []
        for (let i = start; i < end; i++) {
            result.push(args[i])
        }
    }
    return result
}

/*
args = "hello how are you?"
start = 2
end = 6
console.log(slice('abcdef', 2))*/