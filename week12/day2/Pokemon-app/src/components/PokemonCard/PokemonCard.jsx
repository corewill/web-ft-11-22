import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const PokemonCard = ({ PokemonUrl }) => {
  const [Pokemon, setPokemon] = useState({});
  const location = useLocation();

  useEffect(() => {
    const fetchPokemon = async () => {
      const PokeData = await fetch(location.state.url);
      const json = await PokeData.json();

      // console.log(PokeData)
      setPokemon(json);
    };
    fetchPokemon();
  }, []);

  const moves = Pokemon?.moves?.slice(0, 3);
  const name = Pokemon?.name?.charAt(0).toUpperCase() + Pokemon?.name?.slice(1);
  return (
    <div>
      <img src={Pokemon?.sprites?.front_default} alt="" />
      <div>
        <h3>{name}</h3>
        <h3>Moves</h3>
        {moves?.map((move) => (
          <p key={move?.name}>{move?.move?.name}</p>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
