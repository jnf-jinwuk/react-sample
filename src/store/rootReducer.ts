import { combineReducers } from 'redux';
import counterReducer from './slice/counter';
import colorReducer from './slice/color';
import pokemonListReducer from './slice/pokemonList';

const rootReducer = combineReducers({
  counter: counterReducer,
  color: colorReducer,
  pokemonList: pokemonListReducer,
});

export default rootReducer;
