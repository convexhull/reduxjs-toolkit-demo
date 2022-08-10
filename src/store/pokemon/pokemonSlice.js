import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "../../axios/axios";

const initState = {
    loading: false,
    data: [],
    error: null,
};

export const fetchPokemon = createAsyncThunk(
    "pokemon/fetchPokemon",
    async (name) => {
        try {
            const data = await Axios.get(`/pokemon/${name}`);
            return data.data;
        } catch (e) {
            throw e;
        }
    }
);

const pokemonSlice = createSlice({
    name: "pokemon",
    reducers: {
        pokemonDelete(state, action) {
            state.data.pop();
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemon.fulfilled, (state, action) => {
                console.log("fulfilled", { action });
                state.data.push(
                    action.payload.sprites.other["official-artwork"]
                        .front_default
                );
                state.pending = false;
            })
            .addCase(fetchPokemon.pending, (state, action) => {
                console.log("pending", { action });
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPokemon.rejected, (state, action) => {
                console.log("error", { action });
                state.error = action.error.message;
                state.pending = false;
            });
    },
    initialState: initState,
});

export const { pokemonAdded, pokemonDelete } = pokemonSlice.actions;

export default pokemonSlice.reducer;
