import React, { Component } from 'react'
import $ from 'jquery';
import { headerBurgerOnClick, searchFunc } from '../services/functions';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

///images
import logoSvg from "../assets/logo.svg";
import logoWhite from "../assets/logo-white.svg"
import logoMobile from "../assets/logo-mobile.svg"
import logoMobileWhite from "../assets/logo-mobile-white.svg"
import productPic2 from "../assets/products/product-pic-2.png"
import productPic4 from "../assets/products/product-pic-4.png"
import productPic6 from "../assets/products/product-pic-6.png"
import moon from "../assets/moon.svg"
import sun from "../assets/sun.svg"
class Cart extends Component {


    render() {
        return (
            <div className="Cart">
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
                            <li className="breadcrumbs__item">Shopping Cart</li>
                        </ul>
                    </div>
                </div>
                <div className="cart section">
                    <div className="cart__center center">
                        <div className="cart__head">
                            <div className="cart__box">
                                <div className="cart__stage stage">- Your Cart</div>
                                <h2 className="cart__title title">Shopping Cart</h2>
                            </div><button className="cart__btn btn btn_border">Clear All</button>
                        </div>
                        <div className="cart__row">
                            <div className="cart__col">
                                <div className="cart__list">
                                    <div className="cart__item"><a className="cart__preview" href="#"><img className="cart__pic" src={productPic4} alt="">
                                    </img>
                                    </a>
                                        <div className="cart__details"><a className="cart__product" href="#">Sleepless Night</a>
                                            <div className="cart__price">
                                                <div className="cart__actual">$97</div>
                                            </div>
                                            <div className="cart__control">
                                                <div className="cart__counter counter js-counter"><button className="counter__btn counter__btn_minus js-counter-minus" type="button"><svg className="icon icon-arrow-prev">
                                                    {/* <use xlink:href="img/sprite.svg#icon-arrow-prev"></use> */}
                                                </svg></button><input className="counter__input js-counter-input" type="text" value="1" size="3"></input><button className="counter__btn counter__btn_plus js-counter-plus" type="button"><svg className="icon icon-arrow-next">
                                                    {/* <use xlink:href="img/sprite.svg#icon-arrow-next"></use> */}
                                                </svg></button></div><button className="cart__remove"><svg className="icon icon-close">
                                                    {/* <use xlink:href="img/sprite.svg#icon-close"></use> */}
                                                </svg></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cart__item"><a className="cart__preview" href="#"><img className="cart__pic" src={productPic2} alt=""></img></a>
                                        <div className="cart__details"><a className="cart__product" href="#">Tired Eyes Cream</a>
                                            <div className="cart__price">
                                                <div className="cart__old">$68</div>
                                                <div className="cart__actual">$56</div>
                                            </div>
                                            <div className="cart__control">
                                                <div className="cart__counter counter js-counter"><button className="counter__btn counter__btn_minus js-counter-minus" type="button"><svg className="icon icon-arrow-prev">
                                                    {/* <use xlink:href="img/sprite.svg#icon-arrow-prev"></use> */}
                                                </svg></button><input className="counter__input js-counter-input" type="text" value="1" size="3"></input><button className="counter__btn counter__btn_plus js-counter-plus" type="button"><svg className="icon icon-arrow-next">
                                                    {/* <use xlink:href="img/sprite.svg#icon-arrow-next"></use> */}
                                                </svg></button></div><button className="cart__remove"><svg className="icon icon-close">
                                                    {/* <use xlink:href="img/sprite.svg#icon-close"></use> */}
                                                </svg></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cart__col">
                                <div className="cart__receipt">
                                    <div className="cart__category">Cart Total</div>
                                    <div className="cart__wrap">
                                        <div className="cart__line">
                                            <div className="cart__text">Subtotal:</div>
                                            <div className="cart__text">$209</div>
                                        </div>
                                        <div className="cart__line">
                                            <div className="cart__text">Tax:</div>
                                            <div className="cart__text">$20.73</div>
                                        </div>
                                        <div className="cart__line">
                                            <div className="cart__text">Shipping:</div>
                                            <div className="cart__text">$15</div>
                                        </div>
                                        <div className="cart__line cart__line_total">
                                            <div className="cart__text">Total:</div>
                                            <div className="cart__text">$224</div>
                                        </div>
                                    </div><a className="cart__btn btn btn_green btn_wide" href="checkout.html">Checkout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="newsletter section">
                    <div className="newsletter__center center">
                        <div className="newsletter__container">
                            <div className="newsletter__stage stage">- Our Newsletter</div>
                            <h2 className="newsletter__title title title_mb-md">Sign Up to our Newsletter</h2>
                            <form className="newsletter__form">
                                <div className="newsletter__field field">
                                    <div className="field__wrap"><input className="field__input" type="text" placeholder="Your Email" /></div>
                                </div>
                                <div className="newsletter__btns"><button className="newsletter__btn btn btn_green btn_wide" type="submit">Sign Up</button></div>
                            </form>
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
export default Cart;