import { combineReducers } from '@reduxjs/toolkit';
import signupSlice  from './slices/auth/signupSlice'; // Import other slices as needed
// Import your reducers here


export const rootReducer = combineReducers({
    signup: signupSlice,
    // Add other reducers here
});
