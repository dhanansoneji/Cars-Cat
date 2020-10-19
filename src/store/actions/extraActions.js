// Imports
import {IS_LOADING, RESET_USER} from './actionType';

// Loading
export const isLoading = (trueFalse) => ({
  type: IS_LOADING,
  isLoading: trueFalse,
});

// Reset Data
export const resetUser = () => ({
  type: RESET_USER,
});
