import * as actionTypes from "./actionsTypes";

export const deleteProduct = (product) => {
  console.log(product);
  return {
    type: actionTypes.DELETE_PRODUCT,
    product
  }
};

export const addProduct = (product) => {
  return {
    type: actionTypes.ADD_PRODUCT,
    product
  }
};
