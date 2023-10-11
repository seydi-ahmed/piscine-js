Date.prototype.month = Date.prototype.getMonth;
Date.prototype.day = Date.prototype.getDay;
Date.prototype.year = Date.prototype.getFullYear;
Date.prototype.date = Date.prototype.getDate;
Date.prototype.hours = Date.prototype.getHours;

function format(date, f) {
    // Create a new Date object from the input date
    const d = new Date(date);
    
    // Arrays to store month and day names
    const lM = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];
    const sM = lM.map((m) => m.slice(0, 3)); // Short month names
    const lD = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    const sD = lD.map((d) => d.slice(0, 3)); // Short day names

    // Day
    f = f.replace(/dd/g, ("0" + d.date()).slice(-2)); // Replace 'dd' with zero-padded day
    f = f.replace(/d/g, d.date()); // Replace 'd' with day

    // Hour
    f = f.replace(/HH/g, ("0" + d.hours()).slice(-2)); // Replace 'HH' with zero-padded hour
    f = f.replace(/H/g, d.hours()); // Replace 'H' with hour
    f = f.replace(/hh/g, ("0" + (d.hours() % 12 || 12)).slice(-2)); // Replace 'hh' with zero-padded 12-hour format hour
    f = f.replace(/h/g, d.hours() % 12 || 12); // Replace 'h' with 12-hour format hour

    // Minute
    f = f.replace(/mm/g, ("0" + d.getMinutes()).slice(-2)); // Replace 'mm' with zero-padded minute
    f = f.replace(/m/g, d.getMinutes()); // Replace 'm' with minute

    // Second
    f = f.replace(/ss/g, ("0" + d.getSeconds()).slice(-2)); // Replace 'ss' with zero-padded second
    f = f.replace(/s/g, d.getSeconds()); // Replace 's' with second

    // Era (AD/BC)
    f = f.replace(/GGGG/g, d.year() < 0 ? "Before Christ" : "Anno Domini"); // Replace 'GGGG' with era
    f = f.replace(/G/g, d.year() < 0 ? "BC" : "AD"); // Replace 'G' with era abbreviation

    // Year
    if (d.year() < 0) d.setFullYear(-d.year()); // Make sure year is positive
    f = f.replace(/yyyy/g, d.year().toString().padStart(4, "0")); // Replace 'yyyy' with 4-digit year
    f = f.replace(/y/g, d.year().toString().replace(/^0+/, "")); // Replace 'y' with year

    // AM/PM
    f = f.replace(/a/g, d.hours() < 12 ? "AM" : "PM"); // Replace 'a' with AM/PM

    // Month
    f = f.replace(/(?<!M)MM(?!M)/g, (d.month() + 1).toString().padStart(2, "0")); // Replace 'MM' with zero-padded month
    f = f.replace(/(?<!(M|P|A))M(?!M)/g, d.month() + 1); // Replace 'M' with month
    f = f.replace(/MMMM/g, lM[d.month()]); // Replace 'MMMM' with full month name
    f = f.replace(/MMM/g, sM[d.month()].slice(0, 3)); // Replace 'MMM' with short month name (3 characters)

    // Day of the Week
    f = f.replace(/EEEE/g, lD[d.getDay()]); // Replace 'EEEE' with full day name
    f = f.replace(/E/g, sD[d.getDay()].slice(0, 3)); // Replace 'E' with short day name (3 characters)

    return f; // Return the formatted string
}
