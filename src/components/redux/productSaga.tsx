import { takeEvery, put } from 'redux-saga/effects';
import { PRODUCT_LIST, SET_PRODUCT_LIST } from './constant';

interface ProductItem {
  // Define the type for a single product item
  // Adjust these properties based on your actual data structure
  id: number;
  name: string;
  // Add other properties as needed
}

function* getProducts() {
  try {
    let data: ProductItem[] = yield fetch('http://localhost:3500/products').then((response) =>
      response.json()
    );
    console.warn("get product saga called", data);
    yield put({ type: SET_PRODUCT_LIST, data });
  } catch (error) {
    // Handle errors if needed
    console.error("Error in getProducts saga:", error);
  }
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
}

export default productSaga;
