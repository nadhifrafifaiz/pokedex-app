import React from "react";
import { useAppSelector } from "../app/hooks";

const About = () => {
  const globalPokemon = useAppSelector((state) => state.pokemon.pokemon);

  return (
    <div>
      <p>Species</p>
      <p>{globalPokemon.species.name}</p>
      <p>Height</p>
      <p>{globalPokemon.height}</p>
      <p>Weight</p>
      <p>{globalPokemon.weight}</p>
      <p>Abilities</p>
      <p>
        {globalPokemon.id
          ? globalPokemon.abilities.map((ability) => {
              return <p>{ability.ability.name}</p>;
            })
          : null}
      </p>
    </div>
  );
};

export default About;
