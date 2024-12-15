import { useParams } from "react-router-dom";
import { useState ,useEffect } from "react";

const PokemonDatail = ({pokemon})=>{
  const {pokemonId } = useParams();
  const[pokemonDatail,setPokemonDatil]= useState({})
 
  useEffect(() => {
    const pokemonById = pokemon.find((item) => {
      return item._id === Number(pokemonId);
    });

    console.log(pokemonById || {});
    setPokemonDatil(pokemonById);
  }, [pokemon, pokemonId]);

    return (
      <>
        <div>
          <h1>Pokemon Detail</h1>
          <h2>Pokemon weight:{pokemonDatail.weight}</h2>
          <h2>Pokemon weight:{pokemonDatail.height}</h2>
        </div>
      </>
    );

}

export default PokemonDatail;