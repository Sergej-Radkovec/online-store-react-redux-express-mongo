import * as actionTypes from '../actions/actionsTypes';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT_ORDER: {
      return [
        ...state,
        {
          product: action.product,
        }
      ];
    }
    default: return state;
  }
};

export default reducer;