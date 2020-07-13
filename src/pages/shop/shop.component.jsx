import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
//selectIsCollectionsLoaded == some times when we select a collection
// and refresh a page we get a error 'title' not define
//because defualt value is null for colection for this reasone  we create new selector
// we can use UNSAFE_componentWillMount() to but is unsafe
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selectors";
// import {
//   firestore,
//   convertcollectionsnapshotToMap,
// } from "../../firebase/firebase.utils";

//import { updateCollections } from "../../redux/shop/shop.actions";
import { fetchCollectionsAsync } from "../../redux/shop/shop.actions";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverViewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  // UNSAFE_componentWillMount(){

  // }
  // state = {
  //   loading: true,
  // };

  // unsubscribeFromSnapsshop = null;

  componentDidMount() {
    //Redux Thunk
    const { fetchCollectionsAsync } = this.props;
    fetchCollectionsAsync();
    // const { updateCollections } = this.props;
    // const collectionRef = firestore.collection("collections");
    //rest API
    // fetch(
    //   "https://firestore.googleapis.com/v1/projects/crwn-db-a5591/databases/(default)/documents/connections"
    // )
    //   .then((respone) => respone.json())
    //   .then((collections) => console.log(collections));
    // permise pattern
    // collectionRef.get().then((snapshop) => {
    //   //console.log({'snapshop':snapshop});
    //   const collectionMap = convertcollectionsnapshotToMap(snapshop);
    //   //console.log(collectionMap);
    //   updateCollections(collectionMap);
    //   this.setState({ loading: false });
    // });
    //observable pattern
    // this.unsubscribeFromSnapsshop = collectionRef.onSnapshot(
    //   async (snapshop) => {
    //     //console.log({'snapshop':snapshop});
    //     const collectionMap = convertcollectionsnapshotToMap(snapshop);
    //     //console.log(collectionMap);
    //     updateCollections(collectionMap);
    //     this.setState({ loading: false });
    //   }
    // );
  }

  render() {
    const { match, isCollectionFetching, isCollectionsLoaded } = this.props;
    //const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverViewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
            // <CollectionOverViewWithSpinner isLoading={loading} {...props} />
          )}
        />
        {/* <Route exact path={`${match.path}`} component={CollectionsOverview} /> */}
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionsLoaded}
              {...props}
            />
            // <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
        {/* <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        /> */}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded,
});
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync()),
});
// const mapDispatchToProps = (dispatch) => ({
//   updateCollections: (collectionsMap) =>
//     dispatch(updateCollections(collectionsMap)),
// });

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
