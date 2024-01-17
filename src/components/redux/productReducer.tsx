import { SET_PRODUCT_LIST } from './constant';

interface ProductItem {
  id: number;
  name: string;
  category: string;
  price: number;
  color: string;
  brand: string;
  photo: string;
}

interface ProductDataState {
  productData: ProductItem[];
}

const initialState: ProductDataState = {
  productData: [],
};

type ProductDataActionTypes = {
  type: typeof SET_PRODUCT_LIST;
  data: ProductItem[];
};

const productDataReducer = (state: ProductDataState = initialState, action: ProductDataActionTypes) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      console.warn('Product list called', action);
      return { ...state, productData: [...action.data] };
    default:
      return state;
  }
};

export default productDataReducer;
