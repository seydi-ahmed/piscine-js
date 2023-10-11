const circular = {
  circular: null // Initialize circular with a null value
};

// Set the circular property to refer to the circular object itself
circular.circular = circular;

console.log(circular); // This will display the circular object with a circular reference
