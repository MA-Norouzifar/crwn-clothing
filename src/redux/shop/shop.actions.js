import shopActionTypes from "./shop.types";
import {
  firestore,
  convertcollectionsnapshotToMap,
} from "../../firebase/firebase.utils";

// export const updateCollections = (collectionsMap) => ({
//   type: shopActionTypes.UPDATE_COLLECTIONS,
//   payload: collectionsMap,
// });
export const fetchCollectionsStart = () => ({
  type: shopActionTypes.FETCH_COLLECTION_START,
});

export const fetchCollectionsSuccess = (collectionMap) => ({
  type: shopActionTypes.FETCH_COLLECTION_SUCCES,
  payload: collectionMap,
});
export const fetchCollectionsFailure = (errorMessage) => ({
  type: shopActionTypes.fetchCollectionsFailure,
  payload: errorMessage,
});

//this is going to the actual function that we pass into our components
// to begin this process
export const fetchCollectionsAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());
    collectionRef.get().then((snapshop) => {
      //console.log({'snapshop':snapshop});
      const collectionMap = convertcollectionsnapshotToMap(snapshop);
      dispatch(fetchCollectionsSuccess(collectionMap));
    }).catch(error=>dispatch(fetchCollectionsFailure(error.message)));
  };
};
