import ItemList from './_component/ItemList'
import { getItemList } from '../../api/serverApi'

const page = async () => {
  const itemList = await getItemList(100, 0)

  return (
    <div>
      <ItemList defaultItemList={itemList.data.results} />
    </div>
  )
}
export default page
