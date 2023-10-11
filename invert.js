function invert(obj) {
  const inverted = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      inverted[obj[key]] = key;
    }
  }

  return inverted;
}

// Example usage:
const original = { a: 'apple', b: 'banana', c: 'cherry' };
const invertedObj = invert(original);
console.log(invertedObj);
