let fruits = ["fee", "fa", "fo", "fum"]

// for (const fruit of fruits) {
//     console.log(fruit)
    
// }

// fruits.forEach((fruit) => { console.log(fruit)
    
// });

const student = {
    name: "jay",
}

console.log(student["name"])
console.log(student.name)

student.lastname = "smith"
student["age"] = "20"

console.log(student)

for (const key in student) {
    console.log(student[key])
        
    }
