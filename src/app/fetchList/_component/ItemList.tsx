'use client';

import { useState } from 'react';
import { getItemList } from '../../../api/commonApi';

interface IItemList {
  defaultItemList: unknown;
}

const ItemList: React.FC<IItemList> = ({ defaultItemList }) => {
  const [itemList, setItemList] = useState(defaultItemList);
  const [currentPage, setCurrentPage] = useState(0);

  async function handleLoadMore() {
    const res = await getItemList(100, 100 * (currentPage + 1));
    setItemList(res.data.results);
    setCurrentPage(prev => prev + 1);
  }

  return (
    <div>
      <button onClick={handleLoadMore}> Load More </button>

      {itemList.map((item, idx) => (
        <p key={idx}>
          <span>
            {idx} {item.name}
          </span>
          <br />
          <span>{item.url}</span>
        </p>
      ))}
    </div>
  );
};

export default ItemList;
