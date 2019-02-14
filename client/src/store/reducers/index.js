import { combineReducers } from 'redux';
import catalog from "./catalog";
import order from "./order";
import auth from "./auth";

export default combineReducers({
  catalog,
  order,
  auth
});