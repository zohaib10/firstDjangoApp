import { GET_ERRORS } from '../actions/types';

const initalState = {
  message: {},
  status: null
};

export default function(state = initalState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        message: action.payload.message,
        status: action.payload.status
      };
      break;
    default:
      return state;
  }
}
