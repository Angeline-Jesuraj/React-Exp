import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_TO_CART } from "./constant";

interface AddToCartAction {
  type: typeof ADD_TO_CART;
  data: any; // Adjust the type according to your data structure
}

interface RemoveToCartAction {
  type: typeof REMOVE_TO_CART;
  data: any; // Adjust the type according to your data structure
}

interface EmptyToCartAction {
  type: typeof EMPTY_TO_CART;
}

export const addToCart = (data: any): AddToCartAction => {
  console.warn("action is called", data);
  return {
    type: ADD_TO_CART,
    data,
  };
};

export const removeToCart = (data: any): RemoveToCartAction => {
  console.warn("remove action is called", data);
  return {
    type: REMOVE_TO_CART,
    data,
  };
};

export const emptyToCart = (): EmptyToCartAction => {
  console.warn("empty action is called");
  return {
    type: EMPTY_TO_CART,
  };
};
 export type CartActionTypes = AddToCartAction | RemoveToCartAction | EmptyToCartAction;
