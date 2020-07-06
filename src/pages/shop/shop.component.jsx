import React from "react";
import {Route} from 'react-router-dom'
import CollectionOverView from "../../components/collections-overview/collections-overview.comonent";
import CollectionPage from '../collection/collection.component'
//Note: Route in App.js automaticaly passes those three object in to our component as prompts
//we get match, location and history and we want match because we want to display path
const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverView} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
