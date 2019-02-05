import * as actionTypes from "./actionsTypes";

export const deleteProduct = (product) => {
  return {
    type: actionTypes.DELETE_PRODUCT,
    product: product
  }
};