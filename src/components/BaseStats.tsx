import React from "react";
import { useAppSelector } from "../app/hooks";
import { number } from "prop-types";

const BaseStats = () => {
  const globalPokemon = useAppSelector((state) => state.pokemon.pokemon);

  const renderStats = () => {
    return globalPokemon.stats.map((stat) => {
      return (
        <div className="my-2 grid grid-cols-5 ">
          <p className="text-sm font-bold text-slate-400 capitalize col-span-2">
            {stat.stat.name}
          </p>
          <p className="text-sm font-semibold text-slate-700 capitalize">
            {stat.base_stat}
          </p>
          <div className="flex items-center col-span-2">
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${stat.base_stat}%` }}
              ></div>
            </div>
          </div>
        </div>
      );
    });
  };
  return <div>{renderStats()}</div>;
};

export default BaseStats;
