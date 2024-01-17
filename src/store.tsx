import { configureStore } from '@reduxjs/toolkit';
import rootReducerEg from './components/redux/rootReducerEg';
import productSaga from './components/redux/productSaga';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducerEg,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(productSaga);

export default store;
