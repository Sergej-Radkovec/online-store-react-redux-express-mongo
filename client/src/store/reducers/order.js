import * as actionTypes from '../actions/actionsTypes';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DELETE_PRODUCT_ORDER: {
      const newState = [
        ...state
      ];
      newState.splice(action.product, 1);
      return newState
    }
    case actionTypes.ADD_PRODUCT_ORDER: {
      return [
        ...state,
        action.product
      ];
    }
    default: return state;
  }
};

export default reducer;