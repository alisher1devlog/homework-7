/*Drink Sorting
You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

Assume that the following array of drink objects needs to be sorted:

Array ichida object bo'lsin objectlarni price bo'yicha sort qiladigan algorithm tuzing!
drinks = [
  {name: "lemonade", price: 50},
  {name: "lime", price: 10}
] 
*/

let drinks = [
  {name: "lemonade", price: 50},
  {name: "lime", price: 10},
  {name: "Coco cola", price: 20}
] 

function sorted(drinks){
  for (let i = 0; i < drinks.length - 1; i++ ){
      for(let j = 0; j < drinks.length - 1 - i ; j++){
          if(drinks[j].price > drinks[j+1].price){
              let kaskad = drinks[j].price;
              drinks[j].price = drinks[j+1].price;
              drinks[j+1].price = kaskad;
          }
      }
  }
  console.log(drinks);
}
sorted(drinks);

// console.log("45" + 50);
