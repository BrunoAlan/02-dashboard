import type { SimplePlokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonsState {
    favorites: { [key: string]: SimplePlokemon };
}

// const getInitialState = (): PokemonsState => {
//     const favorites = JSON.parse(
//         localStorage.getItem('favorite-pokemons') ?? '{}'
//     );
//     return favorites;
// };

const initialState: PokemonsState = {
    favorites: {},
};

const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        setFavoritePokemons(
            state,
            action: PayloadAction<{ [key: string]: SimplePlokemon }>
        ) {
            state.favorites = action.payload;
        },
        toggleFavorite(state, action: PayloadAction<SimplePlokemon>) {
            const { id } = action.payload;
            if (!!state.favorites[id]) {
                delete state.favorites[id];
            } else {
                state.favorites[id] = action.payload;
            }

            // TODO: remove it, is a bad practice to use localStorage in reducers
            localStorage.setItem(
                'favorite-pokemons',
                JSON.stringify(state.favorites)
            );
        },
    },
});

export const { toggleFavorite, setFavoritePokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer;
