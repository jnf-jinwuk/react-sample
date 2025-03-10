import { useDispatch, useSelector } from 'react-redux'
import { TDispatch, TState } from './store'

const useAppSelector = <TSelected>(
  selector: (state: TState) => TSelected,
): TSelected => useSelector(selector)

const useAppDispatch = useDispatch<TDispatch>

export { useAppSelector, useAppDispatch }
