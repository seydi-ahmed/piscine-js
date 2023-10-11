// Function to filter object entries based on a filter function
function filterEntries(obj, filter) {
    let res = {};
    for (let key in obj) {
        if (filter([key, obj[key]])) { // Apply the filter function to each entry [key, value]
            res[key] = obj[key]; // If the filter returns true, add the entry to the result object
        }
    }
    return res; // Return the filtered object
}

// Function to map object entries using a mapper function
function mapEntries(entries, mapper) {
    let temp = {};
    for (let key in entries) {
        temp[key] = mapper([key, entries[key]]); // Apply the mapper function to each entry [key, value]
    }
    let res = {};
    for (let key in temp) {
        res[temp[key][0]] = temp[key][1]; // Reconstruct the object with mapped entries
    }
    return res; // Return the mapped object
}

// Function to reduce object entries using a reducer function and an initial value
function reduceEntries(entries, reducer, initialValue) {
    let acc = initialValue; // Initialize the accumulator with the provided initialValue
    for (let key in entries) {
        acc = reducer(acc, [key, entries[key]]); // Apply the reducer function to each entry [key, value]
    }
    return acc; // Return the final reduced value
}

// Example filter function to filter entries with low carbs (explained later)
function lowCarbs(entries) {
    return filterEntries(entries, (entry) => {
        let value = (nutritionDB[entry[0]]["carbs"] / 100) * entry[1];
        return parseInt(value) <= 50;
    });
}

// Example reducer function to calculate the total calories (explained later)
function totalCalories(entries) {
    return Number(
        reduceEntries(
            entries,
            (acc, curr) => {
                let value = (nutritionDB[curr[0]]["calories"] / 100) * curr[1];
                return acc + value;
            },
            0
        ).toFixed(1)
    );
}

// Example function to calculate the total nutritional values based on entries (explained later)
function cartTotal(entries) {
    let res = {};
    for (let key in entries) {
        res[key] = {};
        for (let dbKey in nutritionDB[key]) {
            res[key][dbKey] =
                Math.round(
                    (entries[key] / 100) * nutritionDB[key][dbKey] * 1000
                ) / 1000;
        }
    }
    return res;
}
/*
// Example object containing food entries with quantities
const foodEntries = {
    "apple": 150,
    "banana": 100,
    "chocolate": 50,
    // ...other entries
};

// Example nutrition database (not shown in provided code, but assumed to be defined)
const nutritionDB = {
    "apple": { "carbs": 14, "calories": 52 },
    "banana": { "carbs": 23, "calories": 89 },
    "chocolate": { "carbs": 60, "calories": 546 },
    // ...other food items with nutritional values
};

// Filter food entries with low carbs (<= 50g)
const filteredFood = lowCarbs(foodEntries);

// Calculate the total calories of the filtered food entries
const totalCal = totalCalories(filteredFood);

console.log(filteredFood);
console.log("Total Calories:", totalCal);*/