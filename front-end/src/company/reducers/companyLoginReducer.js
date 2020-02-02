import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE} from '../actions' 

const initialState = {
error: '',
loggingIn: false
}

export const companyLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: '',
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        error: ''
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      };


    default: return state;
  }
}

