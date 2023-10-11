function sunnySunday(inputDate) {
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const referenceDate = new Date(1, 0, 1)
    const daysDifference = Math.floor((inputDate - referenceDate) / (24 * 60 * 60 * 1000))
    const currentDayIndex = (daysDifference % weekdays.length + weekdays.length) % weekdays.length
    return weekdays[currentDayIndex];
}

const inputDate = new Date(2023, 8, 17)
console.log(sunnySunday(inputDate))
