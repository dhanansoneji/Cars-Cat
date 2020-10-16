// Imports
import {IS_LOADING, RESET_AUTH} from './actionType';
import {} from '_services';

// Loading
export const isLoading = (trueFalse) => ({
  type: IS_LOADING,
  isLoading: trueFalse,
});

// Reset Data
export const resetAuth = () => ({
  type: RESET_AUTH,
});
