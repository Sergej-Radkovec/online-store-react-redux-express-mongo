import * as actionTypes from './actionsTypes';

export const addProductInOrder = (product) => {
  return {
    type: actionTypes.ADD_PRODUCT_ORDER,
    product: product
  }
};