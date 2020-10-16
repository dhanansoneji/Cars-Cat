// Imports: Dependencies
import {combineReducers} from 'redux';
// Imports: Reducers
import authReducer from '_reducers/authReducer';
import extraReducer from '_reducers/extraReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  authReducer,
  extraReducer,
});
// Exports
export default rootReducer;
