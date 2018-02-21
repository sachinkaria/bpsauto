import { SHOW_ERROR, HIDE_ERROR, SHOW_SUCCESS, HIDE_SUCCESS, UPDATE_TIME_SLOTS, UPDATE_DATE_CLICKED } from '../actions/types';

const INITIAL_STATE = { error: null, success: null, timeSlots: null, dateClicked: false };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SHOW_ERROR:
      return { ...state, error: action.payload };
    case HIDE_ERROR:
      return { ...state, error: action.payload };
    case SHOW_SUCCESS:
      return { ...state, success: action.payload };
    case HIDE_SUCCESS:
      return { ...state, success: action.payload };
    case UPDATE_TIME_SLOTS:
      return { ...state, timeSlots: action.payload };
    case UPDATE_DATE_CLICKED:
      return { ...state, dateClicked: action.payload };
    default:
      break;
  }
  return state;
}
