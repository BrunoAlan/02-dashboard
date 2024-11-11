import { Pokemon } from '@/pokemons';
import { Metadata } from 'next';

interface Props {
    params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const pokemon = await getPokemon(params.id);
    return {
        title: `#${pokemon.id} - ${pokemon.name}`,
        description: `Pokemon ${pokemon.name} page`,
    };
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
            <pre>{JSON.stringify(pokemon.name, null, 2)}</pre>
        </div>
    );
}
