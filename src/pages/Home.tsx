import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setPokemons } from "../features/pokemon/pokemonSlice";
import axios from "axios";
import type { Pokemon } from "../features/pokemon/pokemonSlice";
import PokemonCard from "../components/PokemonCard";

function Home() {
  const dispatch = useAppDispatch();
  const [offset, setOffset] = useState<number>(0);
  const [limit, setLimit] = useState<number>(20);
  const globalPokemons = useAppSelector((state) => state.pokemon.pokemons);

  const fetchPokemons = async () => {
    let myPokemon: Pokemon[] = [];
    let data = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    );
    myPokemon = await Promise.all(
      data.data.results.map(async (pokemon: any) => {
        return (await axios.get(pokemon.url)).data;
      })
    );

    dispatch(setPokemons({ pokemons: myPokemon, totalCount: data.data.count }));
  };

  const renderPokemon = () => {
    return globalPokemons.map((pokemon: Pokemon) => {
      return <PokemonCard pokemon={pokemon} key={pokemon.id} />;
    });
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className="p-2 md:p-4">
      <h2 className="text-4xl font-bold text-slate-700 my-2 mb-6 md:my-4 md:mb-10 ">
        Pokedex
      </h2>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-6 md:gap-4 ">
        {renderPokemon()}
      </div>
    </div>
  );
}

export default Home;
