import React from "react";
import { Link } from "react-router-dom";

const PokemonFullPage = ({ Pokemon }) => {
  const name = Pokemon?.name?.charAt(0).toUpperCase() + Pokemon?.name?.slice(1);
  return (
    <div>
      <Link to="/PokeCard" state={ Pokemon } >
        <h3>{name}</h3>
      </Link>
    </div>
  );
};

export default PokemonFullPage;