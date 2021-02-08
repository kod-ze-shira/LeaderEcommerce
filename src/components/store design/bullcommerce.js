/*eslint-disable*/
import React from "react";
// plugin that creates slider
import Slider from "nouislider";
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Collapse,
    Label,
    FormGroup,
    Input,
    Container,
    InputGroupAddon,
    Row,
    Col,
    UncontrolledTooltip,
} from "reactstrap";

// core components
import ScrollTransparentNavbar from "../navbars/ScrollTransparentNavbar.js";
import EcommerceHeader from "../headers/EcommerceHeader.js";
import FooterOrange from "./footerOrange";

import { actions } from '../../redux/action';
import { connect } from 'react-redux';

//images
import sweeney from "../../assets/img/sweeney.jpg";
//xd image
import ia006 from "../../assets/img/xd/ia_300000006.png";
import ia0010 from "../../assets/img/xd/ia_300000010.png";
import ia008 from "../../assets/img/xd/ia_300000008.png";
import ia0019 from "../../assets/img/xd/ia_300000019.png";
import ia0024 from "../../assets/img/xd/ia_100000024.png";
import ia0096 from "../../assets/img/xd/ia_100000096.png";
import ia0012 from "../../assets/img/xd/ia_300000012@2x.png"
import ia0035 from "../../assets/img/xd/ia_300000035.png";
import eyeRegular from "../../assets/img/xd/eye-regular.svg";
import cart from "../../assets/img/xd/cart.svg"
function Bullcommerce(props) {

    React.useEffect(() => {

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
            <ScrollTransparentNavbar />
            <div className="wrapper">
                <Container fluid>
                    <EcommerceHeader />
                </Container>
                <div className="main">
                    <div className="section">
                        <Container>
                            <Row>
                                <Col md="12">
                                    <Row>
                                        <Col lg="3" md="6" >
                                            <Card className="card-product card-plain">
                                                <div className="card-image Aheight">
                                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                        <img
                                                            alt="..."
                                                            src={ia006}
                                                        ></img>

                                                    </a>
                                                </div>
                                                <CardBody>
                                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                        <CardTitle className="mt-2" tag="h4">Patio Arm Chair</CardTitle>
                                                    </a>

                                                    <CardFooter>
                                                        <div className="price-container">
                                                            <span className="price">150 $</span>
                                                        </div>

                                                        <Button
                                                            className="btn-neutral btn-icon btn-round pull-right"
                                                            color="danger"
                                                            data-placement="left"
                                                            id="tooltip719224088"
                                                        >
                                                            <img alt="...."
                                                                src={cart}></img>
                                                            {/* <i className="now-ui-icons ui-2_favourite-28"></i> */}
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
                                                        >
                                                            <img alt="...."
                                                                src={eyeRegular}></img>
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
                                        <Col lg="3" md="6">
                                            <Card className="card-product card-plain">
                                                <div className="card-image Aheight">
                                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                        <img
                                                            alt="..."
                                                            src={ia0010}
                                                        ></img>
                                                    </a>
                                                </div>
                                                <CardBody>
                                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                        <CardTitle className="mt-2" tag="h4">Patio Arm Chair</CardTitle>
                                                    </a>
                                                    <CardFooter>
                                                        <div className="price-container">
                                                            <span className="price">€ 879</span>
                                                        </div>
                                                        <Button
                                                            className="btn-neutral btn-icon btn-round pull-right"
                                                            color="default"
                                                            data-placement="left"
                                                            id="tooltip44332731"
                                                        >
                                                            <img alt="...."
                                                                src={cart}></img>
                                                        </Button>
                                                        <UncontrolledTooltip
                                                            delay={0}
                                                            placement="left"
                                                            target="tooltip44332731"
                                                        >
                                                            To view
                                                        </UncontrolledTooltip>
                                                        <Button
                                                            className="btn-neutral btn-icon btn-round pull-right"
                                                            color="default"
                                                            data-placement="left"
                                                            id="tooltip44332732"
                                                        >
                                                            <img alt="...."
                                                                src={eyeRegular}></img>
                                                        </Button>
                                                        <UncontrolledTooltip
                                                            delay={0}
                                                            placement="left"
                                                            target="tooltip44332732"
                                                        >
                                                            To Cart
                            </UncontrolledTooltip>
                                                    </CardFooter>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col lg="3" md="6">
                                            <Card className="card-product card-plain">
                                                <div className="card-image Aheight">
                                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                        <img
                                                            alt="..."
                                                            src={ia008}
                                                        ></img>
                                                    </a>
                                                </div>
                                                <CardBody>
                                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                        <CardTitle className="mt-2" tag="h4">Patio Arm Chair</CardTitle>
                                                    </a>
                                                    <CardFooter>
                                                        <div className="price-container">
                                                            <span className="price">555 $</span>
                                                        </div>
                                                        <Button
                                                            className="btn-neutral btn-icon btn-round pull-right"
                                                            color="default"
                                                            data-placement="left"
                                                            id="tooltip601285753"
                                                        >
                                                            <img alt="..." src={cart}></img>
                                                        </Button>
                                                        <UncontrolledTooltip
                                                            delay={0}
                                                            placement="left"
                                                            target="tooltip601285753"
                                                        >
                                                            Add to wishlist
                            </UncontrolledTooltip>
                                                        <Button
                                                            className="btn-neutral btn-icon btn-round pull-right"
                                                            color="default"
                                                            data-placement="left"
                                                            id="tooltip601285753"
                                                        >
                                                            <img alt="..." src={eyeRegular}></img>
                                                        </Button>
                                                        <UncontrolledTooltip
                                                            delay={0}
                                                            placement="left"
                                                            target="tooltip601285753"
                                                        >
                                                            Add to wishlist
                            </UncontrolledTooltip>
                                                    </CardFooter>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col lg="3" md="6">
                                            <Card className="card-product card-plain">
                                                <div className="card-image Aheight">
                                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                        <img
                                                            alt="..."
                                                            src={ia0019}
                                                        ></img>
                                                    </a>
                                                </div>
                                                <CardBody>
                                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                        <CardTitle className="mt-2" tag="h4">Thom Sweeney</CardTitle>
                                                    </a>
                                                    <CardFooter>
                                                        <div className="price-container">
                                                            <span className="price">€ 680</span>
                                                        </div>
                                                        <Button
                                                            className="btn-neutral btn-icon btn-round pull-right"
                                                            color="default"
                                                            data-placement="left"
                                                            id="tooltip931109693"
                                                        >
                                                            <img alt="..." src={cart}></img>
                                                        </Button>
                                                        <UncontrolledTooltip
                                                            delay={0}
                                                            placement="left"
                                                            target="tooltip931109693"
                                                        >
                                                            To Cart
                            </UncontrolledTooltip>
                                                        <Button
                                                            className="btn-neutral btn-icon btn-round pull-right"
                                                            color="default"
                                                            data-placement="left"
                                                            id="tooltip931109693"
                                                        >
                                                            <img alt="..." src={eyeRegular}></img>
                                                        </Button>
                                                        <UncontrolledTooltip
                                                            delay={0}
                                                            placement="left"
                                                            target="tooltip931109693"
                                                        >
                                                            To View
                            </UncontrolledTooltip>
                                                    </CardFooter>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col lg="3" md="6">
                                            <Card className="card-product card-plain">
                                                <div className="card-image Aheight">
                                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                        <img
                                                            alt="..."
                                                            src={ia0024}
                                                        ></img>
                                                    </a>
                                                </div>
                                                <CardBody>
                                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                        <CardTitle className="mt-2" tag="h4">Table</CardTitle>
                                                    </a>
                                                    <CardFooter>
                                                        <div className="price-container">
                                                            <span className="price">€ 725</span>
                                                        </div>
                                                        <Button
                                                            className="btn-neutral btn-icon btn-round pull-right"
                                                            color="default"
                                                            data-placement="left"
                                                            id="tooltip512086450"
                                                        >
                                                            <img alt="..." src={cart}></img>
                                                        </Button>
                                                        <UncontrolledTooltip
                                                            delay={0}
                                                            placement="left"
                                                            target="tooltip512086450"
                                                        >
                                                            To Cart
                            </UncontrolledTooltip>
                                                        <Button
                                                            className="btn-neutral btn-icon btn-round pull-right"
                                                            color="default"
                                                            data-placement="left"
                                                            id="tooltip512086450"
                                                        >
                                                            <img alt="..." src={eyeRegular}></img>
                                                        </Button>
                                                        <UncontrolledTooltip
                                                            delay={0}
                                                            placement="left"
                                                            target="tooltip512086450"
                                                        >
                                                            To View
                            </UncontrolledTooltip>

                                                    </CardFooter>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col lg="3" md="6">
                                            <Card className="card-product card-plain">
                                                <div className="card-image Aheight">
                                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                        <img
                                                            alt="..."
                                                            src={ia0096}
                                                        ></img>
                                                    </a>
                                                </div>
                                                <CardBody>
                                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                        <CardTitle className="mt-2" tag="h4">Boglioli</CardTitle>
                                                    </a>
                                                    <CardFooter>
                                                        <div className="price-container">
                                                            <span className="price">€ 699</span>
                                                        </div>
                                                        <Button
                                                            className="btn-neutral btn-icon btn-round pull-right"
                                                            color="default"
                                                            data-placement="left"
                                                            id="tooltip867244968"
                                                        >
                                                            <img alt="..." src={cart}></img>
                                                        </Button>
                                                        <UncontrolledTooltip
                                                            delay={0}
                                                            placement="left"
                                                            target="tooltip867244968"
                                                        >
                                                            To Cart
                            </UncontrolledTooltip>
                                                        <Button
                                                            className="btn-neutral btn-icon btn-round pull-right"
                                                            color="default"
                                                            data-placement="left"
                                                            id="tooltip867244968"
                                                        >
                                                            <img alt="..." src={eyeRegular}></img>
                                                        </Button>
                                                        <UncontrolledTooltip
                                                            delay={0}
                                                            placement="left"
                                                            target="tooltip867244968"
                                                        >
                                                            To View
                            </UncontrolledTooltip>

                                                    </CardFooter>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col lg="3" md="6">
                                            <Card className="card-product card-plain">
                                                <div className="card-image Aheight">
                                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                        <img
                                                            alt="..."
                                                            src={ia0012}
                                                        ></img>
                                                    </a>
                                                </div>
                                                <CardBody>
                                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                        <CardTitle className="mt-2" tag="h4">Patio Arm Chair</CardTitle>
                                                    </a>

                                                    <CardFooter>
                                                        <div className="price-container">
                                                            <span className="price">500 $</span>
                                                        </div>

                                                        <Button
                                                            className="btn-neutral btn-icon btn-round pull-right"
                                                            color="danger"
                                                            data-placement="left"
                                                            id="tooltip719224088"
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
                                                        >
                                                            <img alt="...."
                                                                src={eyeRegular}></img>
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
                                        <Col lg="3" md="6">
                                            <Card className="card-product card-plain">
                                                <div className="card-image Aheight">
                                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                        <img
                                                            alt="..."
                                                            src={ia0035}
                                                        ></img>
                                                    </a>
                                                </div>
                                                <CardBody>
                                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                        <CardTitle className="mt-2" tag="h4">Patio Arm Chair</CardTitle>
                                                    </a>

                                                    <CardFooter>
                                                        <div className="price-container">
                                                            <span className="price">456 $</span>
                                                        </div>

                                                        <Button
                                                            className="btn-neutral btn-icon btn-round pull-right"
                                                            color="danger"
                                                            data-placement="left"
                                                            id="tooltip719224088"
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
                                                        >
                                                            <img alt="...."
                                                                src={eyeRegular}></img>
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


                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                        <button className="BtnGoToShop">GO TO SHOP</button>

                    </div>
                </div>
                <FooterOrange />
            </div >
        </>
    );
}

export default connect(
    (state) => {
        return {
            slideMin: state.filterReducer.minPrice,
            slideMax: state.filterReducer.maxPrice,
            products: state.productReducer.products,
            categories: state.categoriesReducer.categories
        }
    },
    (dispatch) => {
        return {
            filteredProducts: (p) => dispatch(actions.setFilteredItems(p)),
            setSliderMin: (x) => { dispatch(actions.setMinPrice(x)) },
            setSliderMax: (x) => { dispatch(actions.setMaxPrice(x)) },
            setFilteredItems: (x) => { dispatch(actions.setFilteredItems(x)) }
        }
    }
)(Bullcommerce);



