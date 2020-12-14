import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EditHome from './editHome';
import Cart from "./cart";
import Category from "./category";
import Checkout from "./checkout";
import Product from "./product";
import Header from './header';
import Footer from './footer';


class RoutingMain extends Component {

    render() {
        return (
            <Router>
                <div className="RoutingMain">
                    <Header></Header>
                    <Switch>
                        <Route path="/0/cart" component={Cart}></Route>
                        <Route path="/0/category" component={Category}></Route>
                        <Route path="/0/checkout" component={Checkout}></Route>
                        <Route path="/0/product" component={Product}></Route>
                        <Route path="/0/" component={EditHome} />
                    </Switch>
                    <Footer></Footer>
                </div>
            </Router>
        )
    }
}

export default RoutingMain;
