import axios from 'axios';
import { errorHandler, successHandler } from '../public';

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
