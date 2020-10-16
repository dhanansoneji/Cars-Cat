// Imports
import {USER} from '_actions/actionType';

// User
export const userAction = (response) => ({
  type: USER,
  auth: response,
});
export const onUser = (data, callback) => (dispatch, _) => {
  console.log('User Data : ', data);
  dispatch(userAction(data));
  callback(data);
};
