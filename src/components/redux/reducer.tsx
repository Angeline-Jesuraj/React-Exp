import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_TO_CART } from './constant';

interface Action {
  type: string;
  data: any;
}

const cardData = (data: any[] = [], action: Action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.warn('ADD To card condition called reducer called', action);
      return [action.data, ...data];
    case REMOVE_TO_CART: {
      console.warn('remove To card condition called reducer called', action);
      const remainingItems = data.filter((item) => item.id !== action.data);
      return [...remainingItems];
    }
    case EMPTY_TO_CART:
      console.warn('empty To card condition called reducer called', action);
      data = [];
      return data;
    default:
      return data;
  }
};

export default cardData;
