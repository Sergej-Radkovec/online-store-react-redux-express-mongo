import { FETCH_USER, LOGOUT } from "../actions/actionsTypes";

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.profile;
    case LOGOUT:
      return null;
    default:
      return state;
  }
}