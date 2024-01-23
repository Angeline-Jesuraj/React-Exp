import { configureStore } from '@reduxjs/toolkit';
    import rootReducerEg from './components/redux/rootreducer';
import productSaga from './components/redux/productsaga';
import createSagaMiddleWare from 'redux-saga';
const sagaMiddleWare = createSagaMiddleWare();
const store = configureStore({
  reducer:rootReducerEg,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(sagaMiddleWare),
});

sagaMiddleWare.run(productSaga)
export default store;
