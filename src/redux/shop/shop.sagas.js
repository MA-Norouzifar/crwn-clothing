import { takeLatest, call, put } from "redux-saga/effects";
import {
  firestore,
  convertcollectionsnapshotToMap,
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";
import shopActionTypes from "./shop.types";

export function* fetchCollectionAsync() {
  console.log("I am Start");
  try {
    const collectionRef = firestore.collection("collections");
    // dispatch(fetchCollectionsStart()); we're not dispatching it from saga
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertcollectionsnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }

  // collectionRef
  //   .get()
  //   .then((snapshop) => {
  //     //console.log({'snapshop':snapshop});
  //     const collectionMap = convertcollectionsnapshotToMap(snapshop);
  //     dispatch(fetchCollectionsSuccess(collectionMap));
  //   })
  //   .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
}

export function* fetchCollectionStart() {
  yield takeLatest(shopActionTypes.FETCH_COLLECTION_START, fetchCollectionAsync);
}
