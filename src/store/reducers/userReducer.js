// Imports
import {
  ADD_USER,
  DELETE_USER,
  ADD_CAT,
  EDIT_CAT,
  DELETE_CAT,
  RESET_USER,
} from '_actions/actionType';
// Initial State
const initialState = {
  users: [],
};
// Reducers (Modifies The State And Returns A New State)
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      let arr = state.users;
      arr.push({name: action.user, cats: []});
      return {
        ...state,
        users: arr,
      };
    }
    case DELETE_USER: {
      let arr = state.users;
      arr.splice(action.users_id, 1);
      return {
        ...state,
      };
    }
    case ADD_CAT: {
      let arr = state.users[action.user_id].cats;
      arr.push({...action.cat});
      return {
        ...state,
      };
    }
    case EDIT_CAT: {
      let arr = state.users[action.user_id].cats;
      arr[action.cat_id] = action.cat;
      return {
        ...state,
      };
    }
    case DELETE_CAT: {
      let arr = state.users[action.user_id].cats;
      arr.splice(action.cat_id, 1);
      return {
        ...state,
      };
    }
    case RESET_USER: {
      return initialState;
    }
    // Default
    default: {
      return state;
    }
  }
};
// Exports
export default userReducer;
