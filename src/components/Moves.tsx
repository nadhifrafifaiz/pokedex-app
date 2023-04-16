import React from "react";
import { useAppSelector } from "../app/hooks";

const Moves = () => {
  const globalPokemon = useAppSelector((state) => state.pokemon.pokemon);

  const renderMoves = () => {
    return globalPokemon.moves.map((move) => {
      return <p>{move.move.name}</p>;
    });
  };
  return <div>{renderMoves()}</div>;
};

export default Moves;
