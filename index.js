// const person = {
//     name: "Alice",
//     age: 30,
//     email:"yondoshaliyev77@gmail.com",
// };

// const {name, age} = person;
// console.log(name);
// console.log(age);

// const {name, ...rest} = person;
// console.log(name);
// console.log(rest);



// function callMeWhenPizzaReady(){
//     console.log("Halo, pizza tayyor bo'ldi. Keling, olib ketishingiz mumkin!");
// }

// function orderPizza(callback){
//     console.log("Pitsa buyurtma wilindi. Pishirish jarayoni boshlandi...");
//     setTimeout(function(){
//     callback();
// }, 2000);
// }

// orderPizza(callMeWhenPizzaReady);

let name = prompt("Ismingizni kiriting! ");
let lastName = prompt("Familyangizni kiriting! ");
let birth = Number(prompt("Tug'ulgan yilizni kiriting! "));

function outWhenInputYourInformation(name,lastName,birth){
    let d = new Date();
    thisYear = d.getFullYear();
    console.log((`${name} ${lastName} ${thisYear - birth} `));
}

function getYourInformation(callback,name,lastName,birth){

    let tanlov = prompt("Agar siz to'g'ri ma'lumot kiritgan bo'lsangiz y aks holda n bosing!");
    if( tanlov === "y") {
        callback(name,lastName,birth);
    }else{
        alert("Malumotlarizni boshqatan kirting!")
    }
}

getYourInformation(outWhenInputYourInformation,name,lastName,birth);