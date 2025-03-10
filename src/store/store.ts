import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'

const makeStore = () => {
  return configureStore({ reducer: rootReducer })
}

export default makeStore
export type TStore = ReturnType<typeof makeStore>
export type TState = ReturnType<TStore['getState']>
export type TDispatch = TStore['dispatch']
