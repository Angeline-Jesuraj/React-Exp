import { SET_PRODUCT_LIST } from './constant';

interface Product {
  // Adjust the type according to your data structure
  id: number;
  name: string;
  category: string;
  price: number;
  color: string;
  photo: string;
  brand: string;
}

interface SetProductListAction {
  type: typeof SET_PRODUCT_LIST;
  data: Product[];
}

const productData = (data: Product[] = [], action: SetProductListAction): Product[] => {
  console.log("Reducer called");
  switch (action.type) {
    case SET_PRODUCT_LIST:
      console.warn('Product list called', action);
      return [...action.data];
    default:
      return data;
  }
};

export default productData;
