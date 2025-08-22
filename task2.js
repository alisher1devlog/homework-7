/*Convert Key, Values in an Object to Array
Write a function that converts an object into an array of keys and values.

objectToArray Function object olsin va o'sha objectni array ko'rinishida qaytarib bersin!.

Examples
objectToArray({
  D: 1,
  B: 2,
  C: 3
}) ➞ [["D", 1], ["B", 2], ["C", 3]]

objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]] */

let objects = {
  likes: 2,
  dislikes: 3,
  followers: 10
}

function objectToArray(objects){
    let arr = [];
    for(let key in objects){
        arr.push([key,objects[key]]);
    }
    return arr;
}

console.log(objectToArray(objects));


