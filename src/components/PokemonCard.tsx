import React, { useEffect, useState } from "react";
import type { Pokemon } from "../features/pokemon/pokemonSlice";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = (props) => {
  const { pokemon } = props;

  const getTypeColor = (type: string): string => {
    console.log(type);
    switch (type) {
      case "grass":
        return "bg-green-400";
      case "fire":
        return "bg-red-400";
      case "water":
        return "bg-blue-400";
      // Add more cases for other Pokemon types
      default:
        return "bg-slate-400";
    }
  };

  return (
    <div
      className={`h-15 aspect-[4/3] rounded-lg p-4 relative hover:cursor-pointer hover:opacity-90 ${getTypeColor(
        pokemon.types[0].type.name
      )}`}
    >
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-2">
          <p className="capitalize font-extrabold text-2xl opacity-70">
            {pokemon.name}
          </p>
          <div className="flex flex-col gap-1">
            {pokemon.types.map((type) => {
              return (
                <div className="rounded-full bg-slate-200 opacity-40 w-fit px-2 py-1 ">
                  <p className="text-xs capitalize font-bold text-slate-600 opacity-100">
                    {type.type.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <img
        src={pokemon.sprites.front_default}
        className="absolute right-0 bottom-0 h-36 md:h-24 lg:h-48"
      />
    </div>
  );
};

export default PokemonCard;
