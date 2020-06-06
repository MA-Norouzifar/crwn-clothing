import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const HatPage = (props) => (
  
  <div>
  <Link to='/'>home</Link>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatPage} />
      </Switch>
    </div>
  );
}

export default App;
