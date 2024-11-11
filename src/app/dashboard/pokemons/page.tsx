import { PokemonGrid, PokemonResponse, SimplePlokemon } from '@/pokemons';

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
            <span className='text-5xl my-2'>
                Pokemon List <small>static</small>
            </span>
            <PokemonGrid pokemons={pokemons} />
        </div>
    );
}
