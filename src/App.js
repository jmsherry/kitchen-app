import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import { Context as NavDrawerContext } from "./contexts/navdrawer.context";

import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Recipes from "./pages/Recipes/Recipes";
import Cupboard from "./pages/Cupboard/Cupboard";
import Meals from "./pages/Meals/Meals";
import Calendar from "./pages/Calendar/Calendar";

function App() {
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  return (
    <div className="App">
      <NavDrawerContext.Provider value={[navDrawerOpen, setNavDrawerOpen]}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path="/recipes" component={Recipes} />
            <Route path="/cupboard" component={Cupboard} />
            <Route path="/meals" component={Meals} />
            <Route path="/calendar" component={Calendar} />
          </Switch>
        </Router>
      </NavDrawerContext.Provider>
    </div>
  );
}

export default App;
