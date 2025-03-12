'use server';

import Link from 'next/link';
import { getItemList } from '../../api/commonApi';
import PokemonList from './_component/ItemList';

const page = async () => {
  const itemList = await getItemList(100, 0);
  return (
    <div>
      <Link href={'/'}>Go to Home</Link>
      <PokemonList defaultItemList={itemList.data.results} />
    </div>
  );
};
export default page;
