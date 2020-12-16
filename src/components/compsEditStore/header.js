import React, { Component } from 'react';
import { connect } from "react-redux";
import { actions } from "../../redux/action";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import '../../App.css';

class Header extends Component {
    render() {
        return (
            <div>

                <header className="header js-header">
                    <div className="header__center center">
                      {
                            <Link to="/0/" className="header__logo" onClick={() => this.props.changeCurrentComponent("LOGO")}>
                                {this.props.logoDesign.LogoYOrN === true ?
                                    <img className="" src={this.props.logoDesign.logo} alt=""
                                        style={{ borderRadius: this.props.logoDesign.logoBorderRadiusLogo }}
                                        width={this.props.logoDesign.logoWidth ? this.props.logoDesign.logoWidth + 'vw' : '100vw'}
                                        height="auto" className="logoK"
                                    ></img> : <button onClick={this.props.changeLogoYOrN}><h1>+</h1></button>
                                }
                            </Link>

                        }
                        <h2>כאן יהיה תפריט ניווט</h2>
                        {/* //מקשר לדף לוגין */}
                        {/* <Link className="header__link" to="/login">
                                    <svg className="icon icon-user">
                                    </svg>
                                </Link> */}
                    </div>
                </header >
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        //אפשר לקרוא שם אחר לאוביקט
        logoDesign: state.logoReducer.logoDesign
    }
}
const mapDispatchToProps = (dispatch) => ({
    changeCurrentComponent: (e) => dispatch(actions.setCurrentComponent(e)),
    changeLogoYOrN: () => dispatch(actions.setLogoYOrN())


})
export default connect(mapStateToProps, mapDispatchToProps)(Header);
