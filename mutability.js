// const person = {
//     name: 'Rick',
//     age: 77,
//     country: 'US',
//     obj : {
//         str : 'hello',
//         age : 23
//     }
// };
  
const clone1 = { ...person };
const clone2 = { ...person };
const samePerson = person;
// const samePerson2 = JSON.parse(JSON.stringify(person));

person.age += 1;
person.country = 'FR';