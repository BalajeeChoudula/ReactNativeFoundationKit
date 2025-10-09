import { call, put, takeLatest } from 'redux-saga/effects';
import { signupRequest, signupSuccess, signupFailure } from '../../store/slices/auth/signupSlice';
import { PayloadAction } from '@reduxjs/toolkit';

// Mock API function
function mockSignUpApi(payload: { email: string; password: string }) {
    console.log('API called with:', payload);
    return new Promise<{ userId: string }>((resolve, reject) => {
        setTimeout(() => {
            if (payload.email && payload.password) {
                resolve({ userId: 'mock-user-id' });
            } else {
                reject(new Error('Invalid signup data'));
            }
        }, 2000);
    });
}

// Saga Worker
function* signUpSaga(action: PayloadAction<{ email: string; password: string }>) {
    try {
        const response: { userId: string } = yield call(mockSignUpApi, action.payload);
        yield put(signupSuccess());
    } catch (error: any) {
        yield put(signupFailure(error.message));
    }
}

// Saga Watcher
export default function* watchSignUpSaga() {
    yield takeLatest(signupRequest.type, signUpSaga);
}