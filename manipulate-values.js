// Function to filter object values based on a callback
function filterValues(obj, callback) {
    let res = {};
    for (let key in obj) {
        if (callback(obj[key])) {
            res[key] = obj[key];
        }
    }
    return res;
}

// Function to map object values using a callback
function mapValues(obj, callback) {
    let res = {};
    for (let key in obj) {
        res[key] = callback(obj[key]);
    }
    return res;
}

// Function to reduce object values using a callback and an initial accumulator value
function reduceValues(obj, callback, acc) {
    if (acc === undefined) {
        acc = 0;
    }
    for (let key in obj) {
        acc = callback(acc, obj[key]);
    }
    return acc;
}

// Example usage:

// Define an object
const data = {
    a: 2,
    b: 5,
    c: 8,
    d: 3,
};

// Example callback functions

// Callback to filter values greater than 4
const filterCallback = (value) => value > 4;

// Callback to double the values
const mapCallback = (value) => value * 2;

// Callback to sum values
const reduceCallback = (accumulator, value) => accumulator + value;

// Use the functions

// Filter values greater than 4
const filteredData = filterValues(data, filterCallback);
console.log("Filtered Data:", filteredData);

// Map values by doubling them
const mappedData = mapValues(data, mapCallback);
console.log("Mapped Data:", mappedData);

// Reduce values by summing them (starting with an accumulator of 0)
const reducedValue = reduceValues(data, reduceCallback);
console.log("Reduced Value:", reducedValue);
