import React from "react";
import { useAppSelector } from "../app/hooks";
import { MdUpgrade } from "react-icons/md";
import { BiBookBookmark } from "react-icons/bi";

const Moves = () => {
  const globalPokemon = useAppSelector((state) => state.pokemon.pokemon);

  const renderMoves = () => {
    return globalPokemon.moves.map((move) => {
      return (
        <div className="border-2 my-1 px-3 py-2 rounded-md">
          <p className="capitalize text-sm font-extrabold text-slate-600">
            {move.move.name}
          </p>
          {move.version_group_details.map((details) => {
            return (
              <div className="grid grid-cols-8 text-sm font-light">
                <div className="flex flex-row items-center gap-2">
                  <p className="font-extrabold text-xs">Lv</p>
                  <p>{details.level_learned_at}</p>
                </div>
                <div className="flex flex-row items-center gap-2 col-span-2">
                  <MdUpgrade />
                  <p>{details.move_learn_method.name}</p>
                </div>
                <div className="flex flex-row items-center gap-2 col-span-5">
                  <BiBookBookmark />
                  <p>{details.version_group.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      );
    });
  };
  return <div>{renderMoves()}</div>;
};

export default Moves;
