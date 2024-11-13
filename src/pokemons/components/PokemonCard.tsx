'use client';
import Link from 'next/link';
import type { SimplePlokemon } from '../interfaces/simple-pokemon';
import Image from 'next/image';
import { IoHeartOutline, IoHeart } from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from '@/store';
import { toggleFavorite } from '@/store/pokemons/pokemons';

interface Props {
    pokemon: SimplePlokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
    const dispatch = useAppDispatch();
    const { id, name } = pokemon;
    const isFavorite = useAppSelector((state) => !!state.pokemons[id]);
    const onToogle = () => {
        dispatch(toggleFavorite(pokemon));
    };
    return (
        <div className='mx-auto right-0 mt-2 w-60'>
            <div className='flex flex-col bg-white rounded overflow-hidden shadow-lg'>
                <div className='flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b'>
                    <Image
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                        alt='Pokemon'
                        width={100}
                        height={100}
                        priority={false}
                    />
                    <p className='pt-2 text-lg font-semibold text-gray-50 capitalize'>
                        {name}
                    </p>
                    <div className='mt-5'>
                        <Link
                            prefetch
                            href={`pokemons/${name}`}
                            className='border rounded-full py-2 px-4 text-xs font-semibold text-gray-100'
                        >
                            More
                        </Link>
                    </div>
                </div>
                <div className='border-b'>
                    <div
                        onClick={onToogle}
                        className='px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer'
                    >
                        <div className='text-red-600'>
                            {isFavorite ? <IoHeart /> : <IoHeartOutline />}
                        </div>
                        <div className='pl-3'>
                            <p className='text-sm font-medium text-gray-800 leading-none'>
                                {isFavorite ? 'Is favorite' : 'Set as favorite'}
                            </p>
                            <p className='text-xs text-gray-500'>
                                View your campaigns
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
