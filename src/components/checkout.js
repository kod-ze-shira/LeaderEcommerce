import React, { Component } from 'react'
import $ from 'jquery';
import { headerBurgerOnClick, searchFunc } from '../services/functions';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


///images
import logoSvg from "../assets/logo.svg";
import logoWhite from "../assets/logo-white.svg"
import logoMobile from "../assets/logo-mobile.svg"
import logoMobileWhite from "../assets/logo-mobile-white.svg"
import productPic1 from "../assets/products/product-pic-1.png"

import productPic2 from "../assets/products/product-pic-2.png"
import productPic3 from "../assets/products/product-pic-3.png"

import productPic4 from "../assets/products/product-pic-4.png"
import productPic5 from "../assets/products/product-pic-5.png"

import productPic6 from "../assets/products/product-pic-6.png"
import moon from "../assets/moon.svg"
import sun from "../assets/sun.svg"
class Checkout extends Component {

    render() {
        return (
            <div className="Checkout">
                <header className="header js-header">

                    <div className="header__center center">
                        <button
                            onClick={headerBurgerOnClick}
                            className="header__burger js-header-burger" ></button>
                        <Link className="header__logo" to="/">
                            <img className="header__pic header__pic_black-desktop" src={logoSvg} alt=""></img>
                            <img className="header__pic header__pic_white-desktop" src={logoWhite} alt=""></img>
                            <img className="header__pic header__pic_black-mobile" src={logoMobile} alt=""></img>
                            <img className="header__pic header__pic_white-mobile" src={logoMobileWhite} alt=""></img>
                        </Link>
                        <div className="header__control">
                            <div className="header__item header__item_hidden">
                                <div className="header__search search js-search" onClick={searchFunc}>
                                    <div className="search__wrap">
                                        <input className="search__input" type="text" placeholder="Eye care products for tired eyes">
                                        </input></div>
                                    <button className="search__btn js-search-btn">
                                        <svg className="icon icon-search">
                                            {/* <svg version="1.1"
                        width="320" height="320"
                    >="http://www.w3.org/2000/svg"
                         <rect backgroundImage={'url(${blogPic1})'}
                        <circle fill="orange"
                        stroke="black"
                        stroke-width="3"
                        cx="40"
                        cy="25"
                        r="20"/>
                    </svg> */}
                                        </svg>
                                        {/* <use xlink:href="img/sprite.svg#icon-search"></use> */}
                                    </button>
                                </div>
                            </div>

                            <div className="header__item">
                                <Link className="header__link header__link_cart active" to="/cart">
                                    <svg className="icon icon-cart">
                                        {/* <use xlink:href="img/sprite.svg#icon-cart"></use> */}
                                    </svg>
                                </Link>
                                <div className="header__body">
                                    <div className="basket basket_header">
                                        <div className="basket__list">
                                            <div className="basket__item">
                                                <Link className="basket__preview" to="#">
                                                    <img className="basket__pic" src={productPic4} alt=""></img>
                                                </Link>
                                                {/* <a className="basket__preview" href="#">
                            <img className="basket__pic" src={productPic4} alt=""></img>
                            </a> */}
                                                <div className="basket__details">
                                                    <Link className="basket__product" to="/">Eye Mask Gel</Link>
                                                    {/* <a className="basket__product" href="#">Eye Mask Gel</a> */}
                                                    <div className="basket__price">
                                                        <div className="basket__old">$127</div>
                                                        <div className="basket__actual">$180</div>
                                                    </div>
                                                </div>
                                                <button className="basket__remove"><svg className="icon icon-close">
                                                    {/* <use xlink:href="img/sprite.svg#icon-close"></use> */}
                                                </svg></button>
                                            </div>
                                            <div className="basket__item">
                                                <Link className="basket__preview" to="#">
                                                    <img className="basket__pic" src={productPic6} alt=""></img>
                                                </Link>
                                                {/* <a className="basket__preview" href="#">
                            <img className="basket__pic" src={productPic6} alt=""></img>
                        </a> */}
                                                <div className="basket__details">
                                                    <Link className="basket__product" to="#">Day Eye Cream</Link>
                                                    {/* <a className="basket__product" href="#">Day Eye Cream</a> */}
                                                    <div className="basket__price">
                                                        <div className="basket__actual">$97</div>
                                                    </div>
                                                </div>
                                                <button className="basket__remove"><svg className="icon icon-close">
                                                    {/* <use xlink:href="img/sprite.svg#icon-close"></use> */}
                                                </svg></button>
                                            </div>
                                        </div>
                                        <div className="basket__total">
                                            <div className="basket__text">Total:</div>
                                            <div className="basket__text">$201</div>
                                        </div>
                                        <div className="basket__btns">
                                            <Link className="basket__btn btn btn_green" to="/checkout">Checkout</Link>
                                            <Link className="basket__btn btn btn_border" to="/cart">Edit Cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="header__item header__item_hidden">
                                <Link className="header__link" to="/login">
                                    {/* <a className="header__link" href="login.html"> */}
                                    <svg className="icon icon-user">
                                        {/* <use xlink:href="img/sprite.svg#icon-user"></use> */}
                                    </svg>
                                </Link>
                                {/* </a> */}
                            </div>
                        </div>
                    </div>
                    <div className="header__menu menu js-menu">
                        <div className="menu__center center">
                            <form className="menu__search search">
                                <div className="search__wrap">
                                    <input className="search__input" type="text" placeholder="Search"></input>
                                </div>
                                <button className="search__btn"><svg className="icon icon-search">
                                    {/* <use xlink:href="img/sprite.svg#icon-search"></use> */}
                                </svg></button>
                            </form>
                            <div className="menu__container">
                                <div className="menu__list js-menu-list">
                                    <Link className="menu__item active" to="/">Home</Link>
                                    {/* <a className="menu__item active" href="index.html">Home</a> */}
                                    <div className="menu__item js-menu-item">
                                        <div className="menu__head js-menu-head" >Categories
                    <svg className="icon icon-arrow-next">
                                                {/* <use xlink:href="img/sprite.svg#icon-arrow-next"></use> */}
                                            </svg>
                                        </div>
                                        <div className="menu__body js-menu-body"><button className="menu__close js-menu-close">
                                            <svg className="icon icon-close">
                                                {/* <use xlink:href="img/sprite.svg#icon-close"></use> */}
                                            </svg></button>
                                            <button className="menu__back js-menu-back"><svg className="icon icon-arrow-prev">
                                                {/* <use xlink:href="img/sprite.svg#icon-arrow-prev"></use> */}
                                            </svg></button>
                                            <div className="menu__group">
                                                <Link className="menu__link" to="/category">On Sale</Link>
                                                <Link className="menu__link" to="/category">Featured</Link>
                                                <Link className="menu__link" to="/category">Masks</Link>
                                                <Link className="menu__link" to="/category">Eye Care</Link>
                                                <Link className="menu__link" to="/category">Moisturizers</Link>
                                                <Link className="menu__link" to="/category">Treatments</Link>
                                                <Link className="menu__link" to="/category">Night Care</Link>
                                                <Link className="menu__link" to="/category">Sun Care</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <a className="menu__item" href="#">Blog</a>
                                    <Link className="menu__item" to="/about-us">About</Link>
                                    <Link className="menu__item" to="/contacts">Contact</Link>
                                    {/* <a className="menu__item" href="about-us.html">About</a>
                <a className="menu__item" href="contacts.html">Contact</a> */}
                                </div>
                            </div>
                            <Link className="menu__btn btn btn_green btn_wide" to="/login">Login</Link>
                            {/* <a className="menu__btn btn btn_green btn_wide" href="login.html">Login</a> */}
                            <div className="menu__social">
                                <Link className="menu__link" to="https://www.instagram.com/ui8net/" target="_blank">
                                    <svg
                                        className="icon icon-instagram">
                                        {/* <use xlink:href="img/sprite.svg#icon-instagram"></use> */}
                                    </svg>
                                </Link>
                                {/* <a className="menu__link" href="https://www.instagram.com/ui8net/" target="_blank"> */}
                                {/* <svg
                className="icon icon-instagram"> */}
                                {/* <use xlink:href="img/sprite.svg#icon-instagram"></use> */}
                                {/* </svg> */}
                                {/* </a> */}
                                <Link className="menu__link" to="https://twitter.com/ui8" target="_blank">
                                    <svg className="icon icon-twitter">
                                        {/* <use xlink:href="img/sprite.svg#icon-twitter"></use> */}
                                    </svg>
                                </Link>
                                {/* <a className="menu__link" href="https://twitter.com/ui8" target="_blank"><svg className="icon icon-twitter"> */}
                                {/* <use xlink:href="img/sprite.svg#icon-twitter"></use> */}
                                {/* </svg></a> */}
                                <Link className="menu__link" to="https://www.facebook.com/ui8.net/" target="_blank">
                                    <svg
                                        className="icon icon-facebook">
                                        {/* <use xlink:href="img/sprite.svg#icon-facebook"></use> */}
                                    </svg>
                                </Link>
                                {/* <a className="menu__link" href="https://www.facebook.com/ui8.net/" target="_blank"><svg
                className="icon icon-facebook"> */}
                                {/* <use xlink:href="img/sprite.svg#icon-facebook"></use> */}
                                {/* </svg></a> */}
                            </div>
                        </div>
                    </div>
                </header >
                <div className="breadcrumbs">
                    <div className="breadcrumbs__center center">
                        <ul className="breadcrumbs__list">
                            <li className="breadcrumbs__item"><a className="breadcrumbs__link" href="index.html">Home Page</a></li>
                            <li className="breadcrumbs__item"><a className="breadcrumbs__link" href="category.html">Categories</a></li>
                            <li className="breadcrumbs__item"><a className="breadcrumbs__link" href="cart.html">Shopping Cart</a></li>
                            <li className="breadcrumbs__item">Checkout</li>
                        </ul>
                    </div>
                </div>
                <div className="checkout section js-checkout">
                    <div className="checkout__center center">
                        <div className="checkout__stage stage">- Almost There</div>
                        <h2 className="checkout__title title title_mb-lg">Checkout</h2>
                        <div className="checkout__row">
                            <div className="checkout__col">
                                <div className="checkout__steps">
                                    <div className="checkout__step js-checkout-step active">1</div>
                                    <div className="checkout__step js-checkout-step">2</div>
                                    <div className="checkout__step js-checkout-step">3</div>
                                    <div className="checkout__step js-checkout-step">4</div>
                                </div>
                                <div className="checkout__container">
                                    <div className="checkout__item js-checkout-item">
                                        <div className="checkout__category">Details</div>
                                        <div className="checkout__fieldset">
                                            <div className="checkout__field field">
                                                <div className="field__label">Email Address</div>
                                                <div className="field__wrap"><input className="field__input" type="email" name="email"></input></div>
                                            </div>
                                            <div className="checkout__field field">
                                                <div className="field__label">Password</div>
                                                <div className="field__wrap"><input className="field__input" type="password" name="password"></input></div>
                                            </div>
                                        </div><button className="checkout__btn btn btn_green btn_wide js-checkout-btn">Continue</button><button className="checkout__btn btn btn_border btn_wide js-checkout-btn">Guest Checkout</button>
                                    </div>
                                    <div className="checkout__item js-checkout-item">
                                        <div className="checkout__category">Shipping Details</div>
                                        <div className="checkout__fieldset">
                                            <div className="checkout__field field">
                                                <div className="field__label">Full Name</div>
                                                <div className="field__wrap"><input className="field__input" type="text" name="name"></input></div>
                                            </div>
                                            <div className="checkout__field field">
                                                <div className="field__label">Street Name</div>
                                                <div className="field__wrap"><input className="field__input" type="text" name="street"></input></div>
                                            </div>
                                            <div className="checkout__line">
                                                <div className="checkout__cell">
                                                    <div className="checkout__field field">
                                                        <div className="field__label">House Number</div>
                                                        <div className="field__wrap"><input className="field__input" type="text" name="house"></input></div>
                                                    </div>
                                                </div>
                                                <div className="checkout__cell">
                                                    <div className="checkout__field field">
                                                        <div className="field__label">City</div>
                                                        <div className="field__wrap"><input className="field__input" type="text" name="city"></input></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="checkout__line">
                                                <div className="checkout__cell">
                                                    <div className="checkout__field field">
                                                        <div className="field__label">Country</div>
                                                        <div className="field__wrap"><input className="field__input" type="text" name="country"></input></div>
                                                    </div>
                                                </div>
                                                <div className="checkout__cell">
                                                    <div className="checkout__field field">
                                                        <div className="field__label">ZIP Code</div>
                                                        <div className="field__wrap"><input className="field__input" type="text" name="code"></input></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><button className="checkout__btn btn btn_green btn_wide js-checkout-btn">Continue</button>
                                    </div>
                                    <div className="checkout__item js-checkout-item">
                                        <div className="checkout__category">Billing Details</div>
                                        <div className="checkout__fieldset"><label className="checkout__checkbox checkbox"><input className="checkbox__input js-checkout-checkbox" type="checkbox" checked></input><span className="checkbox__in"><span className="checkbox__tick"></span><span className="checkbox__text">Same as shipping address</span></span></label>
                                            <div className="checkout__box js-checkout-box">
                                                <div className="checkout__field field">
                                                    <div className="field__label">Full Name</div>
                                                    <div className="field__wrap"><input className="field__input" type="text" name="name"></input></div>
                                                </div>
                                                <div className="checkout__field field">
                                                    <div className="field__label">Street Name</div>
                                                    <div className="field__wrap"><input className="field__input" type="text" name="street"></input></div>
                                                </div>
                                                <div className="checkout__line">
                                                    <div className="checkout__cell">
                                                        <div className="checkout__field field">
                                                            <div className="field__label">House Number</div>
                                                            <div className="field__wrap"><input className="field__input" type="text" name="house"></input></div>
                                                        </div>
                                                    </div>
                                                    <div className="checkout__cell">
                                                        <div className="checkout__field field">
                                                            <div className="field__label">City</div>
                                                            <div className="field__wrap"><input className="field__input" type="text" name="city"></input></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="checkout__line">
                                                    <div className="checkout__cell">
                                                        <div className="checkout__field field">
                                                            <div className="field__label">Country</div>
                                                            <div className="field__wrap"><input className="field__input" type="text" name="country"></input></div>
                                                        </div>
                                                    </div>
                                                    <div className="checkout__cell">
                                                        <div className="checkout__field field">
                                                            <div className="field__label">ZIP Code</div>
                                                            <div className="field__wrap"><input className="field__input" type="text" name="code"></input></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><button className="checkout__btn btn btn_green btn_wide js-checkout-btn">Continue</button>
                                    </div>
                                    <div className="checkout__item js-checkout-item">
                                        <div className="checkout__category">Payment Details</div>
                                        <div className="checkout__variants"><label className="checkout__checkbox checkbox js-checkout-payment"><input className="checkbox__input js-checkout-radio" type="radio" name="payment" checked></input><span className="checkbox__in"><span className="checkbox__tick"></span><span className="checkbox__text">Credit Card</span></span></label><label className="checkout__checkbox checkbox js-checkout-payment"><input className="checkbox__input js-checkout-radio" type="radio" name="payment"></input><span className="checkbox__in"><span className="checkbox__tick"></span><span className="checkbox__text">PayPal</span></span></label></div>
                                        <div className="checkout__group">
                                            <div className="checkout__el js-checkout-el">
                                                <div className="checkout__fieldset">
                                                    <div className="checkout__field field">
                                                        <div className="field__label">Card Number</div>
                                                        <div className="field__wrap"><input className="field__input" type="tel" name="card"></input></div>
                                                    </div>
                                                    <div className="checkout__line">
                                                        <div className="checkout__cell">
                                                            <div className="checkout__field field">
                                                                <div className="field__label">Expiry Date</div>
                                                                <div className="field__wrap"><input className="field__input" type="text" name="date"></input></div>
                                                            </div>
                                                        </div>
                                                        <div className="checkout__cell">
                                                            <div className="checkout__field field">
                                                                <div className="field__label">CVV</div>
                                                                <div className="field__wrap"><input className="field__input" type="tel" name="cvv"></input></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="checkout__line">
                                                        <div className="checkout__cell">
                                                            <div className="checkout__field field">
                                                                <div className="field__label">Country</div>
                                                                <div className="field__wrap"><input className="field__input" type="text" name="country"></input></div>
                                                            </div>
                                                        </div>
                                                        <div className="checkout__cell">
                                                            <div className="checkout__field field">
                                                                <div className="field__label">ZIP Code</div>
                                                                <div className="field__wrap"><input className="field__input" type="text" name="code"></input></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div><button className="checkout__btn btn btn_green btn_wide">Place Order</button>
                                            </div>
                                            <div className="checkout__el js-checkout-el"><button className="checkout__btn btn btn_green btn_wide">Continue with PayPal</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="checkout__col">
                                <div className="basket basket_checkout">
                                    <div className="basket__category">My Cart</div>
                                    <div className="basket__list">
                                        <div className="basket__item"><a className="basket__preview" href="#"><img className="basket__pic" src={productPic4} alt=""></img></a>
                                            <div className="basket__details"><a className="basket__product" href="#">Eye Mask Gel</a>
                                                <div className="basket__price">
                                                    <div className="basket__old">$127</div>
                                                    <div className="basket__actual">$180</div>
                                                </div>
                                            </div><button className="basket__remove"><svg className="icon icon-close">
                                                {/* <use xlink:href="img/sprite.svg#icon-close"></use> */}
                                            </svg></button>
                                        </div>
                                        <div className="basket__item"><a className="basket__preview" href="#"><img className="basket__pic" src={productPic6} alt=""></img></a>
                                            <div className="basket__details"><a className="basket__product" href="#">Day Eye Cream</a>
                                                <div className="basket__price">
                                                    <div className="basket__actual">$97</div>
                                                </div>
                                            </div><button className="basket__remove"><svg className="icon icon-close">
                                                {/* <use xlink:href="img/sprite.svg#icon-close"></use> */}
                                            </svg></button>
                                        </div>
                                    </div>
                                    <div className="basket__total">
                                        <div className="basket__text">Total:</div>
                                        <div className="basket__text">$224</div>
                                    </div><a className="basket__button btn btn_border btn_wide" href="cart.html">Edit Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <footer className="footer">
                    <div className="footer__center center">
                        <div className="footer__row">
                            <div className="footer__col">
                                <a className="footer__logo" href="index.html">
                                    <img className="footer__pic footer__pic_black-desktop" src={logoSvg} alt=""></img>
                                    <img className="footer__pic footer__pic_white-desktop" src={logoWhite} alt=""></img>
                                    <img className="footer__pic footer__pic_black-mobile" src={logoMobile} alt=""></img>
                                    <img className="footer__pic footer__pic_white-mobile" src={logoMobileWhite} alt=""></img>
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
                                    </svg></a></div><label className="switch js-switch-bg"><input className="switch__input" type="checkbox"></input><span
                                        className="switch__in"><span className="switch__tick">
                                            <img className="switch__pic switch__pic_moon" src={moon} alt=""></img>
                                            <img className="switch__pic switch__pic_sun" src={sun} alt=""></img>
                                        </span></span></label>
                            </div>
                            <div className="footer__col">
                                <div className="footer__category">Categories</div>
                                <div className="footer__menu">
                                    <Link className="footer__link" to="/category">On Sale</Link>
                                    <Link className="footer__link" to="/category">Featured</Link>
                                    <Link className="footer__link" to="/category">Masks</Link>
                                    <Link className="footer__link" to="/category">Eye Care</Link>
                                    <Link className="footer__link" to="/category">Moisturizers</Link>
                                    <Link className="footer__link" to="/category">Treatments</Link>
                                    <Link className="footer__link" to="/category">Night Care</Link>
                                    <Link className="footer__link" to="/category">Sun Care</Link>
                                </div>
                            </div>
                            <div className="footer__col">
                                <div className="footer__category">Legal</div>
                                <div className="footer__menu">
                                    <Link className="footer__link" to="/legelPage">Terms of Service</Link>
                                    <Link className="footer__link" to="/legelPage">Privacy Policy</Link>
                                    <Link className="footer__link" to="/legelPage">Returns Policy</Link>
                                    <Link className="footer__link" to="/legelPage">Shipping</Link>
                                    <Link className="footer__link" to="/legelPage">Data Protection</Link>
                                </div>
                            </div>
                            <div className="footer__col">
                                <div className="footer__category">Company</div>
                                <div className="footer__menu">
                                    <Link className="footer__kink" to="/about-us">About</Link>
                                    <Link className="footer__kink" to="/about-us">Faq</Link>
                                    <Link className="footer__kink" to="/about-us">Contact</Link>
                                    <Link className="footer__kink" to="/about-us">Careers</Link>
                                    <Link className="footer__kink" to="/about-us">Vision</Link>
                                    <Link className="footer__kink" to="/about-us">Culture</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>


            </div>
        )
    }
}
export default Checkout;