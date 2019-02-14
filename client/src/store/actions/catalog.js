import * as actionTypes from "./actionsTypes";

export const deleteProduct = (product) => {
  return {
    type: actionTypes.DELETE_PRODUCT,
    product: product
  }
};

export const addProduct = (product) => {
  return {
    type: actionTypes.ADD_PRODUCT,
    product: product
  }
};
