import React, { useEffect, useState } from "react";
import About from "./About";
import BaseStats from "./BaseStats";
import Evolution from "./Evolution";
import Moves from "./Moves";

const DetailCard = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="px-4  ">
      <div className="flex flex-row justify-between my-4">
        <div
          className={`text-sm font-bold hover:cursor-pointer hover:text-slate-600 ${
            activeTab === 1 ? "text-slate-600" : "text-slate-400"
          } `}
          onClick={() => setActiveTab(1)}
        >
          <p>About</p>
          {activeTab == 1 ? (
            <hr className="h-1 mx-auto my-4 bg-gray-100 border-0 rounded dark:bg-gray-700" />
          ) : null}
        </div>
        <div
          className={`text-sm font-bold hover:cursor-pointer hover:text-slate-600 ${
            activeTab === 2 ? "text-slate-600" : "text-slate-400"
          } `}
          onClick={() => setActiveTab(2)}
        >
          <p>Base Stats</p>
          {activeTab == 2 ? (
            <hr className="h-1 mx-auto my-4 bg-gray-100 border-0 rounded dark:bg-gray-700" />
          ) : null}
        </div>
        <div
          className={`text-sm font-bold hover:cursor-pointer hover:text-slate-600 ${
            activeTab === 3 ? "text-slate-600" : "text-slate-400"
          } `}
          onClick={() => setActiveTab(3)}
        >
          <p>Evolution</p>
          {activeTab == 3 ? (
            <hr className="h-1 mx-auto my-4 bg-gray-100 border-0 rounded dark:bg-gray-700" />
          ) : null}
        </div>
        <div
          className={`text-sm font-bold hover:cursor-pointer hover:text-slate-600 ${
            activeTab === 4 ? "text-slate-600" : "text-slate-400"
          } `}
          onClick={() => setActiveTab(4)}
        >
          <p>Moves</p>
          {activeTab == 4 ? (
            <hr className="h-1 mx-auto my-4 bg-gray-100 border-0 rounded dark:bg-gray-700" />
          ) : null}
        </div>
      </div>
      <div>
        {activeTab == 1 ? (
          <About />
        ) : activeTab == 2 ? (
          <BaseStats />
        ) : activeTab == 3 ? (
          <Evolution />
        ) : activeTab == 4 ? (
          <Moves />
        ) : null}
      </div>
    </div>
  );
};

export default DetailCard;
