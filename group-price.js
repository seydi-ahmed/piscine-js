function groupPrice(str) {
    let prix = str.match(/(([A-Z]{3})|\$)([0-9]+\.[0-9]+)/g)
    let result = []

    if (prix === null) return result

    prix.forEach((prix, index) => {
        result.push([prix])
        result[index].push(prix.match(/[0-9]+/g)[0])
        result[index].push(prix.match(/[0-9]+/g)[1])
    })
    return result
}


/*const inputString = "The price of the cereals is $4.00.";
const prices = groupPrice(inputString);
console.log(prices);*/