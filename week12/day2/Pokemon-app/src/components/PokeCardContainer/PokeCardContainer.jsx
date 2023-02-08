import React from "react";
import Pokemon from "../Pokemon/Pokemon.js";
import PokemonFullPage from "../PokemonFullPage/PokemonFullPage";

const PokeCardContainer = ({ setSelectedPokemon }) => {
  return (
    <div>
      {Pokemon.map((Poke, index) => {
        <PokemonFullPage
          setSelectedPokemon={setSelectedPokemon}
          key={index}
          Pokemon={Poke}
        />;
      })}
    </div>
  );
};

export default PokeCardContainer;
