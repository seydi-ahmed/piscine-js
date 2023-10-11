function citiesOnly(arr) {
    return arr.map((i) => i.city)
}

function upperCasingStates(arr) {
    return arr.map((i) =>
        i
            .split(" ")
            .map((word) => {
                return word[0].toUpperCase() + word.slice(1)
            })
            .join(" ")
    )
}

function fahrenheitToCelsius(arr) {
    return arr.map(
        (i) =>
            Math.floor((Number(i.slice(0, -2)) - 32) * (5 / 9)).toString() + "°C")
}

function trimTemp(arr) {
    return arr.map((i) => {
        i.temperature = i.temperature.replaceAll(" ", "")
        return i
    })
}

function tempForecasts(arr) {
    return arr.map((i) => {
        return `${
            Math.floor(
                (Number(i.temperature.slice(0, -2)) - 32) * (5 / 9)
            ).toString() + "°Celsius"
        } in ${i.city}, ${i.state
            .split(" ")
            .map((word) => {
                return word[0].toUpperCase() + word.slice(1);
            })
            .join(" ")}`
    })
}