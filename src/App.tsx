import { Routes, Route } from "react-router-dom";
// import User from "./pages/User";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  return (
    <div className="font-league">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:pokemonName" element={<Detail />} />
      </Routes>
      <div className="text-center pb-4 mt-4 text-sm ">
        Pokedex App - Nadhif Rafifaiz K
      </div>
    </div>
  );
}

export default App;
