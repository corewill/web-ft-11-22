const outerCont = document.querySelector(".outercont");
const maincontainer = document.getElementsByClassName("clinner");
const numberButtons = document.getElementsByClassName("press")
const equals = document.querySelector("total")

const numbersToAdd = [];

const calculation = (handleclick) => {
    numbersToAdd.push(handleclick);
    console.log(numbersToAdd)
};
const handleclick = (e) =>{
    console.log(calculation(e.target.innerText));
};

for(button of numberButtons){
    button.addEventListener("click",handleclick);
}

