import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";

import { auth } from './firebase/firebase.utils'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null
    }
  }
  unsubscribeFormAuth = null
  componentDidMount() {
    this.unsubscribeFormAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user)
    })
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
          <Route path="/sigin" component={SignInAndSignUpPage} />
        </Switch>
      </div >
    )
  }

}

export default App;
