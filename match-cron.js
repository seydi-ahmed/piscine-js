function matchCron(cronString, date) {
    let cron = {};
    cronString.split(" ").forEach((part, i) => {
        if (part === "*") {
            return
        }
        switch (i) {
            case 0:
                cron.minute = part
                break
            case 1:
                cron.hour = part
                break
            case 2:
                cron.date = part
                break
            case 3:
                cron.month = part
                break
            case 4:
                cron.day = part
                break
        }
    })

    date = {
        minute: date.getMinutes(),
        hour: date.getHours(),
        date: date.getDate(),
        month: date.getMonth() + 1,
        day: date.getDay()
    }

    for (let key in cron) {
        if (cron[key] !== date[key].toString()) {
            return false
        }
    }
    return true
}

const a = matchCron('9 * * * *', new Date('2020-05-30 18:09:00')) // -> true
const b = matchCron('9 * * * *', new Date('2020-05-30 19:09:00')) // -> true
const c = matchCron('9 * * * *', new Date('2020-05-30 19:21:00')) // -> false
//         | | | | |
//         | | | | +- Day of the Week   (range: 1-7, 1 is Monday)
//         | | | +--- Month of the Year (range: 1-12)
//         | | +----- Day of the Month  (range: 1-31)
//         | +------- Hour              (range: 0-23)
//         +--------- Minute            (range: 0-59)

console.log(a,b,c)