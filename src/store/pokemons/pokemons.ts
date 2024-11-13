import type { SimplePlokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonsState {
    [key: string]: SimplePlokemon;
}

const initialState: PokemonsState = {};

const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        toggleFavorite(state, action: PayloadAction<SimplePlokemon>) {
            const { id } = action.payload;
            if (!!state[id]) {
                delete state[id];
                return;
            }
            state[id] = action.payload;
        },
    },
});

export const { toggleFavorite } = pokemonSlice.actions;

export default pokemonSlice.reducer;
