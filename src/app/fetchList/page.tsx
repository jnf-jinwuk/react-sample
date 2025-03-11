'use server';

import { getItemList } from '../../api/commonApi';
import PokemonList from './_component/ItemList';

const page = async () => {
  const itemList = await getItemList(100, 0);
  return (
    <div>
      <PokemonList defaultItemList={itemList.data.results} />
    </div>
  );
};
export default page;
