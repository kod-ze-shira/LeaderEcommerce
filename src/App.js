import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Wrap from './components/wrap.component';
import { Provider } from 'react-redux';
import store from './redux/store'
import Login from "./components/login";
import Home from "./components/home"


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/edit">
              <Wrap></Wrap>
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
