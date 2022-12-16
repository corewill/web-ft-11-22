console.log(window);
console.log(document);
// you have to select what you want to change
// select inside document by class or element
const hwdyheader = document.getElementById("greet");
const hwdyheader2 = document.getElementsByClassName("greet");

const studentheader = document.getElementsByClassName("corey");

const studentheader2 = document.getElementById("megsdiv");

const paramauro = document.getElementsByClassName("mauro");

const joesDiv = document.querySelector(".joesContainer")


console.log(hwdyheader);
console.log(hwdyheader2[0].innerHTML);

const faculty = document.querySelector(".ethan");
console.log(faculty);
faculty.innerText = "the best TA";
// then you can modify create 
const joesTitle = document.createElement("h2");
//modify
console.log(joesTitle);
joesTitle.innerText = "Teacher";
// create change

// you can append back to the dom
// append apply changes
megsdiv.append(joesTitle);