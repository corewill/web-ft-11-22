const contentBox = document.querySelector(".contentBox");
contentBox.innerHTML = "";
const inputField = document.querySelector(".searchField").value.replace(/\s/g, "+")
console.log(inputField)
const muscleData = await fetch("https://api.api-ninjas.com/v1/exercises?muscle=", requestOptions)
const json = await muscleData.json();
console.log(json) 

const exersiseCard = document.createElement("div")
const name = document.createElement("h4");
const type = document.createElement("h4")
const muscle = document.createElement("h4")
const equipment = document.createElement("h4")
const difficulty = document.createElement("h4")
const instructions = document.createElement("p")

name.innerText = json.name
type.innerText = json.type
muscle.innerText =json.type
equipment.innerText = json.equipment
difficulty.innerText =json.difficulty
instructions.innerText = json.instructions