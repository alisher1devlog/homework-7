/*ES6: Destructuring Objects X
Given an array of user objects.
function yarating u arraychida object berilsin o'sha objectdagi userlarning namelarini array qilib qaytarilsin
let names = []
let users = [
  { name: "John", email: "john@example.com" },
  { name: "Jason", email: "jason@example.com" },
  { name: "Jeremy", email: "jeremy@example.com" },
  { name: "Jacob", email: "jacob@example.com" }
]
for( add code inside these parenthesis only ) {
      names.push(name)
}
console.log(names) // should log ["John", "Jason", "Jeremy", "Jacob"] */


let users = [
    { name: "John", email: "john@example.com" },
    { name: "Jason", email: "jason@example.com" },
    { name: "Jeremy", email: "jeremy@example.com" },
    { name: "Jacob", email: "jacob@example.com" }
]

function returnName(users) {
    let names = [];
    for (let i of users ) {
        names.push(i.name);
    }
    return names;
}

console.log(returnName(users));
