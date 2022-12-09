const topContainer = document.querySelector(".topContainer");

const listOfPokemon = [
    {name:"Gengar", hp:220, move1:"ShadowBall",move2: "Curse", picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"},
    {name: "MilTank", hp:300, move1: "Rollout", move2:"BodySlam", picture:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png"},
    {name:"Garchomp", hp:200, move1:"HyperBeam",move2: "Eathquake", picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png"},
    {name:"Swampert", hp:190, move1:"hydropump",move2: "mudshot", picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png"},
    {name:"Phanpy", hp:120, move1:"playrough",move2: "tackle", picture: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/231.png"},
];

for (const pokemon of listOfPokemon) {
    const card = document.createElement("div");
    const name = document.createElement("h1");
    const hp = document.createElement("h2");
    const move1 = document.createElement("h3");
    const move2 = document.createElement("h3");
    const picture = document.createElement("img");
    
    card.classList = pokemon.card;
    hp.innerText = pokemon.hp;
    picture.src = pokemon.picture;
    move1.innerText = pokemon.move1;
    move2.innerText = pokemon.move2;
    name.innerText = pokemon.name;


    topContainer.append(name, hp, picture, move1, move2,);

    
  }


