import { getAbilityList } from '@/api/commonApi';
import AbilityList from './_component/AbilityList';

const AbilityListPage = async () => {
  const res = await getAbilityList(10, 0);
  return (
    <div>
      <AbilityList defaultData={res.data.results} />
    </div>
  );
};
export default AbilityListPage;
