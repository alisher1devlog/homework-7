/*6 . Repeating Letters
Create a function that takes a string and returns a string in which each character is repeated once.
Examples
doubleChar("String") ➞ "SSttrriinngg"
doubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"
doubleChar("1234!_ ") ➞ "11223344!!__  " */

let input = "String";

function doubleChar(input){
    let newStr = ""
    for(let i of input){
        newStr = newStr + i + i;
    }
    return newStr;
}
console.log(doubleChar(input));
