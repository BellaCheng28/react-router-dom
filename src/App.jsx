// src/App.jsx
import { useState } from "react";
import PokemonList from "./components/PokemonList.jsx";
import NavBar from "./components/NavBar.jsx";
import { Routes,Route } from "react-router-dom";
import PokemonDatail from"./components/PokemonDetails.jsx";
import PokemonForm from "./components/PokemonForm.jsx";

 const initialState = [
  { _id: 1, name: "bulbasaur", weight: 69, height: 7 },
  { _id: 2, name: "ivysaur", weight: 130, height: 10 },
  { _id: 3, name: "venusaur", weight: 1000, height: 20 },
  { _id: 4, name: "charmander", weight: 85, height: 6 },
  { _id: 5, name: "charmeleon", weight: 190, height: 11 },
];

const App = () => {
  const [pokemon, setPokemon] = useState(initialState);

const addPokemon =(newPokemonData)=>{
  newPokemonData._id=pokemon.length+1
  setPokemon([...pokemon, newPokemonData]);
}

  return (
    <>
      <NavBar />
      <h1>Pokemon!</h1>
      <Routes>
        <Route path="/pokemon" element={<PokemonList pokemon={pokemon} />} />
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="*" element={<h2>Whoops,nothing here!</h2>} />
        <Route
          path="/pokemon/:pokemonId"
          element={<PokemonDatail pokemon={pokemon} />}
        />
        <Route
          path="/pokemon/new"
          element={<PokemonForm addPokemon={addPokemon} />}
        />
      </Routes>
    </>
  );
};

export default App;
