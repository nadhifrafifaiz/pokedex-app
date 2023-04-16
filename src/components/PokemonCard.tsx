import React, { useEffect, useState } from "react";
import type { Pokemon } from "../features/pokemon/pokemonSlice";
import { useNavigate } from "react-router";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = (props) => {
  const navigate = useNavigate();
  const { pokemon } = props;

  const getTypeColor = (type: string): string => {
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

  const getOrderNumber = (order: number) => {
    if (order <= 9) {
      return `#00${order}`;
    } else if (order <= 99) {
      return `#0${order}`;
    } else {
      return `#${order}`;
    }
  };
  return (
    <div
      className={`h-15 aspect-[4/3] rounded-lg p-4 relative hover:cursor-pointer hover:opacity-90 shadow-md ${getTypeColor(
        pokemon.types[0].type.name
      )}`}
      onClick={() => {
        navigate(`/${pokemon.name}`);
      }}
    >
      <div className="">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between">
            <p className="capitalize font-extrabold opacity-90 text-xs sm:text-sm xl:text-base  text-white ">
              {pokemon.name}
            </p>
            <p className="capitalize font-extrabold text-xs sm:text-sm xl:text-base  opacity-30 text-black">
              {getOrderNumber(pokemon.order)}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            {pokemon.types.map((type) => {
              return (
                <div className="rounded-full bg-slate-200 opacity-40 w-fit px-2 py-1 ">
                  <p className="text-[0.6rem] xl:text-xs  capitalize font-bold text-slate-600 opacity-100">
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
        className="absolute right-0 bottom-0 h-20 xl:h-32"
      />
    </div>
  );
};

export default PokemonCard;
