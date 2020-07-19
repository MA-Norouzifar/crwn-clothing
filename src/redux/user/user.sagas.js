import { takeLatest, put, all, call } from "redux-saga/effects";

import UserActionTypes from "./user.types";
import { googleSignInSuccess, googleSignInFailure } from "./user.actions";

import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from "../../firebase/firebase.utils";

//we want actually access the vale that gets returend when the success happen
//with our side and with pop up
export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    console.log(user);
    const userRef = yield call(createUserProfileDocument, user);
    console.log(userRef);
    const userSnapshot = yield userRef.get();
    console.log('userSnapshot',userSnapshot);
    yield put(
      googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
