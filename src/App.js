import React from 'react';
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Wrap from './components/wrap.component';
import { Provider } from 'react-redux';
import store from './redux/store'
import Login from "./components/login";
import StorePerUser from "./components/storePerUser";
import Home from "./components/home";
// import Nis from "./components/nis"
import Test from "./components/nis"
import Mymy from "./components/mymy"
import A from "./components/compsEditStore/editHome";
import OpenStore from "./components/openStore"
import StoreSettingsManagement from "./components/storeSettingsManagement"
import { useDispatch, useSelector } from "react-redux";
import Content from "./components/content";
import PrivateRoute from './PrivateRoute.js';
import ExpYeudit from './components/exp-yeudit';
import Admin from './components/admin'
import Index from './components/index';

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
            { /*<Route path="/storePerUser">
              <StorePerUser/>
            </Route>
            <Route path="/Home">
              <Home/>
            </Route> */}
            {/* <Route path="/openStore" ><OpenStore /></Route> */}

            <PrivateRoute path="/openStore" component={OpenStore} />
            <PrivateRoute path="/home" component={Index} />
            <PrivateRoute path="/storePerUser" component={StorePerUser} />

            <Route path="/0/admin/storeSettingManagment"><StoreSettingsManagement /></Route>

            <Route path="/view">
              <h2>תצוגה</h2>
              <div>
                <Content style={{ background: "#fff" }}></Content>
              </div>
              {/* <h2>{store1.editHomeStoreReducer.homeStoreDesign.ImageBorderRadiusImage}</h2> */}
              {/* {console.log("store Border Radius Images",store1.editHomeStoreReducer.homeStoreDesign.ImageBorderRadiusImage)} */}
            </Route>
            <PrivateRoute path="/:comp" component={Wrap} />
            {/* <Redirect to={"/login"} /> */}


            {/* <Route path="/0">
              <Wrap></Wrap>
            </Route> */}
            <Route path="/exp-yeudit">
              <ExpYeudit></ExpYeudit>
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
