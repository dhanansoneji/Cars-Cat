// Imports
import {USER, RESET_AUTH} from '_actions/actionType';
// Initial State
const initialState = {
  auth: {},
};
// Reducers (Modifies The State And Returns A New State)
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER: {
      return {
        ...state,
        auth: action.auth,
      };
    }
    case RESET_AUTH: {
      return {
        ...state,
        auth: {},
      };
    }
    // Default
    default: {
      return state;
    }
  }
};
// Exports
export default authReducer;
