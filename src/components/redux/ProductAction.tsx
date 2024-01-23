import { PRODUCT_LIST } from "./constant";
import { Dispatch } from "redux";

export const productList = () => {
  // let data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  // data = await data.json();
  console.warn("product action is called");
  return (dispatch: Dispatch) => {
    dispatch({
      type: PRODUCT_LIST,
    });
  };
};
