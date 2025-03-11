/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { pokemonListActions } from '@/store/slice/pokemonList';

interface IProps {
  defaultItemList: unknown;
}

const PokemonList: React.FC<IProps> = ({ defaultItemList }) => {
  const dispatch = useAppDispatch();
  const pokemonList = useAppSelector(state => state.pokemonList);
  const { initialize, fetchPokemonList } = pokemonListActions;

  const [currentPage, setCurrentPage] = useState(0);

  async function handleLoadMore() {
    await dispatch(
      fetchPokemonList({ amount: 100, offset: 100 * (currentPage + 1) }),
    );
    setCurrentPage(prev => prev + 1);
  }

  useEffect(() => {
    if (!pokemonList) {
      dispatch(initialize(defaultItemList));
    }
  }, []);

  if (!pokemonList) {
    <p>loading</p>;
  }

  return (
    <div>
      <button onClick={handleLoadMore}> Load More </button>

      {pokemonList?.map((pokemon, idx) => (
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
