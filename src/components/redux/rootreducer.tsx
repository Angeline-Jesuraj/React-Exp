import { combineReducers, Reducer } from 'redux';
import cardData from './reducer';
import productData from './ProductReducer';

const rootReducerEg= combineReducers({
  cardData,
  productData
});

export default rootReducerEg;
