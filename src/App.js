import React from 'react';
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Wrap from './components/wrap.component';
import { Provider } from 'react-redux';
import store from './redux/store'
import Login from "./components/login";
import Home from "./components/home"
import { useDispatch, useSelector } from "react-redux";
import Content from "./components/content";

function App() {
  // const store1=store.getState();
  // const home = useSelector(state => state);.editHomeStoreReducer
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
            <Route path="/view">
              <h2>תצוגה</h2>
              <div>
                <Content style={{background: "#fff"}}></Content>
              </div>
              {/* <h2>{store1.editHomeStoreReducer.homeStoreDesign.ImageBorderRadiusImage}</h2> */}
              {/* {console.log("store Border Radius Images",store1.editHomeStoreReducer.homeStoreDesign.ImageBorderRadiusImage)} */}
            </Route>
            <Route path="/0">
              <Wrap></Wrap>
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
