import React, { useEffect, useState } from "react";
import About from "./About";
import BaseStats from "./BaseStats";
import Evolution from "./Evolution";
import Moves from "./Moves";

const DetailCard = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="pt-6 px-4">
      <div className="flex flex-row justify-between">
        <div className="text-xs font-semibold " onClick={() => setActiveTab(1)}>
          <p>About</p>
          {activeTab == 1 ? <hr className="mt-2" /> : null}
        </div>
        <div className="text-xs font-semibold" onClick={() => setActiveTab(2)}>
          <p>Base Stats</p>
          {activeTab == 2 ? <hr className="mt-2" /> : null}
        </div>
        <div className="text-xs font-semibold" onClick={() => setActiveTab(3)}>
          <p>Evolution</p>
          {activeTab == 3 ? <hr className="mt-2" /> : null}
        </div>
        <div className="text-xs font-semibold" onClick={() => setActiveTab(4)}>
          <p>Moves</p>
          {activeTab == 4 ? <hr className="mt-2" /> : null}
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
