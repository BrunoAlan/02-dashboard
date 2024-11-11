import { Pokemon } from '@/pokemons';

interface Props {
    params: { id: string };
}

const getPokemon = async (id: string): Promise<Pokemon> => {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
        cache: 'force-cache',
    }).then((response) => response.json());
    return pokemon;
};

export default async function PokemonPage({ params }: Props) {
    const pokemon = await getPokemon(params.id);
    return (
        <div>
            <h1>Pokemon {params.id}</h1>
            <pre>{JSON.stringify(pokemon, null, 2)}</pre>
        </div>
    );
}
