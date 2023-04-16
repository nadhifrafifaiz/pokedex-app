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
        return "bg-green-300";
      case "fire":
        return "bg-red-500";
      case "water":
        return "bg-blue-300";
      // Add more cases for other Pokemon types
      default:
        return "bg-slate-500";
    }
  };

  const getColor = (type: string): string => {
    switch (type) {
      case "grass":
        return "green";
      case "fire":
        return "yellow";
      case "water":
        return "white";
      // Add more cases for other Pokemon types
      default:
        return "white";
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
    <div className="font-league">
      {globalPokemon.id ? (
        <div className={`  ${getTypeColor(globalPokemon.types[0].type.name)}`}>
          <div className="container mx-auto md:w-1/2 xl:w-1/3 p-4">
            <div className="grid grid-cols-4 py-4">
              <div className="col-span-3">
                <p className="capitalize font-extrabold text-5xl text-white opacity-80">
                  {globalPokemon.name}
                </p>
                <div className="flex flex-row gap-1 ">
                  {globalPokemon.id
                    ? globalPokemon.types.map((type) => {
                        return (
                          <div
                            key={type.slot}
                            className="rounded-full bg-slate-200 opacity-60 w-fit px-2 py-1 "
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
              <div className="flex justify-end items-center">
                <p className="capitalize font-extrabold text-xl opacity-40 text-black">
                  {getOrderNumber(globalPokemon.order)}
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center ">
              <div className="flex flex-row items-center justify-center mt-4 translate-y-0 relative">
                <img
                  className="h-64 aspect-square z-50"
                  src={globalPokemon?.sprites?.front_default}
                />
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute lg:-top-20 w-3/4 opacity-30 "
                >
                  <path
                    fill={getColor(globalPokemon.types[0].type.name)}
                    d="M58,-59.1C72.9,-43.1,81.2,-21.5,78.9,-2.3C76.6,16.9,63.6,33.7,48.7,45.8C33.7,57.9,16.9,65.2,-1.9,67.2C-20.8,69.1,-41.5,65.7,-56,53.6C-70.4,41.5,-78.6,20.8,-76.1,2.5C-73.5,-15.8,-60.4,-31.5,-46,-47.5C-31.5,-63.6,-15.8,-79.9,2.9,-82.8C21.5,-85.7,43.1,-75.2,58,-59.1Z"
                    transform="translate(100 100)"
                  />
                </svg>

                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute lg:-top-20 w-4/5 opacity-30 "
                >
                  <path
                    fill={getColor(globalPokemon.types[0].type.name)}
                    d="M47.4,-54C63.5,-43,80,-30,83.4,-14.2C86.8,1.6,77.1,20.2,65.2,34.6C53.3,49,39.3,59.2,23.5,65.3C7.7,71.4,-9.9,73.4,-28,69.9C-46.1,66.4,-64.8,57.3,-72.8,42.5C-80.8,27.7,-78.2,7.2,-73.2,-11.5C-68.2,-30.1,-60.9,-46.9,-48.3,-58.5C-35.7,-70.1,-17.8,-76.5,-1.1,-75.2C15.7,-73.9,31.3,-65,47.4,-54Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </div>
              <div>{globalPokemon.id ? <DetailCard /> : "tidak ada"}</div>
            </div>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default Detail;
