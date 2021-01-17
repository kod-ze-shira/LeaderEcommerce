import React, { Component } from 'react';
import CreateStore from './createStore';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RoutingMain from './compsEditStore/routingMain';
import StoreSettingsManagement from './storeSettingsManagement'
import UserHome from './userHome'
import ElasticCarousel from './carousel'
import Admin from './admin'
import { logOut } from '../services/firebase'


class Content extends Component {

    render() {
        return (
            // <Router>
            <div className="Content">
                {/* כפתור מיותר: */}
                {/* <button className="btn btn-success" onClick={logOut}>Log Out</button> */}
                    <Switch>
                        <Route path="/0/userhome/:username">
                            <UserHome />
                        </Route>
                        <Route exact path="/0/new-store">
                            <CreateStore />
                        </Route>
                        <Route exact path="/0/carousel">
                            <ElasticCarousel />
                        </Route>
                        {/* <Route path="/0/experienceOrder" component={ExperienceOrder}></Route> */}
                        <Route exact path="/0/admin">
                            <Admin />
                        </Route>
                        {/* <Route exact path="/0/admin/storeSettingsManagement">
                            <StoreSettingsManagement></StoreSettingsManagement>
                        </Route> */}
                        <RoutingMain></RoutingMain>
                    </Switch>
                </div>
            // </Router>
        )
    }
}

export default Content;
