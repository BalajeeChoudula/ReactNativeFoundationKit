import { all, fork } from 'redux-saga/effects';
import watchSignUpSaga from './saga/auth/singUpSaga';

// Root saga
export default function* rootSaga() {
    yield all([
        fork(watchSignUpSaga),
        // Add other sagas here as your application grows
    ]);
}
