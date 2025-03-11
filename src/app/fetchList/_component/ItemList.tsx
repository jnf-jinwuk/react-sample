'use client';

import { useState } from 'react';
import { usePokemonListSlice } from '@/store/slice/pokemonList';
import useMount from '@/lib/hook/useMount';

interface IProps {
  defaultItemList: unknown;
}

const PokemonList: React.FC<IProps> = ({ defaultItemList }) => {
  const [pokemonList, { fetchPokemonList }] =
    usePokemonListSlice(defaultItemList);
  const [currentPage, setCurrentPage] = useState(0);
  const isMount = useMount();

  async function handleLoadMore() {
    await fetchPokemonList({ amount: 100, offset: 100 * (currentPage + 1) });
    setCurrentPage(prev => prev + 1);
  }

  return (
    <div>
      <button onClick={handleLoadMore}> Load More </button>

      {isMount &&
        pokemonList?.map((pokemon, idx) => (
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
