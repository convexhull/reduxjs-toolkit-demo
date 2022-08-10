import { configureStore } from "@reduxjs/toolkit";
import CatsReducer from "./cat/reducer";
import pokemonSlice from "./pokemon/pokemonSlice";

const Store = configureStore({
    reducer: {
        cats: CatsReducer,
        pokemon: pokemonSlice,
    },
});

export default Store;
