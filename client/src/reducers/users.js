import { USER_SIGNUP } from 'actions/types'

export default function(state = [], action) {
  switch (action.type) {
    case USER_SIGNUP:
      return [...state, action.payload];
    default:
      return state;
  }
}