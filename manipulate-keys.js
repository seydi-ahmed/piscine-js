// Function to filter object keys based on a predicate
function filterKeys(obj, predicate) {
    return Object.keys(obj) // Get an array of the object's keys
        .filter(predicate) // Use the Array.filter method to keep keys that satisfy the predicate
        .reduce((res, key) => { // Use Array.reduce to construct a new object with the filtered keys
            res[key] = obj[key]; // Add the key and its corresponding value to the result object
            return res; // Return the result object
        }, {});
}

// Function to map object keys using a callback
function mapKeys(obj, callback) {
    return Object.keys(obj) // Get an array of the object's keys
        .map(callback) // Use the Array.map method to transform each key using the callback
        .reduce((res, key, i) => { // Use Array.reduce to construct a new object with the mapped keys
            res[key] = obj[Object.keys(obj)[i]]; // Add the mapped key and its corresponding value to the result object
            return res; // Return the result object
        }, {});
}

// Function to reduce object keys using a callback and an initial value
function reduceKeys(obj, callback, initialValue) {
    let undef = false; // Initialize a variable to track if initialValue is undefined
    if (initialValue === undefined) { // Check if initialValue is undefined
        initialValue = ""; // Set initialValue to an empty string
        undef = true; // Update the undef variable to indicate that initialValue was undefined
    }
    let res = Object.keys(obj).reduce((acc, curr) => { // Use Array.reduce to accumulate a value based on keys
        return callback(acc, curr, initialValue); // Call the provided callback with the accumulator, current key, and initialValue
    }, initialValue); // Initialize the accumulator with the provided or empty initialValue

    // Handle some specific cases
    if (typeof res !== "number") { // Check if the result is not a number (for special handling)
        if (res.slice(0, 2) === ", ") res = res.slice(2); // Remove leading ", " if present
        if (undef && res[0] === ":") res = res.slice(1); // Remove leading ":" if present and initialValue was undefined
    }
    return res; // Return the final reduced value
}

// Example usage: (explained in the previous response)


// Define an object
const data = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    country: "USA",
};

// Example predicate function to filter keys starting with "f"
const filterPredicate = (key) => key.startsWith("f");

// Example callback function to map keys to uppercase
const mapCallback = (key) => key.toUpperCase();

// Example callback function to concatenate keys with a separator ":"
const reduceCallback = (acc, key, initialValue) => `${acc}${initialValue}${key}`;

// Use the functions

// Filter keys starting with "f"
const filteredKeys = filterKeys(data, filterPredicate);
console.log("Filtered Keys:", filteredKeys);

// Map keys to uppercase
const mappedKeys = mapKeys(data, mapCallback);
console.log("Mapped Keys:", mappedKeys);

// Reduce keys by concatenating with ":" as separator
const reducedValue = reduceKeys(data, reduceCallback, ":");
console.log("Reduced Value:", reducedValue);
