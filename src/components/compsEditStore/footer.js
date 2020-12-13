import React, { Component } from 'react';
import { connect } from "react-redux";
import { actions } from "../../redux/action";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logoSvg from "../../assets/logo.svg";
import '../../App.css'
class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <div className="footer__center center">
                        <div className="footer__row">
                            <div className="footer__col">
                                <a className="footer__logo" href="index.html">
                                    <img className="footer__pic footer__pic_black-desktop" src={logoSvg} alt=""></img>
                                </a>
                                <div className="footer__copyright">© 2020 - All rights reserved</div>
                                <div className="footer__social social">
                                    <a className="social__link" href="https://www.instagram.com/ui8net/"
                                        target="_blank"><svg className="icon icon-instagram">
                                            {/* <use xlink:href="img/sprite.svg#icon-instagram"></use> */}
                                        </svg></a>
                                    <a className="social__link" href="https://twitter.com/ui8" target="_blank"><svg
                                        className="icon icon-twitter">
                                        {/* <use xlink:href="img/sprite.svg#icon-twitter"></use> */}
                                    </svg></a>
                                    <a className="social__link" href="https://www.facebook.com/ui8.net/" target="_blank"><svg
                                        className="icon icon-facebook">
                                        {/* <use xlink:href="img/sprite.svg#icon-facebook"></use> */}
                                    </svg></a></div><label className="switch js-switch-bg">
                                    <input className="switch__input" type="checkbox">
                                    </input>
                                    {/* <span className="switch__in"><span className="switch__tick">
                                            <img className="switch__pic switch__pic_moon" src={moon} alt=""></img>
                                            <img className="switch__pic switch__pic_sun" src={sun} alt=""></img>
                                        </span> */}

                                    {/* </span> */}
                                </label>
                            </div>
                            <div className="footer__col">
                                <div className="footer__category">Categories</div>
                                <div className="footer__menu">
                                    <Link className="footer__link" to="/edit/category">On Sale</Link>
                                    <Link className="footer__link" to="/edit/category">Featured</Link>
                                    <Link className="footer__link" to="/edit/category">Masks</Link>
                                    <Link className="footer__link" to="/edit/category">Eye Care</Link>
                                    <Link className="footer__link" to="/edit/category">Moisturizers</Link>
                                    <Link className="footer__link" to="/edit/category">Treatments</Link>
                                    <Link className="footer__link" to="/edit/category">Night Care</Link>
                                    <Link className="footer__link" to="/edit/category">Sun Care</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

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
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
