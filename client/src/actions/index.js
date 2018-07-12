import { USER_SIGNUP } from './types';

export function userSignup(userData) {
  return {
    type: USER_SIGNUP,
    payload: userData
  }
}