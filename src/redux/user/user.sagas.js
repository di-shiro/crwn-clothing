import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from './user.types';

import { signInSuccess, signInFailure } from './user.actions';

import {
  auth,
  googleProvider,
  createUserProfileDocument
} from '../../firebase/firebase.utils';

export function* getSnapshotFromUserAuth(userAuth) {
  try {
    console.log('( 1 )');
    const userRef = yield call(createUserProfileDocument, userAuth);
    console.log('( 2 )');
    const userSnapshot = yield userRef.get();
    console.log('( 3 )');
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    console.log('<?> ( 4 )  -> ', userRef);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    console.log('( 0 )');
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    console.log('<?> emailSignInStart -- user.sagas.js', email, password);

    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* userSaga() {
  yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
}
