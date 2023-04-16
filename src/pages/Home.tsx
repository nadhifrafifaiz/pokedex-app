import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setPokemons } from "../features/pokemon/pokemonSlice";
import axios from "axios";
import type { Pokemon } from "../features/pokemon/pokemonSlice";
import PokemonCard from "../components/PokemonCard";
import Pagination from "../components/Pagination";

function Home() {
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const [offset, setOffset] = useState<number>(0);
  const [limit, setLimit] = useState<number>(18);
  const [isLoading, setIsLoading] = useState(false);
  const globalPokemons = useAppSelector((state) => state.pokemon.pokemons);
  const totalCount = useAppSelector((state) => state.pokemon.totalCount);

  const fetchPokemons = async () => {
    setIsLoading(true);
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
    setIsLoading(false);
  };

  const renderPokemon = () => {
    return globalPokemons.map((pokemon: Pokemon) => {
      return <PokemonCard pokemon={pokemon} key={pokemon.id} />;
    });
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage >= 1) setCurrentPage(currentPage - 1);
  };
  const directPage = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setOffset(limit * currentPage);
  }, [currentPage]);

  useEffect(() => {
    fetchPokemons();
  }, [offset]);

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="p-2 md:p-4 container mx-auto md:w-1/2 font-league">
          <div className="my-2">
            <h2 className="text-4xl font-bold text-slate-700 my-2">Pokedex</h2>
            <p>
              Pokedex is designed to catalog and provide information regarding
              the various species of Pokémon, There are over{" "}
              <span className="font-bold">{totalCount}</span> Pokemons in here.
              Lets Explore!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-3">
            {renderPokemon()}
          </div>
          <div className="mt-2 w-full">
            <Pagination
              itemsPerPage={limit}
              totalItems={totalCount}
              currentPage={currentPage}
              nextPage={nextPage}
              prevPage={prevPage}
              directPage={directPage}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
