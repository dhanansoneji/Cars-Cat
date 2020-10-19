// Imports: Dependencies
import {combineReducers} from 'redux';
// Imports: Reducers
import userReducer from '_reducers/userReducer';
import extraReducer from '_reducers/extraReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  userReducer,
  extraReducer,
});
// Exports
export default rootReducer;
