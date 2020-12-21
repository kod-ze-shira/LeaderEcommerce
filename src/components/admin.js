import React, { useEffect } from 'react'
import $ from 'jquery'
import './admin.css'
import CrudCategory from './crudCategory'
import CrudProducts from './crudProducts'
import { Provider } from 'react-redux';
import store from '../redux/store';

// import Carousel from 'react-bootstrap/Carousel'  
// import ReactBootstrapCarousel from "react-bootstrap-carousel";
// import "bootstrap/dist/css/bootstrap.css";
// import EditHomeStore from './editHomeStore'
// import EditCart from './editCart'
// import EditCategory from './editCategory'
// import EditProduct from './editProduct'
// import EditCheckout from './editCheckout'

function Admin() {
        useEffect(() => {
                $('#myTab a').on('click', function (e) {
                        debugger;
                        e.preventDefault()
                        $('#myTab .active').removeClass('active')
                        $(this).addClass('active')
                        $('#myTabContent .show active').removeClass('show active');
                        $('#profile').addClass('show active')
                })
        }, [])

        return (
                 <Provider store={store}>
                <div>
                        <ul className="nav nav-tabs" id="myTab" role="tablist" style={{ fontSize: 1.7 + "rem" }}>
                                <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Categories</a>
                                </li>
                                <li className="nav-item">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Products</a>
                                </li>
                                <li className="nav-item">
                                        <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Sales</a>
                                </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                                <div className="tab-pane" id="home" role="tabpanel" aria-labelledby="home-tab">
                                       
                                </div>
                                <div className="tab-pane show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <CrudProducts /> <CrudCategory />
                                </div>
                                <div className="tab-pane" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
                        </div>
                        </div>
                </Provider>
        )

}

export default Admin;
