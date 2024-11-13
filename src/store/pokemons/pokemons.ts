import type { SimplePlokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonsState {
    [key: string]: SimplePlokemon;
}

const getInitialState = (): PokemonsState => {
    const favorites = JSON.parse(
        localStorage.getItem('favorite-pokemons') ?? '{}'
    );
    return favorites;
};

const initialState: PokemonsState = {
    ...getInitialState(),
};

const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        toggleFavorite(state, action: PayloadAction<SimplePlokemon>) {
            const { id } = action.payload;
            if (!!state[id]) {
                delete state[id];
            } else {
                state[id] = action.payload;
            }

            //TODO: remove it, is a bad practice to use localStorage in reducers
            localStorage.setItem('favorite-pokemons', JSON.stringify(state));
        },
    },
});

export const { toggleFavorite } = pokemonSlice.actions;

export default pokemonSlice.reducer;
