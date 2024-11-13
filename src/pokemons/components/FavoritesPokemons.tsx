'use client';

import { useAppSelector } from '@/store';
import { PokemonGrid } from './PokemonGrid';

export const FavoritesPokemons = () => {
    const pokemons = useAppSelector((state) => Object.values(state.pokemons));
    return <PokemonGrid pokemons={pokemons} />;
};
