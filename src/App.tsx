import React, { ReactElement } from "react";
import { Route, Link, Switch } from "react-router-dom";

import Home from "./pages/Home";

import "./css/index.css";
import Header from "./components/Header";

export default function App(): ReactElement {
  return (
    <div className="app">
      <Header />
      <Link to="/">LOGO</Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search/:keyword/:rating?" component={Home} />
        <Route path="/gif/:id" component={Home} />
        <Route path="/login" component={Home} />
        <Route path="/register" component={Home} />
        <Route path="*" component={Home} />
      </Switch>
    </div>
  );
}
