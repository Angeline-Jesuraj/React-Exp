import { takeEvery, put } from 'redux-saga/effects';
import { Action } from 'redux';
import { PRODUCT_LIST, SET_PRODUCT_LIST } from './constant';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  color: string;
  photo: string;
  brand: string;
}

interface SetProductListAction extends Action {
  type: typeof SET_PRODUCT_LIST;
  data: Product[];
}

function* getProducts() {
  try {
    const data: Product[] = yield fetch('http://localhost:3500/products').then((response) => response.json());
    console.warn("get product saga called", data);
    yield put<SetProductListAction>({ type: SET_PRODUCT_LIST, data });
  } catch (error) {
    console.error("Error in getProducts saga:", error);
  }
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
}

export default productSaga;
