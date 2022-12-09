console.log(window);
console.log(document);

const newdiv = document.querySelector(".maincontainer");

newimg.src = "_DSC0418.jpg"

newimg.classList = "photo"

console.log(newdiv);

newDiv1.innerText = "Corey";
newp.innerText = "Corey is a great Real Estate Agent!";

const dogPics = ["_DSC0418.jpg"]
for (const of dog of dogPics) {
    const newimg = document.createElement("img");
    const newDiv1 = document.createElement("h2");
    const newp = document.createElement("p");
    const button = document.createElement("button");
    const dogcontainer = document.createElement("div");

    Image.src = dog;
    newDiv1.innerText ="Corey";
    newp.innerText = "good dogs";
    button.innerText = "bang"
    button.addEventListener("click", () => console.log("I have been clicked"));


    dogcontainer.append(newimg, newDiv1, newp, dogcontainer);
    maincontainer.append(dogcontainer)
    

}

newdiv.append(newDiv1, newimg, newp)