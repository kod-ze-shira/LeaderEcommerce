import React, { useEffect } from "react";
// import React, { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
} from "reactstrap";

// core components
import { actions } from '../../redux/action';
import { connect } from 'react-redux';
import EcommerceHeader from "../headers/EcommerceHeader.js";
import NewsLetter from "./newsLetter"
import './bullcommerce.css'

//xd image
import ia006 from "../../assets/img/xd/ia_300000006.png";
import cart from "../../assets/img/xd/cart.svg"
function Bullcommerce(props) {

    // const [sideBarOpen, setSideBarOpen] = useState(false)

    // const [quickLookProduct, setQuickLookProduct] = useState()

    // function w3_open(item) {
    //     setSideBarOpen(true)
    //     setQuickLookProduct(item)
    // }
    useEffect(() => {

        document.body.classList.add("ecommerce-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("ecommerce-page");
            document.body.classList.remove("sidebar-collapse");
        };
    }, []);


    return (
        <>
            <div className="wrapper">
                <Container fluid>
                    {
                        props.ifDisplaySlider ?
                            <EcommerceHeader />
                            : ""
                    }
                </Container>
                <div className="main">
                    <div className="section">
                        <Container>
                            <Row className="heightRow">
                                {props.featuredProducts[0] ? props.featuredProducts.map((item, index) => (
                                    <Col md="3" key={index}>
                                        <Card className="card-product card-plain">
                                            <Link to={{ pathname: "/" + (props.objectFields.urlRoute ? props.objectFields.urlRoute : props.objectFields.storeName) + "/product/" + item.SKU, state: { product: item } }}>

                                                <div className="card-image Aheight">
                                                    <img
                                                        alt="..."
                                                        src={ia006}
                                                    ></img>
                                                </div>
                                            </Link>
                                            <CardBody>
                                                <CardTitle className="mt-2" tag="h4">
                                                    {item.name}</CardTitle>
                                                <CardFooter>
                                                    <div className="price-container">
                                                        <span className="price">{item.price + " $"}</span>
                                                    </div>

                                                    <Button
                                                        className="btn-neutral btn-icon btn-round pull-right"
                                                        color="danger"
                                                        data-placement="left"
                                                        id="tooltip719224088"
                                                        onClick={(e) => {
                                                            e.stopPropagation()
                                                            props.addToCart(
                                                                {
                                                                    "product": item,
                                                                    "amount": 1
                                                                }
                                                            ); props.cartPanal_open()

                                                        }}
                                                    >
                                                        <img alt="...."
                                                            src={cart}></img>
                                                    </Button>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        placement="left"
                                                        target="tooltip719224088"
                                                    >
                                                        To Cart
                                                  </UncontrolledTooltip>
                                                    <Button
                                                        className="btn-neutral btn-icon btn-round pull-right"
                                                        color="danger"
                                                        data-placement="left"
                                                        id="tooltip719224089"
                                                        onClick={() => props.w3_open(item)}
                                                    >
                                                        <FontAwesomeIcon className="eye" icon={['far', 'eye']}></FontAwesomeIcon>
                                                    </Button>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        placement="left"
                                                        target="tooltip719224089"
                                                    >
                                                        To View
                                                  </UncontrolledTooltip>

                                                </CardFooter>
                                            </CardBody>
                                        </Card>
                                    </Col>


                                )
                                ) : <h1>אין מוצרים מקודמים</h1>}

                            </Row>
                        </Container>

                    </div>
                </div>
                <Container fluid className="newsLetter">
                    <NewsLetter />
                </Container>
            </div >
        </>
    );
}

export default connect(
    (state) => {
        return {
            products: state.productReducer.products,
            categories: state.categoriesReducer.categories,
            featuredProducts: state.productReducer.featuredProducts,
            objectFields: state.storeReducer.objectFields,
            ifDisplaySlider: state.carouselImgReducer.ifDisplaySlider

        }
    },
    (dispatch) => {
        return {
            setFilteredItems: (x) => { dispatch(actions.setFilteredItems(x)) },
            addToCart: (product) => { dispatch(actions.addToCart(product)) }

        }
    }
)(Bullcommerce);



