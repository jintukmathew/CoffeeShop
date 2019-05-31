import { UPDATE_USER_DATA } from './LoginAction';

const initialState =  {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_DATA:
      return {
        ...state,
        user: action.data
      };
    default:
      return state
  }
}