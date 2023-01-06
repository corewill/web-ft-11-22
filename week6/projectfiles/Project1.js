var myHeaders = new Headers();
myHeaders.append("X-Api-Key", "3btq2VYaMWZSekcr5qDcDw==H50S8RT92PXpd1LQ");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};



const getMuscleData = async () => {

  let contentBox = document.querySelector(".contentBox");
  contentBox.innerHTML = "";
  const inputField = document.querySelector(".inputField").value.replace(/\s/g, "+")
  console.log(inputField)
  const muscleData = await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${inputField}`, requestOptions)
  const json = await muscleData.json();
  console.log(json) 


  json.forEach((exercise) => {
    const exersiseCard = document.createElement("div")
    const name = document.createElement("h3");
const type = document.createElement("h4")
const muscle = document.createElement("h4")
const equipment = document.createElement("h4")
const difficulty = document.createElement("h4")
const instructions = document.createElement("p")
const more = document.createElement("a")

exersiseCard.classList = "exersiseCard"
name.innerText = exercise.name
type.innerText = exercise.type
muscle.innerText = exercise.muscle
equipment.innerText = exercise.equipment
difficulty.innerText = exercise.difficulty
instructions.innerText = exercise.instructions
more.classList = "more"
exersiseCard.append(name, type, muscle, equipment, difficulty, instructions, more);
contentBox.append(exersiseCard)




  })
  let more = document.querySelectorAll('.more');
  for (let index = 0; index < more.length; index++) {
    more[index].addEventListener('click', function(){
      more[index].parentNode.classList.toggle('active')
    })
    
  }


}



const searchButton = document.querySelector(".searchButton");
  
  searchButton.addEventListener("click", getMuscleData);



  const clearButton = document.querySelector(".clearButton");
  
  clearButton.addEventListener("click", function() {location.reload()});
// let preloader = document.getElementById(preloader);

// var loader = document.getElementById("preloader")
//         window.addEventListener("load", function(){
//             loader.style.display = none;
//         })

