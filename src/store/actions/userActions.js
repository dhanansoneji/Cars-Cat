// Imports
import {
  ADD_USER,
  DELETE_USER,
  ADD_CAT,
  EDIT_CAT,
  DELETE_CAT,
} from '_actions/actionType';

// Add User
export const addUserAction = (user) => ({
  type: ADD_USER,
  user: user,
});

// Delete User
export const deleteUserAction = (u_id) => ({
  type: DELETE_USER,
  users_id: u_id,
});

// Add Cat
export const addCatAction = (u_id, cat) => ({
  type: ADD_CAT,
  user_id: u_id,
  cat: cat,
});

// Edit Cat
export const editCatAction = (u_id, c_id, cat) => ({
  type: EDIT_CAT,
  user_id: u_id,
  cat_id: c_id,
  cat: cat,
});

// Delete Cat
export const deleteCatAction = (u_id, c_id) => ({
  type: DELETE_CAT,
  user_id: u_id,
  cat_id: c_id,
});
