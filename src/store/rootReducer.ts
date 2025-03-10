import { combineReducers } from 'redux'
import counterReducer from './slice/counter'
import colorReducer from './slice/color'

const rootReducer = combineReducers({
  counter: counterReducer,
  color: colorReducer,
})

export default rootReducer
