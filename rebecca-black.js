function isFriday(date) {
    var result = new Date(date).getDay()
    if (result == 5){
        return true
    }
    return false
}

function isWeekend(date) {
    var result = new Date(date).getDay()
    if (result === 0 || result === 6){
        return true
    }
    return false
}

function isLeapYear(date) {
    var result = new Date(date).getFullYear()
    if ((result % 4 === 0 && result % 100 !== 0) || result % 400 === 0){
        return true
    }
    return false
}

function isLastDayOfMonth(date) {
    var result = new Date(date)
    if (new Date(result.getFullYear(), result.getMonth() + 1, 0).getDate() === result.getDate()){
        return true
    }
    return false
}