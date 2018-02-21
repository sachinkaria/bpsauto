import { UPDATE_RESERVATIONS, UPDATE_DATE_SELECTED } from '../actions/types';

const INITIAL_STATE = { list: null, date: '' };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_RESERVATIONS:
      return { ...state, list: action.payload };
    case UPDATE_DATE_SELECTED:
      return { ...state, date: action.payload };
    default:
      break;
  }
  return state;
}
