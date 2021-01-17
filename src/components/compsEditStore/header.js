import React, { Component } from 'react';
import { connect } from "react-redux";
import { actions } from "../../redux/action";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import tempLogo from '../../assets/logo.svg';
import { Form, Nav, Navbar, NavDropdown, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import { FormControl } from '@material-ui/core';
class Header extends Component {
    render() {
        return (
            <header className="header js-header">
                <div className="header__center center">
                    {
                        <Link to="/0/" className="header__logo" onClick={() => this.props.changeCurrentComponent("LOGO")}>
                            {this.props.logoDesign.LogoYOrN === true ?
                                <img className="" src={this.props.objectFields.logoStore ? this.props.objectFields.logoStore : tempLogo} alt=""
                                    // <img className="" src={this.props.logoDesign.logo} alt=""
                                    style={{ borderRadius: this.props.logoDesign.logoBorderRadiusLogo }}
                                    width={this.props.logoDesign.logoWidth ? this.props.logoDesign.logoWidth + 'vw' : '100vw'}
                                    height="auto" className="logoK"
                                ></img> : <button onClick={this.props.changeLogoYOrN}><h1>+</h1></button>
                            }
                        </Link>
                    }
                    {/* <h2>כאן יהיה תפריט ניווט</h2> */}
                    {/* navbar!!!!!!!!!!!!!!! */}

                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Item as="li">
                                        <Link to="/">Home</Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Link to="/">Home</Link>
                                    </Nav.Item>
                                {/* <Link to="/">Home</Link>
                                <Nav.Link>Link</Nav.Link> */}

                            </Nav>
                            {/* <Form inline>
                                <FormControl type="text" placeholder="Search" />
                                {/*  className="mr-sm-2" /}
                                <Button variant="outline-success">Search</Button>
                            </Form> */}
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </header >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        //אפשר לקרוא שם אחר לאוביקט
        logoDesign: state.logoReducer.logoDesign,
        objectFields: state.openStoreReducer.objectFields,

    }
}
const mapDispatchToProps = (dispatch) => ({
    changeCurrentComponent: (e) => dispatch(actions.setCurrentComponent(e)),
    changeLogoYOrN: () => dispatch(actions.setLogoYOrN()),
    setLogoStore: (e) => dispatch(actions.setLogoStore(e)),

})
export default connect(mapStateToProps, mapDispatchToProps)(Header);
