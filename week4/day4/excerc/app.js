console.log(window);
console.log(document);

const maincontainer = document.querySelector(".maincontainer");

// newimg.src = "_DSC0418.jpg"

// newimg.classList = "photo"

// console.log("maincontainer");

// newDiv1.innerText = "Corey";

// newp.innerText = "Corey is a great Real Estate Agent!";

const dogPics = ["_DSC0418.jpg", "bgimg1pu.avif"];

for (const dog of dogPics) {
    const newimg = document.createElement("img");
    const newDiv1 = document.createElement("h2");
    const newp = document.createElement("p");
    const button = document.createElement("button");
    const dogcontainer = document.createElement("div");

    newimg.src = dog;
    newDiv1.innerText ="Corey";
    newp.innerText = "good dogs";
    button.innerText = "bang"
    button.addEventListener("click", () => 
    console.log("clicked"),
    button.innerText = "i've been clicked");


    dogcontainer.append(newimg, newDiv1, newp, button,);
    maincontainer.append(dogcontainer)
    

}

maincontainer.append()