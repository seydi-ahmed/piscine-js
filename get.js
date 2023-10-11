function get(src, path) {
    return path.split(".").reduce(
        function (obj, key) {
            if (obj === undefined) {
                return undefined
            }
            return obj[key]
        },
        src
    )
}

const src = {nested: {key: 'peekaboo'}}
const path = 'nested.key'
console.log(get(src, path))