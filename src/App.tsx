import React, { ReactElement } from "react";
import { Route, Link, Switch } from "react-router-dom";

import Home from "./pages/Home";
import SearchPage from './pages/SearchPage'
import Page404 from './pages/Page404'
import Detail from './pages/Detail'

import "./css/index.css";
import Header from "./components/Header";
import { useAppSelector } from "./redux/hooks";

export default function App(): ReactElement {
 
  return (
    <div className="app">
      <Header />
      <Link className="logo" to="/">LOGO</Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/searchgifs/:keyword/:rating?" component={SearchPage} />
        <Route path="/searchstickers/:keyword/:rating?" component={SearchPage} />
        <Route path="/giforsticker/:id" component={Detail} />
        <Route path="/login" component={Home} />
        <Route path="/register" component={Home} />
        <Route path="*" component={Page404} />
      </Switch>
    </div>
  );
}
