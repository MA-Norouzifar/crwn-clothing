import { takeEvery } from "redux-saga/effects";

import shopActionTypes from "./shop.types";

export function* fetchCollectionAsync() {}

export function* fetchCollectionStart() {
  yield takeEvery(shopActionTypes.FETCH_COLLECTION_START);
}
