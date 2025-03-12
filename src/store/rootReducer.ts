import { combineReducers } from 'redux';
import counterReducer from './slice/counter';
import colorReducer from './slice/color';
import pokemonListReducer from './slice/pokemonList';
import abilityListReducer from './slice/abilityList';

const rootReducer = combineReducers({
  counter: counterReducer,
  color: colorReducer,
  pokemonList: pokemonListReducer,
  abilityList: abilityListReducer,
});

export default rootReducer;
