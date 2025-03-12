'use client';

import useMount from '@/lib/hook/useMount';
import { useAbilityListSlice } from '@/store/slice/abilityList';
import { useState } from 'react';

interface AbilityListProps {
  defaultData: any[];
}

const AbilityList: React.FC<AbilityListProps> = ({ defaultData }) => {
  const { abilityList, fetchAbilityList } = useAbilityListSlice(defaultData);
  const [currentPage, setCurrentPage] = useState(0);
  const isMount = useMount();

  async function handleLoadMore() {
    await fetchAbilityList({ amount: 10, offset: 10 * (currentPage + 1) });
    setCurrentPage(prev => prev + 1);
  }

  return (
    <div>
      <button
        onClick={handleLoadMore}
        disabled={abilityList.status !== 'loaded'}
      >
        {abilityList.status !== 'loaded' ? 'loading...' : 'load more'}
      </button>
      {isMount &&
        abilityList.data?.map((ability, idx) => (
          <p key={idx}>
            <span>
              {idx}. {ability.name}
            </span>
            <br />
            <span> {ability.url} </span>
          </p>
        ))}
    </div>
  );
};

export default AbilityList;
