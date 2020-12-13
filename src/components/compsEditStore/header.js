import React, { Component } from 'react';
import { connect } from "react-redux";
import { actions } from "../../redux/action";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../../App.css';

class Header extends Component {
    render() {
        return (
            <div>

                <header className="header js-header">
                    <div className="header__center center">
                        {
                            <Link to="/edit" className="header__logo" onClick={() => this.props.changeCurrentComponent("LOGO")}>
                                {this.props.homeStoreDesign.LogoYOrN === true ?
                                    <img className="" src={this.props.homeStoreDesign.logo} alt=""
                                        style={{ borderRadius: this.props.homeStoreDesign.logoBorderRadiusLogo }}
                                        width={this.props.homeStoreDesign.logoWidth ? this.props.homeStoreDesign.logoWidth + 'vw' : '100vw'} height="auto" className="logoK"
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
        homeStoreDesign: state.editHomeStoreReducer.homeStoreDesign
    }
}
const mapDispatchToProps = (dispatch) => ({
    changeImageYOrN: (e) => dispatch(actions.setLogoYOrN()),
    changeCurrentComponent: (e) => dispatch(actions.setCurrentComponent(e)),
    changeLogoYOrN: () => dispatch(actions.setLogoYOrN())


})
export default connect(mapStateToProps, mapDispatchToProps)(Header);
