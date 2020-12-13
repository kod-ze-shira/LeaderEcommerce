import React, { Component } from 'react';
import CreateStore from './createStore';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainEdit from './compsEditStore/mainEdit'
import UserHome from './userHome'
import ElasticCarousel from './carousel'
import Admin from './admin'


class Content extends Component {

    render() {
        return (
            <Router>
                <div className="Content">
                    <Switch>
                        <Route path="/edit/userhome/:username">
                            <UserHome />
                        </Route>
                        <Route exact path="/edit/new-store">
                            <CreateStore />
                        </Route>
                        <Route exact path="/edit/carousel">
                            <ElasticCarousel />
                        </Route>
                        <Route exact path="/edit/admin">
                            <Admin />
                        </Route>
                        <MainEdit></MainEdit>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Content;
