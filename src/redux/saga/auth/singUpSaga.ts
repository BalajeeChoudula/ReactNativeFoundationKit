import { call, put, takeLatest } from 'redux-saga/effects';

// Action Types
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

// Mock API function
function mockSignUpApi(payload: { email: string; password: string }) {
    return new Promise<{ userId: string }>((resolve, reject) => {
        setTimeout(() => {
            if (payload.email && payload.password) {
                resolve({ userId: 'mock-user-id' });
            } else {
                reject(new Error('Invalid signup data'));
            }
        }, 1000);
    });
}

// Saga Worker
function* signUpSaga(action: { type: string; payload: { email: string; password: string } }) {
    try {
        const response: { userId: string } = yield call(mockSignUpApi, action.payload);
        yield put({ type: SIGN_UP_SUCCESS, payload: response });
    } catch (error: any) {
        yield put({ type: SIGN_UP_FAILURE, payload: error.message });
    }
}

// Saga Watcher
export default function* watchSignUpSaga() {
    yield takeLatest(SIGN_UP_REQUEST, signUpSaga);
}