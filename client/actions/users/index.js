import axios from 'axios';
import { browserHistory } from 'react-router';
import { UPDATE_USER, PROCESSING_FILE_UPLOAD, COMPLETED_FILE_UPLOAD } from '../types';
import { errorHandler, successHandler } from '../public';

export function updateUser(user, url, showSuccess) {
  const AUTH_HEADERS = { headers: { Authorization: localStorage.getItem('token') } };
  return function (dispatch) {
    axios.put('/api/users', user, AUTH_HEADERS)
      .then((response) => {
        dispatch({ type: UPDATE_USER, payload: response.data });
        if (showSuccess) successHandler(dispatch, 'Your changes have been successfully saved.');
        if (url) browserHistory.push(url);
      })
      .catch((error) => {
        errorHandler(dispatch, error.response);
      });
  };
}

export function getCurrentUser() {
  const AUTH_HEADERS = { headers: { Authorization: localStorage.getItem('token') } };
  return function (dispatch) {
    axios.get('/api/users/me', AUTH_HEADERS)
      .then((response) => {
        dispatch({ type: UPDATE_USER, payload: response.data });
      })
      .catch(() => {
        errorHandler(dispatch, 'Sorry there is a problem getting your account details. Please sign in and try again.');
      });
  };
}

export function updatePassword(password, showSuccess) {
  const AUTH_HEADERS = { headers: { Authorization: localStorage.getItem('token') } };
  return function (dispatch) {
    axios.put('/api/users/password', password, AUTH_HEADERS)
      .then(() => {
        if (showSuccess) successHandler(dispatch, 'Your password has been updated.');
      })
      .catch(() => {
        errorHandler(dispatch, 'There was a problem changing your password. Please try again.');
      });
  };
}

