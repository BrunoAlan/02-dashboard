import { PokemonCard, SimplePlokemon } from '@/pokemons';

interface Props {
    pokemons: SimplePlokemon[];
}
export const PokemonGrid = ({ pokemons }: Props) => {
    return (
        <div className='flex flex-wrap gap-10 items-center justify-center'>
            {pokemons.map((pokemon) => (
                <div key={pokemon.id} className='flex flex-col items-center'>
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                </div>
            ))}
        </div>
    );
};
