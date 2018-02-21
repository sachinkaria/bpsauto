import axios from 'axios';
import { errorHandler, successHandler } from '../public';
import { UPDATE_RESERVATIONS, RESERVATION_CREATED, UPDATE_DATE_SELECTED, UPDATE_TIME_SLOTS, UPDATE_DATE_CLICKED } from '../types';

export function create(reservation) {
  return function (dispatch) {
    axios.post('/api/reservations', reservation)
      .then(() => {
        dispatch({ type: RESERVATION_CREATED, payload: true });
        successHandler(dispatch, 'Your booking was successfully created.');
      })
      .catch((error) => {
        errorHandler(dispatch, error.response);
      });
  };
}

export function getAvailableSlots(date) {
  return function (dispatch) {
    axios.get(`/api/reservations/${date}/slots`)
      .then((response) => {
        dispatch({ type: UPDATE_DATE_CLICKED, payload: true });
        dispatch({ type: UPDATE_TIME_SLOTS, payload: response.data });
        setTimeout(() => {
          dispatch({ type: UPDATE_DATE_CLICKED, payload: false });
        }, 500);
      })
      .catch((error) => {
        errorHandler(dispatch, error.response);
      });
  };
}

export function list(date) {
  return function (dispatch) {
    axios.get(`/api/reservations/${date}`)
      .then((response) => {
        dispatch({ type: UPDATE_DATE_SELECTED, payload: date });
        dispatch({ type: UPDATE_RESERVATIONS, payload: response.data });
      })
      .catch((error) => {
        errorHandler(dispatch, error.response);
      });
  };
}
