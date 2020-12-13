import React, { Component } from 'react';
import CreateStore from './createStore';
// import Login from './login'
// import { route } from '../../backend/routes/users';
import AllUsers from './allUsers';
import CommunityHome from './communityHome';
import AllCommunities from './allCommunities';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Navbar from "./Navbar"
import Login from "../Login";
import Home from "./home"
import Dashboard from "../DashBoard";
import UserProvider from '../providers/UserProvider'
import UserHome from './userHome'
// import Category from './category';
import ElasticCarousel from './carousel'
import Admin from './admin'
// import { route } from '../../backend/routes/api';
import EditHome from './editHome';
import Cart from "./cart";
import Category from "./category";
import Checkout from "./checkout";
// import Contacts from "./contacts";
import Product from "./product";
import Header from './header';
import Footer from './footer';


class Content extends Component {

    render() {
        return (
            // <div>   

            //     <Switch>
            //         <Route exact path="/all-communities" component={AllCommunities}></Route>
            //         <Route exact path="/addUser" component={CreateUser}></Route>
            //         <Route exact path="/" component={Login}></Route>
            //         <Route exact path="/community/:id" component={CommunityHome}></Route>
            //     </Switch>
            // </div>
            <Router>
                <Header></Header>
                <div className="App">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/userhome/:username">
                            <UserHome />
                        </Route>
                        <Route exact path="/new-store">
                            <CreateStore />
                        </Route>
                        <Route exact path="/carousel">
                            <ElasticCarousel />
                        </Route>
                        <Route exact path="/admin">
                            <Admin />
                        </Route>
                        <Route exact path="/cart" component={Cart}></Route>
                        <Route exact path="/category" component={Category}></Route>
                        <Route exact path="/checkout" component={Checkout}></Route>
                        <Route path="/product" component={Product}></Route>
                        <Route exact path="/editHome" component={EditHome} />
                    </Switch>
                    <Footer></Footer>
                </div>
            </Router>
        )
    }
}

export default Content;
