// print() statement
console.log("hello world")

// datatypes
// types of date 

// strings

//let is used to define a variable that you can reassign
let houston = "hot";
console.log(houston)
houston = 2;
console.log(houston)

//const but it stands for constant,

const ethan = "a cool dude"
console.log(ethan)
//ethan = "not a cool guy"

//functions

// def is how you wrot it in python, 2 ways in js

function printMyName(name, lastname){
// this is the function body
// any code fits inside of curly braces
console.log(name, lastname);
return 1;
}

const ethanIsCool = (firstmesg, secmesg) => {
    console.log(firstmesg, secmesg);
}


// envoking
printMyName("Joe", "Frasier");
ethanIsCool("hiippity hoopppidy","heloo");


// arrays
let fruit = ["apple", "pear", "banana"]

console.log(fruit[2])
console.log(fruit[1])

// push is append or add
fruit.push("kiwi")
const newfruit = fruit.filter((fruit) => fruit != "apple")
//     if(fruit === apple) {
//         return 1;
//     }
// });
console.log(newfruit)

// for (const fruit of fruits) {
//     console.log(fruit);
// }

const student = {
    name: "Jaye"
}
console.log(student["name"])
console.log(student.name)

