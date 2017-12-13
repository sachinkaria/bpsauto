import axios from 'axios';
import { errorHandler, successHandler } from '../public';

export function createBooking(booking) {
  return function (dispatch) {
    axios.put('/api/bookings', booking)
      .then((response) => {
        console.log(response);
        successHandler(dispatch, 'Your booking was successfully created.')
      })
      .catch((error) => {
        errorHandler(dispatch, error.response);
      });
  };
}
