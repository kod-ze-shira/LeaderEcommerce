import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EditHome from './editHome';
import Cart from "./cart";
import Category from "./category";
import Checkout from "./checkout";
import Product from "./product";
import Header from './header';
import Footer from './footer';


class MainEdit extends Component {

    render() {
        return (
            <Router>
                <div className="MainEdit">
                    <Header></Header>
                    <Switch>
                        <Route path="/edit/cart" component={Cart}></Route>
                        <Route path="/edit/category" component={Category}></Route>
                        <Route path="/edit/checkout" component={Checkout}></Route>
                        <Route path="/edit/product" component={Product}></Route>
                        <Route path="/edit/" component={EditHome} />
                    </Switch>
                    <Footer></Footer>
                </div>
            </Router>
        )
    }
}

export default MainEdit;
