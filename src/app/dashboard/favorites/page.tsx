import { FavoritesPokemons } from '@/pokemons';

export const metadata = {
    title: '151 Pokemon List',
    description: 'List of 151 pokemons',
};

export default async function PokemonsPage() {
    return (
        <div className='flex flex-col'>
            <span className='text-5xl my-2'>
                Favorites pokemons{' '}
                <small className='text-blue-500'>global state</small>
            </span>
            <FavoritesPokemons />
        </div>
    );
}
