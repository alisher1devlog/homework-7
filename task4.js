/*Ageing the Population...
Given an object of people and their ages, return how old the people would be after n years have passed. Use the absolute value of n.

afterNYears function yarating people deb nomlanagan object va n year ni kiritilsin n kiritilganda objectdagi hamma qiymatlar n yerga ortishi kerak!.

Examples
afterNYears({
  "Joel" : 32,
  "Fred" : 44,
  "Reginald" : 65,
  "Susan" : 33,
  "Julian" : 13
}, 1) ➞ {
  "Joel" : 33,
  "Fred" : 45,
  "Reginald" : 66,
  "Susan" : 34,
  "Julian" : 14
}

afterNYears({
  "Baby" : 2,
  "Child" : 8,
  "Teenager" : 15,
  "Adult" : 25,
  "Elderly" : 71
}, 19) ➞ {
  "Baby" : 21,
  "Child" : 27,
  "Teenager" : 34,
  "Adult" : 44,
  "Elderly" : 90
}

afterNYears({
  "Genie" : 1000,
  "Joe" : 40
}, 5) ➞ {
  "Genie" : 1005,
  "Joe" : 45
} */

let  people = {
  "Joel" : 32,
  "Fred" : 44,
  "Reginald" : 65,
  "Susan" : 33,
  "Julian" : 13
};
let n = 1;

function afterNYears(people, n) {
  let updated = {};
  let years = Math.abs(n); 

  for (let person in people) {
    updated[person] = people[person] + years;
  }

  return updated;
}

console.log(afterNYears(people,n));

