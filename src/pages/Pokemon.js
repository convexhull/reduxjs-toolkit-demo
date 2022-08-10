import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemon, pokemonDelete } from "../store/pokemon/pokemonSlice";

const Pokemons = (props) => {
    const dispatch = useDispatch();
    const pokemons = useSelector((state) => state.pokemon.data);
    const [name, setName] = useState("");

    const loadPokemonHandler = () => {
        dispatch(fetchPokemon(name.toLowerCase()));
    };

    const handlePokemonDelete = () => {
        dispatch(pokemonDelete());
    };
    return (
        <div>
            <h1>Pokemons!!!</h1>
            <div>
                <button onClick={loadPokemonHandler}>Load Pokemon!!!</button>
                <button onClick={handlePokemonDelete}>X</button>
                <input
                    style={{width: '500px'}}
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Please enter a name e.g Pikachu and click load"
                />
            </div>
            {pokemons.map((p) => (
                <img src={p} key={p} alt="pokemon" />
            ))}
        </div>
    );
};

export default Pokemons;
