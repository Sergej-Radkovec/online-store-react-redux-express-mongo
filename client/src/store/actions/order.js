import * as actionTypes from './actionsTypes';

export const addProductInOrder = (product) => {
  console.log(product);
  return {
    type: actionTypes.ADD_PRODUCT_ORDER,
    product
  }
};

export const deleteProductOrder = (product) => {
  console.log(product);
  return {
    type: actionTypes.DELETE_PRODUCT_ORDER,
    product
  }
};