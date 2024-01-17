import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_TO_CART } from './constant';

interface CartItem {
  // Define the type for a single cart item
  // Adjust these properties based on your actual data structure
  id: number;
  name: string;
  // Add other properties as needed
}

interface CartDataState {
  // Define the type for the state managed by this reducer
  // It should match the shape of your state in the Redux store
  cardData: CartItem[];
}

// Define the initial state if needed
const initialState: CartDataState = {
  cardData: [],
};

const cardDataReducer = (state: CartDataState = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.warn('ADD To card condition called reducer called', action);
      return { ...state, cardData: [action.data, ...state.cardData] };
    case REMOVE_TO_CART:
      console.warn('remove To card condition called reducer called', action);
      const remainingItems = state.cardData.filter((item) => item.id !== action.data);
      return { ...state, cardData: [...remainingItems] };
    case EMPTY_TO_CART:
      console.warn('empty To card condition called reducer called', action);
      return { ...state, cardData: [] };
    default:
      return state;
  }
};

export default cardDataReducer;
