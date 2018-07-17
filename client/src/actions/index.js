import { USER_SIGNUP, AUTH_USER, AUTH_ERROR } from './types';
import axios from 'axios';

// export function userSignup(userData) {
//   return {
//     type: USER_SIGNUP,
//     payload: userData
//   }
// }

export const signup = formProps => async dispatch => {
  try {
    const response = axios.post('http://localhost:3090/signup', formProps);
    dispatch({ type: AUTH_USER, payload: response.data.token });
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Email in use' })
  }
}