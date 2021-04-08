import React from "react";
import { Route, Switch } from "react-router-dom";

import './App.less';
import Navbar from "./navbar/Navbar";

import Flightsearch from "./pages/Flightsearch";
import Home from "./pages/Home";

function App() {
  return (
    <>
    <Navbar />
    <div className="header-margin">
      <Switch>
        <Route exact path ="/" component={Home} />
        <Route path ="/flight-search" component={Flightsearch} />
      </Switch>
    </div>
        
    </>
  );
}

export default App;
