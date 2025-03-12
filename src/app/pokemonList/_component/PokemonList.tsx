'use client';

import { useState } from 'react';
import { usePokemonListSlice } from '@/store/slice/pokemonList';
import useMount from '@/lib/hook/useMount';

interface IProps {
  defaultItemList: unknown;
}

const PokemonList: React.FC<IProps> = ({ defaultItemList }) => {
  const { fetchPokemonList, pokemonList } =
    usePokemonListSlice(defaultItemList);
  const [currentPage, setCurrentPage] = useState(0);
  const isMount = useMount();

  async function handleLoadMore() {
    await fetchPokemonList({ amount: 100, offset: 100 * (currentPage + 1) });
    setCurrentPage(prev => prev + 1);
  }

  console.log('pokemonList ↓');
  console.dir(pokemonList);
  console.log('isMount =>', isMount);
  console.log('pokemonList.status =>', pokemonList.status);

  return (
    <div>
      <button
        onClick={handleLoadMore}
        disabled={pokemonList.status === 'pending' ? true : null}
      >
        {pokemonList.status === 'pending' ? 'loading...' : 'load more'}
      </button>

      {isMount &&
        pokemonList.data.map((pokemon, idx) => (
          <p key={idx}>
            <span>
              {idx} {pokemon.name}
            </span>
            <br />
            <span>{pokemon.url}</span>
          </p>
        ))}
    </div>
  );
};

export default PokemonList;
