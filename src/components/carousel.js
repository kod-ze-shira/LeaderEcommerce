import React, { Component } from 'react'
// import Carousel from 'react-bootstrap/Carousel'  
// import ReactBootstrapCarousel from "react-bootstrap-carousel";
// import "bootstrap/dist/css/bootstrap.css";
// import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import Carousel from 'react-elastic-carousel'
import img from '../assets/50344.jpg'
// import './carousel.css'
import EditHome from './editHome'
import Cart from './cart'
import Category from './category'
import Product from './product'
import Checkout from './checkout'

export class ElasticCarousel extends Component {
        render() {

                return (
                        <Carousel itemsToShow={1} >
                                <EditHome></EditHome>
                                <Category></Category>
                                <Product></Product>
                                <Cart></Cart>
                                <Checkout></Checkout>
                        </Carousel>
                )
        }
}
export default ElasticCarousel  