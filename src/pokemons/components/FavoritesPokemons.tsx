'use client';

import { useAppSelector } from '@/store';
import { PokemonGrid } from './PokemonGrid';

export const FavoritesPokemons = () => {
    const pokemons = useAppSelector((state) => state.pokemons);
    return <PokemonGrid pokemons={Object.values(pokemons)} />;
};
