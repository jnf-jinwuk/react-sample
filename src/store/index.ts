import { useSelector } from 'react-redux'
import { TState } from './store'

const useAppSelector = <TSelected>(
  selector: (state: TState) => TSelected,
): TSelected => useSelector(selector)

export default useAppSelector
