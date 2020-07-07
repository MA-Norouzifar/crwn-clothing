import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import SignInAndSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import { selectCurrentUser } from "./redux/user/user.selector";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setcurrentUser } from "./redux/user/user.action";

import "./App.css";

class App extends Component {
  unsubscribeFormAuth = null;
  componentDidMount() {
    const { setcurrentUser } = this.props;
    this.unsubscribeFormAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setcurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setcurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFormAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setcurrentUser: (user) => dispatch(setcurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
