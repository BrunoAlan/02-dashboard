'use client';

import { useAppSelector } from '@/store';
import { PokemonGrid } from './PokemonGrid';
import { IoHeartOutline } from 'react-icons/io5';

export const FavoritesPokemons = () => {
    const favoritePokemons = useAppSelector((state) =>
        Object.values(state.pokemons.favorites)
    );

    return (
        <>
            {favoritePokemons.length ? (
                <PokemonGrid pokemons={favoritePokemons} />
            ) : (
                <NoFavorites />
            )}
        </>
    );
};

export const NoFavorites = () => (
    <div className='flex flex-col h-[50vh] items-center justify-center'>
        <IoHeartOutline size={100} className='text-red-500' />
        <span className='text-lg text-gray-500'>No favorites Pokemons</span>
    </div>
);
