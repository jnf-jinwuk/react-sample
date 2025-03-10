import { getItemList } from '../../api/commonApi';
import ItemList from './_component/ItemList';

const page = async () => {
  const itemList = await getItemList(100, 0);
  return (
    <div>
      <ItemList defaultItemList={itemList.data.results} />
    </div>
  );
};
export default page;
