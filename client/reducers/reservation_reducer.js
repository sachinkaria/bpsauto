import { UPDATE_RESERVATIONS } from '../actions/types';

const INITIAL_STATE = { list: null };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_RESERVATIONS:
      return { ...state, list: action.payload };
    default:
      break;
  }
  return state;
}
