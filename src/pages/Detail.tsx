import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { Pokemon, setPokemon } from "../features/pokemon/pokemonSlice";
import axios from "axios";
import DetailCard from "../components/DetailCard";

const Detail = () => {
  const dispatch = useAppDispatch();
  const { pokemonName } = useParams();
  const globalPokemons = useAppSelector((state) => state.pokemon.pokemons);
  const globalPokemon = useAppSelector((state) => state.pokemon.pokemon);

  const fetchPokemon = async () => {
    let response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    dispatch(setPokemon(response.data));
  };

  const checkGlobalPokemon = () => {
    let selectedPokemon: Pokemon = {} as Pokemon;
    globalPokemons.forEach((pokemon) => {
      if (pokemon.name === pokemonName) {
        selectedPokemon = pokemon;
      }
    });

    if (selectedPokemon.id) {
      dispatch(setPokemon(selectedPokemon));
    } else {
      fetchPokemon();
    }
  };
  useEffect(() => {
    checkGlobalPokemon();
  }, []);

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
      className={`w-screen h-screen   ${
        globalPokemon.id ? getTypeColor(globalPokemon.types[0].type.name) : null
      }`}
    >
      <div className="container mx-auto md:w-1/2">
        <div className="grid grid-cols-4 p-4 ">
          <div className="col-span-3">
            <p className="capitalize font-extrabold text-3xl text-white opacity-60">
              {globalPokemon.name}
            </p>
            <div className="flex flex-row gap-1 ">
              {globalPokemon.id
                ? globalPokemon.types.map((type) => {
                    return (
                      <div
                        key={type.slot}
                        className="rounded-full bg-slate-200 opacity-40 w-fit px-2 py-1 "
                      >
                        <p className="text-xs capitalize font-bold text-slate-600 opacity-100">
                          {type.type.name}
                        </p>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <p className="capitalize font-extrabold text-xl opacity-40 text-black">
              {getOrderNumber(globalPokemon.order)}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center ">
          <div className="flex flex-row items-center justify-center mt-4 translate-y-0 ">
            <img
              className="h-64 aspect-square"
              src={globalPokemon?.sprites?.front_default}
            />
          </div>
          <div className="bg-white min-h-[43vh] rounded-t-3xl p-2">
            {globalPokemon.id ? <DetailCard /> : "tidak ada"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
