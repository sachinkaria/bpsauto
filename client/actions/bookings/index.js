import axios from 'axios';
import { errorHandler, successHandler } from '../public';
import { UPDATE_TIME_SLOTS } from '../types';

export function create(reservation) {
  return function (dispatch) {
    axios.post('/api/reservations', reservation)
      .then((response) => {
        console.log(response);
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
        dispatch({ type: UPDATE_TIME_SLOTS, payload: response.data });
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
        console.log(response);
      })
      .catch((error) => {
        errorHandler(dispatch, error.response);
      });
  };
}
