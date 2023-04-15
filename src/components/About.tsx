import React from "react";
import { useAppSelector } from "../app/hooks";
import { PokemonAbility } from "../features/pokemon/pokemonSlice";

const About = () => {
  const globalPokemon = useAppSelector((state) => state.pokemon.pokemon);

  const parseAbility = (abilities: PokemonAbility[]) => {
    let abilityString: string[] = [];
    abilities.forEach((ability) => {
      let name = ability.ability.name;
      abilityString.push(name.charAt(0).toUpperCase() + name.slice(1));
    });
    return abilityString.join(", ");
  };
  return (
    <div className="text-xs grid grid-cols-3 gap-4">
      <p className="text-sm font-bold text-slate-400">Species</p>
      <p className="text-sm font-bold text-slate-600 col-span-2 capitalize">
        {globalPokemon.species.name}
      </p>
      <p className="text-sm font-bold text-slate-400">Height</p>
      <p className="text-sm font-bold text-slate-600 col-span-2">
        {globalPokemon.height} cm
      </p>
      <p className="text-sm font-bold text-slate-400">Weight</p>
      <p className="text-sm font-bold text-slate-600 col-span-2">
        {globalPokemon.weight} kg
      </p>
      <p className="text-sm font-bold text-slate-400">Abilities</p>
      <div className="text-sm font-bold text-slate-600 col-span-2">
        {parseAbility(globalPokemon.abilities)}
      </div>
    </div>
  );
};

export default About;
