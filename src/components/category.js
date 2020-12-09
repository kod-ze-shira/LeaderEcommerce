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
import productPic5 from "../assets/products/product-pic-5.png"
import productPic4 from "../assets/products/product-pic-4.png"
import productPic6 from "../assets/products/product-pic-6.png"
import productPic7 from "../assets/products/product-pic-7.png"
import productPic8 from "../assets/products/product-pic-8.png"

import moon from "../assets/moon.svg"
import sun from "../assets/sun.svg"
class Category extends Component {

    render() {
        return (
            <div className="Category">
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
                            <li className="breadcrumbs__item"><a className="breadcrumbs__link" href="#">Navigation</a></li>
                            <li className="breadcrumbs__item">Eye Care</li>
                        </ul>
                    </div>
                </div>
                <div className="products products_full section">
                    <div className="products__center center">
                        <div className="products__stage stage">- Eye Care Products</div>
                        <h2 className="products__title title title_mb-lg">Explore the Eye Care <br />Products</h2>
                        <div className="filters js-filters">
                            <div className="filters__sorting">
                                <div className="filters__open js-filters-open">Filter By</div>
                                <div className="filters__wrap js-filters-wrap">
                                    <div className="filters__drop drop js-drop">
                                        <div className="drop__head js-drop-head">Color</div>
                                        <div className="drop__body js-drop-body">
                                            <a className="drop__link js-drop-link" href="#">Red</a>
                                            <a className="drop__link js-drop-link" href="#">Blue</a>
                                            <a className="drop__link js-drop-link" href="#">Green</a>
                                            <a className="drop__link js-drop-link" href="#">Black</a>
                                        </div>
                                    </div>
                                    <div className="filters__drop drop js-drop">
                                        <div className="drop__head js-drop-head">Category</div>
                                        <div className="drop__body js-drop-body">
                                            <a className="drop__link js-drop-link" href="#">Treatments</a>
                                            <a className="drop__link js-drop-link" href="#">Moisturizers</a>
                                            <a className="drop__link js-drop-link" href="#">Featured</a>
                                        </div>
                                    </div>
                                    <div className="filters__drop drop js-drop">
                                        <div className="drop__head js-drop-head">Price Range</div>
                                        <div className="drop__body js-drop-body">
                                            <a className="drop__link js-drop-link" href="#">$0 - $10</a>
                                            <a className="drop__link js-drop-link" href="#">$10 - $50</a>
                                            <a className="drop__link js-drop-link" href="#">$50 +</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="filters__field field">
                                    <div className="field__wrap"><select className="field__select">
                                        <option>Sort By</option>
                                        <option>Sort By</option>
                                        <option>Sort By</option>
                                    </select></div>
                                </div>
                            </div>
                            <div className="filters__tags">
                                <div className="filters__tag">$0 - $10<button className="filters__remove"></button></div>
                                <div className="filters__tag">Skincare<button className="filters__remove"></button></div>
                                <div className="filters__tag">Green<button className="filters__remove"></button></div>
                            </div>
                        </div>
                        <div className="products__list">
                            <div className="product">
                                <div className="product__sale">20% OFF</div>
                                <div className="product__view">
                                    <a className="product__preview" href="product.html">
                                        <img className="product__pic" src={productPic1} alt=""></img>
                                    </a>
                                    <a className="product__btn btn btn_green" href="cart.html">Add to Cart</a>
                                </div>
                                <a className="product__name" href="product.html">Sun Cream</a>
                                <div className="product__details">
                                    <div className="product__category yellow">Sun Care</div>
                                    <div className="product__price">
                                        <span className="product__old">$30</span>
                                        <span className="product__actual">$20</span>
                                    </div>
                                </div>
                            </div>
                            <div className="product">
                                <div className="product__sale">20% OFF</div>
                                <div className="product__view">
                                    <a className="product__preview" href="product.html">
                                        <img className="product__pic" src={productPic2} alt=""></img></a>
                                    <a className="product__btn btn btn_green" href="cart.html">Add to Cart</a>
                                </div>
                                <a className="product__name" href="product.html">Night Eye Cream</a>
                                <div className="product__details">
                                    <div className="product__category blue">EYE CARE</div>
                                    <div className="product__price">
                                        <span className="product__old">$30</span>
                                        <span className="product__actual">$20</span>
                                    </div>
                                </div>
                            </div>
                            <div className="product">
                                <div className="product__view">
                                    <a className="product__preview" href="product.html">
                                        <img className="product__pic" src={productPic3} alt=""></img></a>
                                    <a className="product__btn btn btn_green" href="cart.html">Add to Cart</a>
                                </div>
                                <a className="product__name" href="product.html">Acne Skin Gel</a>
                                <div className="product__details">
                                    <div className="product__category pink">Treatments</div>
                                    <div className="product__price">
                                        <span className="product__actual">$20</span></div>
                                </div>
                            </div>
                            <div className="product">
                                <div className="product__view">
                                    <a className="product__preview" href="product.html">
                                        <img className="product__pic" src={productPic4} alt=""></img></a>
                                    <a className="product__btn btn btn_green" href="cart.html">Add to Cart</a>
                                </div>
                                <a className="product__name" href="product.html">Anti Dry Skin</a>
                                <div className="product__details">
                                    <div className="product__category green">Moisturizers</div>
                                    <div className="product__price"><span className="product__actual">$20</span></div>
                                </div>
                            </div>
                            <div className="product">
                                <div className="product__new">NEW IN</div>
                                <div className="product__view">
                                    <a className="product__preview" href="product.html">
                                        <img className="product__pic" src={productPic5} alt=""></img></a>
                                    <a className="product__btn btn btn_green" href="cart.html">Add to Cart</a>
                                </div>
                                <a className="product__name" href="product.html">Body Protection</a>
                                <div className="product__details">
                                    <div className="product__category yellow">Treatments</div>
                                    <div className="product__price"><span className="product__actual">$20</span></div>
                                </div>
                            </div>
                            <div className="product">
                                <div className="product__view">
                                    <a className="product__preview" href="product.html">
                                        <img className="product__pic" src={productPic6} alt="" /></a>
                                    <a className="product__btn btn btn_green" href="cart.html">Add to Cart</a>
                                </div>
                                <a className="product__name" href="product.html">All In One Gel</a>
                                <div className="product__details">
                                    <div className="product__category blue">FEATURED</div>
                                    <div className="product__price"><span className="product__actual">$20</span></div>
                                </div>
                            </div>
                            <div className="product">
                                <div className="product__sale">20% OFF</div>
                                <div className="product__view"><a className="product__preview" href="product.html">
                                    <img className="product__pic" src={productPic7} alt="" /></a>
                                    <a className="product__btn btn btn_green" href="cart.html">Add to Cart</a>
                                </div><a className="product__name" href="product.html">Deep Treatment</a>
                                <div className="product__details">
                                    <div className="product__category pink">ON SALE</div>
                                    <div className="product__price"><span className="product__old">$30</span><span className="product__actual">$20</span></div>
                                </div>
                            </div>
                            <div className="product">
                                <div className="product__view"><a className="product__preview" href="product.html">
                                    <img className="product__pic" src={productPic8} alt="" /></a>
                                    <a className="product__btn btn btn_green" href="cart.html">Add to Cart</a></div>
                                <a className="product__name" href="product.html">Morning Shine</a>
                                <div className="product__details">
                                    <div className="product__category green">NIGHT CARE</div>
                                    <div className="product__price"><span className="product__actual">$20</span></div>
                                </div>
                            </div>
                            <div className="product">
                                <div className="product__view"><a className="product__preview" href="product.html">
                                    <img className="product__pic" src={productPic3} alt="" /></a>
                                    <a className="product__btn btn btn_green" href="cart.html">Add to Cart</a>
                                </div><a className="product__name" href="product.html">Acne Skin Gel</a>
                                <div className="product__details">
                                    <div className="product__category pink">Treatments</div>
                                    <div className="product__price"><span className="product__actual">$20</span></div>
                                </div>
                            </div>
                            <div className="product">
                                <div className="product__view"><a className="product__preview" href="product.html">
                                    <img className="product__pic" src={productPic4} alt="" /></a>
                                    <a className="product__btn btn btn_green" href="cart.html">Add to Cart</a>
                                </div><a className="product__name" href="product.html">Anti Dry Skin</a>
                                <div className="product__details">
                                    <div className="product__category green">Moisturizers</div>
                                    <div className="product__price"><span className="product__actual">$20</span></div>
                                </div>
                            </div>
                            <div className="product">
                                <div className="product__new">NEW IN</div>
                                <div className="product__view"><a className="product__preview" href="product.html">
                                    <img className="product__pic" src={productPic5} alt="" /></a><a className="product__btn btn btn_green" href="cart.html">Add to Cart</a></div><a className="product__name" href="product.html">Body Protection</a>
                                <div className="product__details">
                                    <div className="product__category yellow">Treatments</div>
                                    <div className="product__price"><span className="product__actual">$20</span></div>
                                </div>
                            </div>
                            <div className="product">
                                <div className="product__view"><a className="product__preview" href="product.html">
                                    <img className="product__pic" src={productPic6} alt="" /></a><a className="product__btn btn btn_green" href="cart.html">Add to Cart</a></div>
                                <a className="product__name" href="product.html">All In One Gel</a>
                                <div className="product__details">
                                    <div className="product__category blue">FEATURED</div>
                                    <div className="product__price"><span className="product__actual">$20</span></div>
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
                                    <div className="field__wrap">
                                        <input className="field__input" type="text" placeholder="Your Email" /></div>
                                </div>
                                <div className="newsletter__btns">
                                    <button className="newsletter__btn btn btn_green btn_wide" type="submit">Sign Up</button></div>
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
export default Category;