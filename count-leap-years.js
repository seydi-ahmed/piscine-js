function countLeapYears(date) {
    let years = 0

    for (let i = 1; i < date.getFullYear(); i++) {
        if (i % 4 === 0 && (i % 100 !== 0 || i % 400 === 0)) {
            years++
        }
    }
    return years
}

