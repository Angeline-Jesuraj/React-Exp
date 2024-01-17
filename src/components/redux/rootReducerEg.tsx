import { combineReducers } from 'redux';
import cardDataReducer from './reducer';
import productDataReducer from './productReducer';

const rootReducerEg = combineReducers({
  cardData: cardDataReducer,
  productData: productDataReducer,
});

export default rootReducerEg;
