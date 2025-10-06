import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SignupState {
    loading: boolean;
    error: string | null;
    success: boolean;
}

const initialState: SignupState = {
    loading: false,
    error: null,
    success: false,
};

const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        signupRequest(state) {
            state.loading = true;
            state.error = null;
            state.success = false;
        },
        signupSuccess(state) {
            state.loading = false;
            state.success = true;
            state.error = null;
        },
        signupFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
        },
        resetSignupState(state) {
            state.loading = false;
            state.error = null;
            state.success = false;
        },
    },
});

export const {
    signupRequest,
    signupSuccess,
    signupFailure,
    resetSignupState,
} = signupSlice.actions;

export default signupSlice.reducer;