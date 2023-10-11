function addWeek(date) {
    const secondWeek = {
        0: "Monday",
        1: "Tuesday",
        2: "Wednesday",
        3: "Thursday",
        4: "Friday",
        5: "Saturday",
        6: "Sunday",
        7: "secondMonday",
        8: "secondTuesday",
        9: "secondWednesday",
        10: "secondThursday",
        11: "secondFriday",
        12: "secondSaturday",
        13: "secondSunday",
    }
    return secondWeek[((date.getTime() + 62135596800000) / 86400000) % 14]
}

function timeTravel(date) {
    return new Date(date.date.setHours(date.hour, date.minute, date.second))
}

/*
addWeek(new Date('0001-01-01'))
addWeek(new Date('0001-01-02'))
addWeek(new Date('0001-01-07'))
addWeek(new Date('0001-01-08'))
console.log(addWeek(new Date('0001-01-09')))

console.log(timeTravel({
  date: new Date('2020-05-29 23:25:22'),
  hour: 21,
  minute: 22,
  second: 22,
}).toString())*/