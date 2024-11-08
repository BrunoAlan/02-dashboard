import { PokemonResponse, SimplePlokemon } from '@/app/pokemons';
import Image from 'next/image';

const getPokemon = async ({
    limit = 20,
    offset = 0,
}): Promise<SimplePlokemon[]> => {
    const data: PokemonResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    ).then((response) => response.json());

    const pokemons = data.results.map((pokemon) => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,
    }));

    return pokemons;
};

export default async function PokemonsPage() {
    const pokemons = await getPokemon({ limit: 100 });
    return (
        <div className='flex flex-col'>
            <div className='flex flex-wrap gap-10 items-center justify-center'>
                {pokemons.map((pokemon) => (
                    <div
                        key={pokemon.id}
                        className='flex flex-col items-center'
                    >
                        <Image
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                            alt='Pokemon'
                            width={100}
                            height={100}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
