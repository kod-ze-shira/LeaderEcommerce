import React, { Component } from 'react'
import $ from 'jquery';
import { headerBurgerOnClick, searchFunc } from '../services/functions';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "../redux/action";

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
import productPic7 from "../assets/products/product-pic-7.png"
import productPic8 from "../assets/products/product-pic-8.png"
import moon from "../assets/moon.svg"
import sun from "../assets/sun.svg"
import cardPic1 from '../assets/card-pic-1.png'
import cardPic2 from '../assets/card-pic-2.png'
import cardPic3 from '../assets/card-pic-3.png'
import ava1 from '../assets/ava-1.jpg'


class Product extends Component {



    render() {
        return (
            <div className="Product">
                <header className="header js-header">

                    <div className="header__center center">
                        <button
                            onClick={headerBurgerOnClick}
                            className="header__burger js-header-burger" ></button>
                        <Link className="header__logo" to="/editHome">
                            {this.props.homeStoreDesign.LogoYOrN === true ?
                                <img className="" src={this.props.homeStoreDesign.logo} alt=""
                                    style={{ borderRadius: this.props.homeStoreDesign.logoBorderRadiusLogo }}
                                    width={this.props.homeStoreDesign.logoWidth ? this.props.homeStoreDesign.logoWidth + 'vw' : '100vw'} height="auto" className="logoK"
                                ></img> : <button onClick={this.props.changeLogoYOrN}><h1>+</h1></button>
                            }                        </Link>
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

                <div className="breadcrumbs breadcrumbs_mb-md">
                    <div className="breadcrumbs__center center">
                        <ul className="breadcrumbs__list">
                            <li className="breadcrumbs__item"><a className="breadcrumbs__link" href="index.html">Home Page</a></li>
                            <li className="breadcrumbs__item"><a className="breadcrumbs__link" href="category.html">Categories</a></li>
                            <li className="breadcrumbs__item"><a className="breadcrumbs__link" href="#">Sun Care</a></li>
                            <li className="breadcrumbs__item">Sun Cream 950 ml</li>
                        </ul>
                    </div>
                </div>
                <div className="card section">
                    <div className="card__center center">
                        <div className="card__row">
                            <div className="card__col">
                                <div className="card__gallery">
                                    <div className="card__container" id="gallery">
                                        <div className="card__slider js-slider-card">
                                            <div className="card__slide"><a className="card__preview active" data-image="img/card-pic-1.png" data-zoom-image="img/card-pic-big-1.png" href="#"><img className="card__pic" src={cardPic1} alt=""></img></a></div>
                                            <div className="card__slide"><a className="card__preview" data-image="img/card-pic-2.png" data-zoom-image="img/card-pic-big-2.png" href="#"><img className="card__pic" src={cardPic2} alt=""></img></a></div>
                                            <div className="card__slide"><a className="card__preview" data-image="img/card-pic-3.png" data-zoom-image="img/card-pic-big-3.png" href="#"><img className="card__pic" src={cardPic3} alt=""></img></a></div>
                                        </div>
                                    </div>
                                    <div className="card__wrap">
                                        <div className="card__status card__status_sale">20% OFF</div>
                                        <div className="card__preview"><img className="card__pic js-zoom" src={cardPic1} alt="" data-zoom-image="img/card-pic-big-1.png"></img></div>
                                        <div className="card__icon"><svg className="icon icon-magnifier">
                                            {/* <use xlink:href="img/sprite.svg#icon-magnifier"></use> */}
                                        </svg></div>
                                    </div>
                                </div>
                            </div>
                            <div className="card__col">
                                <div className="card__stage stage">- Selling Fast</div>
                                <h1 className="card__title title">Sun Cream</h1>
                                <div className="card__details">
                                    <div className="card__category yellow">Sun Care</div>
                                    <div className="card__prices">
                                        <div className="card__old">$30</div>
                                        <div className="card__actual">$20</div>
                                    </div>
                                </div>
                                <div className="card__code">SKU:<span className="card__number">123456789</span></div>
                                <div className="card__control">
                                    <div className="card__counter counter js-counter"><button className="counter__btn counter__btn_minus js-counter-minus" type="button"><svg className="icon icon-arrow-prev">
                                        {/* <use xlink:href="img/sprite.svg#icon-arrow-prev"></use> */}
                                    </svg></button><input className="counter__input js-counter-input" type="text" value="1" size="3"></input><button className="counter__btn counter__btn_plus js-counter-plus" type="button"><svg className="icon icon-arrow-next">
                                        {/* <use xlink:href="img/sprite.svg#icon-arrow-next"></use> */}
                                    </svg></button></div><a className="card__btn btn btn_green" href="cart.html">Add to Cart</a><button className="card__favorite"><svg className="icon icon-heart-border">
                                        {/* <use xlink:href="img/sprite.svg#icon-heart-border"></use> */}
                                    </svg><svg className="icon icon-heart-fill">
                                            {/* <use xlink:href="img/sprite.svg#icon-heart-fill"></use> */}
                                        </svg></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="details section">
                    <div className="details__center center">
                        <div className="details__row">
                            <div className="details__col">
                                <div className="details__stage stage">- Product Features</div>
                                <h1 className="details__title title">Explore the Features</h1>
                            </div>
                            <div className="details__col">
                                <div className="details__item">
                                    <div className="details__icon"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none">
                                        <path d="M15.993 2l7.783 8.203c1.54 1.62 2.587 3.687 3.012 5.937a12.18 12.18 0 0 1-.625 6.7c-.832 2.12-2.242 3.93-4.05 5.205S18.176 30 16 30s-4.303-.68-6.112-1.955-3.22-3.086-4.05-5.205a12.18 12.18 0 0 1-.625-6.7c.425-2.25 1.473-4.315 3.012-5.937L15.993 2z" stroke="#000" stroke-width="2.5" stroke-linejoin="round"></path>
                                    </svg></div>
                                    <div className="details__box">
                                        <div className="details__category">Natural</div>
                                        <div className="details__text">We are using natural ingredients only when creating our products.</div>
                                    </div>
                                </div>
                                <div className="details__item">
                                    <div className="details__icon"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none">
                                        <path d="M16 30s11-5.6 11-14V6.2L16 2 5 6.2V16c0 8.4 11 14 11 14z" stroke="#000" stroke-width="2.5" stroke-linejoin="round"></path>
                                    </svg></div>
                                    <div className="details__box">
                                        <div className="details__category">Full Protection</div>
                                        <div className="details__text">This product provides broad spectrum SPF 50 and blue light protection.</div>
                                    </div>
                                </div>
                                <div className="details__item">
                                    <div className="details__icon"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M30 9L17.91 20.875l-6.364-6.25L2 24"></path>
                                        <path d="M22 9h8v8"></path>
                                    </svg></div>
                                    <div className="details__box">
                                        <div className="details__category">Trending</div>
                                        <div className="details__text">It is one of our most popular products that we have on offer.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="review section">
                    <div className="review__center center">
                        <div className="review__container">
                            <div className="review__box">
                                <div className="review__stage stage">- Product Reviews</div>
                                <h2 className="review__title title">What our Customers are Saying</h2>
                            </div>
                            <div className="review__wrap">
                                <div className="review__slider js-slider-review">
                                    <div className="review__item">
                                        <div className="review__ava"><img className="review__pic" src={ava1} alt="" /></div>
                                        <div className="review__author">Amy Smith</div>
                                        <div className="review__text">This is the best website I have ordered something from. I highly recommend.</div>
                                    </div>
                                    <div className="review__item">
                                        <div className="review__ava"><img className="review__pic" src={ava1} alt="" /></div>
                                        <div className="review__author">Amy Smith</div>
                                        <div className="review__text">This is the best website I have ordered something from. I highly recommend. I highly recommend.</div>
                                    </div>
                                    <div className="review__item">
                                        <div className="review__ava"><img className="review__pic" src={ava1} alt="" /></div>
                                        <div className="review__author">Amy Smith</div>
                                        <div className="review__text">This is the best website I have ordered something from. I highly recommend.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider section">
                    <div className="slider__center center">
                        <div className="slider__stage stage">- Explore More</div>
                        <h2 className="slider__title title title_mb-lg">Related Products</h2>
                        <div className="slider__container">
                            <div className="slider__list js-slider-products">
                                <div className="slider__slide">
                                    <div className="product">
                                        <div className="product__sale">20% OFF</div>
                                        <div className="product__view"><a className="product__preview" href="product.html"><img className="product__pic" src={productPic1} alt="" /></a><a className="product__btn btn btn_green" href="cart.html">Add to Cart</a></div><a className="product__name" href="product.html">Damaged Repair</a>
                                        <div className="product__details">
                                            <div className="product__category yellow">Sun Care</div>
                                            <div className="product__price"><span className="product__old">$30</span><span className="product__actual">$20</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider__slide">
                                    <div className="product">
                                        <div className="product__view"><a className="product__preview" href="product.html"><img className="product__pic" src={productPic3} alt="" /></a><a className="product__btn btn btn_green" href="cart.html">Add to Cart</a></div><a className="product__name" href="product.html">Acne Skin Gel</a>
                                        <div className="product__details">
                                            <div className="product__category pink">Treatments</div>
                                            <div className="product__price"><span className="product__actual">$20</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider__slide">
                                    <div className="product">
                                        <div className="product__sale">20% OFF</div>
                                        <div className="product__view"><a className="product__preview" href="product.html"><img className="product__pic" src={productPic2} alt="" /></a><a className="product__btn btn btn_green" href="cart.html">Add to Cart</a></div><a className="product__name" href="product.html">Night Eye Cream</a>
                                        <div className="product__details">
                                            <div className="product__category blue">EYE CARE</div>
                                            <div className="product__price"><span className="product__old">$30</span><span className="product__actual">$20</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider__slide">
                                    <div className="product">
                                        <div className="product__view"><a className="product__preview" href="product.html"><img className="product__pic" src={productPic4} alt="" /></a><a className="product__btn btn btn_green" href="cart.html">Add to Cart</a></div><a className="product__name" href="product.html">Dry Skin Rescue</a>
                                        <div className="product__details">
                                            <div className="product__category green">Moisturizers</div>
                                            <div className="product__price"><span className="product__actual">$20</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider__slide">
                                    <div className="product">
                                        <div className="product__view"><a className="product__preview" href="product.html"><img className="product__pic" src={productPic5} alt="" /></a><a className="product__btn btn btn_green" href="cart.html">Add to Cart</a></div><a className="product__name" href="product.html">Damaged Repair</a>
                                        <div className="product__details">
                                            <div className="product__category yellow">Sun Care</div>
                                            <div className="product__price"><span className="product__actual">$20</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider__slide">
                                    <div className="product">
                                        <div className="product__view"><a className="product__preview" href="product.html"><img className="product__pic" src={productPic6} alt="" /></a><a className="product__btn btn btn_green" href="cart.html">Add to Cart</a></div><a className="product__name" href="product.html">All In One Gel</a>
                                        <div className="product__details">
                                            <div className="product__category blue">FEATURED</div>
                                            <div className="product__price"><span className="product__actual">$20</span></div>
                                        </div>
                                    </div>
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
const mapStateToProps = (state) => {
    return {
        //אפשר לקרוא שם אחר לאוביקט
        homeStoreDesign: state.editHomeStoreReducer.homeStoreDesign
    }
}
const mapDispatchToProps = (dispatch) => ({

    changeCurrentComponent: (e) => dispatch(actions.setCurrentComponent(e)),
    changeLogoYOrN: () => dispatch(actions.setLogoYOrN())

})
export default connect(mapStateToProps, mapDispatchToProps)(Product);
