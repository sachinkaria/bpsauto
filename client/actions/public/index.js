import axios from 'axios';
import { LIST_CHEFS, GET_CHEF, SHOW_ERROR, HIDE_ERROR, SHOW_SUCCESS, HIDE_SUCCESS } from '../types';

export function errorHandler(dispatch, error) {
  if (error) {
    dispatch({
      type: SHOW_ERROR,
      payload: error
    });

    setTimeout(() => {
      dispatch({
        type: HIDE_ERROR,
        payload: null
      });
    }, 5000);
  }
}

export function successHandler(dispatch, message) {
  if (message) {
    dispatch({
      type: SHOW_SUCCESS,
      payload: message
    });

    setTimeout(() => {
      dispatch({
        type: HIDE_SUCCESS,
        payload: null
      });
    }, 5000);
  }
}