const outerCont = document.querySelector(".outercont");
const maincontainer = document.getElementsByClassName("clinner");
const numberButtons = document.getElementsByClassName("press")

const handleclick = (e) =>{
    console.log(e.target.innerText)
}

for(button of numberButtons){
    button.addEventListener("click",handleclick)
}
