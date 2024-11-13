'use client';

import { useAppSelector } from '@/store';
import { PokemonGrid } from './PokemonGrid';
import { useState } from 'react';

export const FavoritesPokemons = () => {
    const favoritePokemons = useAppSelector((state) =>
        Object.values(state.pokemons)
    );
    const [pokemons] = useState(favoritePokemons);
    return <PokemonGrid pokemons={pokemons} />;
};
