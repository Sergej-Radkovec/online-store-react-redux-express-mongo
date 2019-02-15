import axios from 'axios';
import { FETCH_USER, LOGOUT } from "./actionsTypes";

export const fetchUser = (data) => async dispatch => {
  const res = await axios.post('/api/auth', data.profileObj);
  dispatch({ type: FETCH_USER, profile: res.data });
};

export const logout = () => ({ type: LOGOUT });

