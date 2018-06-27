import { USER_SIGNUP } from 'actions/types';

export function userSignup(userData) {
  return {
    type: USER_SIGNUP,
    payload: userData
  }
}