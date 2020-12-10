import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { actions } from "../redux/action";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { headerBurgerOnClick, searchFunc } from '../services/functions';
/// 2 האימפורטים קשורים לקרוסלה
import Carousel from 'react-elastic-carousel'
import $ from 'jquery';
import '../App.css';
///images  
import logoSvg from "../assets/logo.svg";
import logoWhite from "../assets/logo-white.svg"
import logoMobile from "../assets/logo-mobile.svg"
import logoMobileWhite from "../assets/logo-mobile-white.svg"
import mainPic from "../assets/main-pic.png"
import shoppingBag from "../assets/categories/shopping-bag.svg"
import trending from "../assets/categories/trending.svg"
import skincare from "../assets/categories/skincare.svg"
import eyeCare from "../assets/categories/eye-care.svg"
import natural from "../assets/categories/natural.svg"
import protection from "../assets/categories/protection.svg"
import nightCare from "../assets/categories/night-care.svg"
import afterSun from "../assets/categories/after-sun.svg"
import productPic1 from "../assets/products/product-pic-1.png"
import productPic2 from "../assets/products/product-pic-2.png"
import productPic3 from "../assets/products/product-pic-3.png"
import productPic4 from "../assets/products/product-pic-4.png"
import productPic5 from "../assets/products/product-pic-5.png"
import productPic6 from "../assets/products/product-pic-6.png"
import productPic7 from "../assets/products/product-pic-7.png"
import productPic8 from "../assets/products/product-pic-8.png"
import ava1 from "../assets/ava-1.jpg"
import blogPic1 from "../assets/blog-pic-1.jpg"
import blogPic2 from "../assets/blog-pic-2.jpg"
import blogPic3 from "../assets/blog-pic-3.jpg"
import blogPic4 from "../assets/blog-pic-4.jpg"
import blogPic5 from "../assets/blog-pic-5.jpg"
import blogPic6 from "../assets/blog-pic-6.jpg"
import blogPic7 from "../assets/blog-pic-7.jpg"
import moon from "../assets/moon.svg"
import sun from "../assets/sun.svg"

class EditHome extends Component {
    render() {
        return (
            <div>
                <header className="header js-header">

                    <div className="header__center center">
                        <button
                            onClick={headerBurgerOnClick}
                            className="header__burger js-header-burger" ></button>
                        {
                            <Link to="/editHome" className="header__logo" onClick={() => this.props.changeCurrentComponent("LOGO")}>
                                {this.props.homeStoreDesign.LogoYOrN === true ?
                                    <img className="" src={this.props.homeStoreDesign.logo} alt=""
                                        style={{ borderRadius: this.props.homeStoreDesign.logoBorderRadiusLogo }}
                                        width={this.props.homeStoreDesign.logoWidth ? this.props.homeStoreDesign.logoWidth + 'vw' : '100vw'} height="auto" className="logoK"
                                    ></img> : <button onClick={this.props.changeLogoYOrN}><h1>+</h1></button>
                                }
                                {/* <img className="header__pic header__pic_white-desktop" src={logoWhite} alt=""></img>
                                <img className="header__pic header__pic_black-mobile" src={logoMobile} alt=""></img>
                                <img className="header__pic header__pic_white-mobile" src={logoMobileWhite} alt=""></img> */}
                                {/* <input type={"file"}className="logocolor"></input> */}
                            </Link>
                        }


                        <div className="header__control">
                            <div className="header__item header__item_hidden">
                                {/* <div className="header__search search js-search" onClick={searchFunc}>
                                    <div className="search__wrap">
                                        <input className="search__input" type="text" placeholder="Eye care products for tired eyes">
                                        </input></div>
                                    <button className="search__btn js-search-btn">
                                        <svg className="icon icon-search"> */}
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
                                {/* </svg> */}
                                {/* <use xlink:href="img/sprite.svg#icon-search"></use> */}
                                {/* </button>
                                </div> */}
                            </div>

                            {/* <div className="header__item">
                                <Link className="header__link header__link_cart active" to="/cart">
                                    <svg className="icon icon-cart"> */}
                            {/* <use xlink:href="img/sprite.svg#icon-cart"></use> */}
                            {/* </svg>
                                </Link>
                                <div className="header__body">
                                    <div className="basket basket_header">
                                        <div className="basket__list">
                                            <div className="basket__item">
                                                <Link className="basket__preview" to="#">
                                                    <img className="basket__pic" src={productPic4} alt=""></img>
                                                </Link> */}
                            {/* <a className="basket__preview" href="#">
                                                <img className="basket__pic" src={productPic4} alt=""></img>
                                                </a> */}
                            {/* <div className="basket__details">
                                                    <Link className="basket__product" to="/">Eye Mask Gel</Link> */}
                            {/* <a className="basket__product" href="#">Eye Mask Gel</a> */}
                            {/* <div className="basket__price">
                                                        <div className="basket__old">$127</div>
                                                        <div className="basket__actual">$180</div>
                                                    </div>
                                                </div>
                                                <button className="basket__remove"><svg className="icon icon-close"> */}
                            {/* <use xlink:href="img/sprite.svg#icon-close"></use> */}
                            {/* </svg></button>
                                            </div> */}
                            {/* <div className="basket__item">
                                                <Link className="basket__preview" to="#">
                                                    <img className="basket__pic" src={productPic6} alt=""></img>
                                                </Link> */}
                            {/* <a className="basket__preview" href="#">
                                                <img className="basket__pic" src={productPic6} alt=""></img>
                                            </a> */}
                            {/* <div className="basket__details">
                                                    <Link className="basket__product" to="#">Day Eye Cream</Link>*/}
                            {/* <a className="basket__product" href="#">Day Eye Cream</a> */}
                            {/* <div className="basket__price">
                                                        <div className="basket__actual">$97</div>
                                                    </div>
                                                </div>  
                                                <button className="basket__remove"><svg className="icon icon-close">
                                                   */} {/* <use xlink:href="img/sprite.svg#icon-close"></use> */}
                            {/* </svg></button>
                                            </div>
                                        </div> */}
                            {/* <div className="basket__total">
                                            <div className="basket__text">Total:</div>
                                            <div className="basket__text">$201</div>
                                        </div>
                                        <div className="basket__btns">
                                            <Link className="basket__btn btn btn_green" to="/checkout">Checkout</Link>
                                            <Link className="basket__btn btn btn_border" to="/cart">Edit Cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
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
                <div className="main section">
                    <div className="main__center center">
                        <div className="main__container">
                            <div className="main__details">
                                <div className="main__stage stage">- Skincare Products</div>
                                <h1 className="main__title title">We Offer the Best Products for your Skin</h1>
                                {/* <Link className="main__btn btn btn_green" to="#">Shop Now</Link> */}
                                <a
                                    className="main__btn btn btn_green" href="#">Shop Now
                                    </a>
                            </div>
                            <div className="main__preview">



                                <label onClick={() => this.props.changeCurrentComponent('Image')}>
                                    {this.props.homeStoreDesign.imageYOrN ?

                                        <div className="d-flex justify-content-end">
                                            <button className="btn btn-simple pr-1"
                                            >ooooo
                                                <i class="fas fa-edit" style={{ color: "#c3c4ca", fontSize: "1rem" }}></i>
                                            </button>
                                            <button className="btn btn-simple pr-1">ttt
                                                <i class="fas fa-copy" style={{ color: "#c3c4ca", fontSize: "1rem" }}></i>
                                            </button>
                                            <button className="btn btn-simple pr-2" onClick={(e) => this.props.changeImageYOrN(e)}>vvvv
                                                <i className="fa fa-trash" style={{ color: "#c3c4ca", fontSize: "1rem" }}>
                                                </i>
                                            </button>
                                        </div> :

                                        <span></span>}

                                    <img className="main__pic" src={this.props.homeStoreDesign.imageImage ? this.props.homeStoreDesign.imageImage : mainPic} alt=""></img>
                                </label>
                            </div>



                        </div>
                    </div >
                </div >
                <div className="categories section">
                    <div className="categories__center center ">
                        <div className="categories__stage stage">- The Categories</div>
                        <h2 className="categories__title title title_mb-lg">Browse by Category</h2>
                        <div className="categories__container ">

                            <div className="categories__slider js-slider-categories
                            slick-initialized slick-slider">

                                <Carousel itemsToShow={8}>
                                    <div className="categories__slide">
                                        <Link className="categories__item" to="/category">
                                            <div className="categories__icon"><img className="categories__pic" src={shoppingBag} alt=""></img>
                                            </div>
                                            <div className="categories__text">On Sale</div>

                                        </Link>
                                    </div>
                                    <div className="categories__slide">
                                        <Link className="categories__item" to="/category">
                                            <div className="categories__icon"><img className="categories__pic" src={trending} alt=""></img>
                                            </div>
                                            <div className="categories__text">Featured</div>
                                        </Link>
                                    </div>
                                    <div className="categories__slide">
                                        <Link className="categories__item" to="/category">
                                            <div className="categories__icon"><img className="categories__pic" src={skincare} alt=""></img>
                                            </div>
                                            <div className="categories__text">Masks</div>
                                        </Link>
                                    </div>
                                    <div className="categories__slide"><Link className="categories__item" to="/category">
                                        <div className="categories__icon"><img className="categories__pic" src={eyeCare} alt=""></img>
                                        </div>
                                        <div className="categories__text">Eye Care</div>
                                    </Link></div>
                                    <div className="categories__slide">
                                        <Link className="categories__item" to="/category">
                                            <div className="categories__icon"><img className="categories__pic" src={natural} alt=""></img>
                                            </div>
                                            <div className="categories__text">Moisturizers</div>
                                        </Link></div>
                                    <div className="categories__slide">
                                        <Link className="categories__item" to="/category">
                                            <div className="categories__icon"><img className="categories__pic" src={protection} alt=""></img>
                                            </div>
                                            <div className="categories__text">Treatments</div>
                                        </Link></div>
                                    <div className="categories__slide">
                                        <Link className="categories__item" to="/category">

                                            <div className="categories__icon"><img className="categories__pic" src={nightCare} alt=""></img>
                                            </div>
                                            <div className="categories__text">Night Care</div>
                                        </Link></div>
                                    <div className="categories__slide">
                                        <Link className="categories__item" to="/category">
                                            <div className="categories__icon"><img className="categories__pic" src={afterSun} alt=""></img>
                                            </div>
                                            <div className="categories__text">Sun Care</div>
                                        </Link></div>
                                    <div className="categories__slide">
                                        <Link className="categories__item" to="/category">
                                            <div className="categories__icon"><img className="categories__pic" src={shoppingBag} alt=""></img>
                                            </div>
                                            <div className="categories__text">On Sale</div>
                                        </Link></div>
                                    <div className="categories__slide">
                                        <Link className="categories__item" to="/category">

                                            <div className="categories__icon"><img className="categories__pic" src={trending} alt=""></img>
                                            </div>
                                            <div className="categories__text">Featured</div>
                                        </Link></div>
                                    <div className="categories__slide">
                                        <Link className="categories__item" to="/category">
                                            <div className="categories__icon"><img className="categories__pic" src={skincare} alt=""></img>
                                            </div>
                                            <div className="categories__text">Masks</div>

                                        </Link>
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="products products_main section">
                    <div className="products__center center">
                        <div className="products__stage stage">- Our Products </div>
                        <h2 className="products__title title title_mb-lg">Explore out Products</h2>
                        <div className="products__list">
                            <div className="product">
                                <div className="product__sale">20% OFF</div>
                                <div className="product__view">
                                    <Link className="product__preview" to="/product">
                                        {/* <a className="product__preview" href="product.html"> */}
                                        <img className="product__pic" src={productPic1} alt=""></img>
                                        {/* </a> */}
                                    </Link>
                                    <Link className="product__btn btn btn_green" to="/cart">Add to Cart</Link>
                                    {/* <a className="product__btn btn btn_green" href="cart.html">Add to Cart</a> */}
                                </div>
                                <Link className="product__name" to="/product">Sun Cream</Link>
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
                                    <Link className="product__preview" to="/product">
                                        <img className="product__pic"
                                            src={productPic2} alt=""></img>
                                    </Link>
                                    <Link className="product__btn btn btn_green" to="/cart">
                                        Add to Cart
                                    </Link>
                                </div>
                                <Link className="product__name" to="/product">Night Eye Cream</Link>
                                {/* <a className="product__name" href="product.html">Night Eye Cream</a> */}
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
                                    <Link className="product__preview" to="/product"><img className="product__pic" src={productPic3} alt=""></img>
                                    </Link>
                                    <Link className="product__btn btn btn_green" to="/cart">Add to Cart</Link>
                                    {/* <a className="product__btn btn btn_green"
                                        href="cart.html">Add to Cart</a> */}
                                </div>
                                <Link className="product__name" to="/product">Acne Skin Gel</Link>
                                {/* <a className="product__name" href="product.html">Acne Skin Gel</a> */}
                                <div className="product__details">
                                    <div className="product__category pink">Treatments</div>
                                    <div className="product__price"><span className="product__actual">$20</span></div>
                                </div>
                            </div>
                            <div className="product">
                                <div className="product__view">
                                    <Link className="product__preview" to="/product">
                                        <img className="product__pic"
                                            src={productPic4} alt=""></img>
                                    </Link>
                                    {/* <a className="product__preview" href="product.html"><img className="product__pic"
                                        src={productPic4} alt=""></img>
                                    </a> */}
                                    <Link className="product__btn btn btn_green" to="/cart">Add to Cart</Link>
                                    {/* <a className="product__btn btn btn_green"
                                        href="cart.html">Add to Cart</a> */}
                                </div>
                                <Link className="product__name" to="/product">Anti Dry Skin</Link>
                                {/* <a className="product__name" href="product.html">Anti Dry Skin</a> */}
                                <div className="product__details">
                                    <div className="product__category green">Moisturizers</div>
                                    <div className="product__price"><span className="product__actual">$20</span></div>
                                </div>
                            </div>
                            <div className="product">
                                <div className="product__new">NEW IN</div>
                                <div className="product__view">
                                    <Link className="product__preview" to="/product"><img className="product__pic"
                                        src={productPic5} alt=""></img></Link>
                                    {/* <a className="product__preview" href="product.html"><img className="product__pic"
                                        src={productPic5} alt=""></img></a> */}
                                    <Link className="product__btn btn btn_green" to="/cart">Add to Cart</Link>
                                    {/* <a className="product__btn btn btn_green"
                                        href="cart.html">Add to Cart</a> */}
                                </div>
                                <Link className="product__name" to="/product">Body Protection</Link>
                                {/* <a className="product__name" href="product.html">Body Protection</a> */}
                                <div className="product__details">
                                    <div className="product__category yellow">Treatments</div>
                                    <div className="product__price"><span className="product__actual">$20</span></div>
                                </div>
                            </div>
                            <div className="product">
                                <div className="product__view">
                                    <Link className="product__preview" to="/product"><img className="product__pic"
                                        src={productPic6} alt=""></img></Link>
                                    {/* <a className="product__preview" href="product.html"><img className="product__pic"
                                    src={productPic6} alt=""></img></a> */}
                                    <Link className="product__btn btn btn_green" to="/cart">Add to Cart</Link>
                                    {/* <a className="product__btn btn btn_green"
                                        href="cart.html">Add to Cart</a> */}
                                </div>
                                <Link className="product__name" to="/product">All In One Gel</Link>
                                {/* <a className="product__name" href="product.html">All In One Gel</a> */}
                                <div className="product__details">
                                    <div className="product__category blue">FEATURED</div>
                                    <div className="product__price"><span className="product__actual">$20</span></div>
                                </div>
                            </div>
                            <div className="product">
                                <div className="product__sale">20% OFF</div>
                                <div className="product__view">
                                    <Link className="product__preview" to="/product"><img className="product__pic"
                                        src={productPic7} alt=""></img></Link>
                                    {/* <a className="product__preview" href="product.html"><img className="product__pic"
                                    src={productPic7} alt=""></img></a> */}
                                    <Link className="product__btn btn btn_green" to="/cart">Add to Cart</Link>
                                    {/* <a className="product__btn btn btn_green"
                                        href="cart.html">Add to Cart</a> */}
                                </div>
                                <Link className="product__name" to="/product">Deep Treatment</Link>
                                {/* <a className="product__name" href="product.html">Deep Treatment</a> */}
                                <div className="product__details">
                                    <div className="product__category pink">ON SALE</div>
                                    <div className="product__price"><span className="product__old">$30</span><span className="product__actual">$20</span>
                                    </div>
                                </div>
                            </div>
                            <div className="product">
                                <div className="product__view">
                                    <Link className="product__preview" to="/prodct"><img className="product__pic"
                                        src={productPic8} alt=""></img></Link>
                                    {/* <a className="product__preview" href="product.html"><img className="product__pic"
                                    src={productPic8} alt=""></img></a> */}
                                    <Link className="product__btn btn btn_green" to="/cart">Add to Cart</Link>
                                    {/* <a className="product__btn btn btn_green"
                                        href="cart.html">Add to Cart</a> */}
                                </div>
                                <Link className="product__name" to="/product">Morning Shine</Link>
                                {/* <a className="product__name" href="product.html">Morning Shine</a> */}
                                <div className="product__details">
                                    <div className="product__category green">NIGHT CARE</div>
                                    <div className="product__price"><span className="product__actual">$20</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="products__btns">
                            <Link className="products__btn btn btn_green" to="/category">View All</Link>
                            {/* <a className="products__btn btn btn_green" href="category.html">View All</a> */}
                        </div>
                    </div>
                </div>
                <div className="about section">
                    <div className="about__center center">
                        <div className="about__stage stage">- Why Us</div>
                        <h2 className="about__title title title_mb-lg">Why People Choose Us</h2>
                        <div className="about__list">
                            <div className="about__item">
                                <div className="about__icon"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"
                                    stroke="#000" stroke-width="2.5" stroke-linejoin="round">
                                    <path
                                        d="M29 21.52V10.365a2.8 2.8 0 0 0-.373-1.393c-.244-.423-.594-.775-1.016-1.02L17.89 2.374a2.77 2.77 0 0 0-2.778 0L5.39 7.952c-.422.245-.772.596-1.016 1.02A2.8 2.8 0 0 0 4 10.365V21.52a2.8 2.8 0 0 0 .373 1.393c.244.423.594.775 1.016 1.02l9.722 5.578a2.77 2.77 0 0 0 2.778 0l9.722-5.578a2.78 2.78 0 0 0 1.016-1.02A2.8 2.8 0 0 0 29 21.521z">
                                    </path>
                                    <path d="M4.375 8.914L16.5 15.957l12.125-7.043M16.5 30V15.943" stroke-linecap="round"></path>
                                </svg></div>
                                <div className="about__category">Easy Returns</div>
                                <div className="about__text">Our return policy is simple and that is why customers love our shop.</div>
                            </div>
                            <div className="about__item">
                                <div className="about__icon"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"
                                    stroke="#000" stroke-width="2.5" stroke-linejoin="round">
                                    <path d="M28 30v-3a6 6 0 0 0-6-6H10a6 6 0 0 0-6 6v3" stroke-linecap="round"></path>
                                    <path d="M16 14a6 6 0 1 0 0-12 6 6 0 1 0 0 12z"></path>
                                </svg></div>
                                <div className="about__category">Customer Service</div>
                                <div className="about__text">We offer amazing customer service no matter what happens.</div>
                            </div>
                            <div className="about__item">
                                <div className="about__icon"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none">
                                    <path
                                        d="M16 3l4.326 8.557L30 12.938l-7 6.657L24.652 29 16 24.557 7.348 29 9 19.595l-7-6.657 9.674-1.38L16 3z"
                                        stroke="#000" stroke-width="2.5" stroke-linejoin="round"></path>
                                </svg></div>
                                <div className="about__category">High Quality</div>
                                <div className="about__text">All of our products go through very strict inspection before we dispatch them.
            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="review section">
                    <div className="review__center center">
                        <div className="review__container">
                            <div className="review__box">
                                <div className="review__stage stage">- Our Reviews</div>
                                <h2 className="review__title title">What our Customers are Saying</h2>
                            </div>
                            <div className="review__wrap">
                                <div className="review__slider js-slider-review">
                                    <Carousel>
                                        <div className="review__item">
                                            <div className="review__ava"><img className="review__pic" src={ava1} alt=""></img></div>
                                            <div className="review__author">Amy Smith</div>
                                            <div className="review__text">This is the best website I have ordered something from. I highly recommend.</div>
                                        </div>
                                        <div className="review__item">
                                            <div className="review__ava"><img className="review__pic" src={ava1} alt=""></img></div>
                                            <div className="review__author">Amy Smith</div>
                                            <div className="review__text">This is the best website I have ordered something from. I highly recommend. I
                                       highly recommend.</div>
                                        </div>
                                        <div className="review__item">
                                            <div className="review__ava"><img className="review__pic" src={ava1} alt=""></img></div>
                                            <div className="review__author">Amy Smith</div>
                                            <div className="review__text">This is the best website I have ordered something from. I highly recommend.</div>
                                        </div>
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blog section">
                    <div className="blog__center center">
                        <div className="blog__stage stage">- Our Blog</div>
                        <h2 className="blog__title title title_mb-lg">Check Out our Blog</h2>
                        <div className="blog__list js-slider-blog"><a className="blog__item blog__item_w66" href="#">
                            <div className="blog__status blog__status_recent">recent</div>
                            <div className="blog__preview" style={{ backgroundImage: `url(${blogPic1})` }}></div>
                            {/* <div className="blog__preview" style="background-image: url('img/blog-pic-1.jpg');"></div> */}
                            <h3 className="blog__info">Morning Skincare Routine: 10 Top Tips for you</h3>
                            <div className="blog__category yellow">TOP TIPS</div>
                        </a><a className="blog__item blog__item_w33" href="#">
                                <div className="blog__preview" style={{ backgroundImage: `url(${blogPic2})` }}></div>
                                {/* <div className="blog__preview" style="background-image: url('img/blog-pic-2.jpg');"></div> */}
                                <h3 className="blog__info">New Collection is Out</h3>
                                <div className="blog__category blue">NEW IN</div>
                            </a><a className="blog__item blog__item_w33" href="#">
                                <div className="blog__status blog__status_popular">popular</div>
                                <div className="blog__preview" style={{ backgroundImage: `url(${blogPic3})` }}></div>
                                {/* <div className="blog__preview" style="background-image: url('img/blog-pic-3.jpg');"></div> */}
                                <h3 className="blog__info">Always Stay Fresh</h3>
                                <div className="blog__category pink">HOW TO</div>
                            </a><a className="blog__item blog__item_w33" href="#">
                                <div className="blog__preview" style={{ backgroundImage: `url(${blogPic4})` }}></div>
                                {/* <div className="blog__preview" style="background-image: url('img/blog-pic-4.jpg');"></div> */}
                                <h3 className="blog__info">Improve your Skin now</h3>
                                <div className="blog__category green">Masks</div>
                            </a><a className="blog__item blog__item_w33" href="#">
                                <div className="blog__preview" style={{ backgroundImage: `url(${blogPic5})` }}></div>
                                {/* <div className="blog__preview" style="background-image: url('img/blog-pic-5.jpg');"></div> */}
                                <h3 className="blog__info">Stay Safe in the Sun</h3>
                                <div className="blog__category yellow">Sun Care</div>
                            </a><a className="blog__item blog__item_w50" href="#">
                                <div className="blog__preview" style={{ backgroundImage: `url(${blogPic6})` }}></div>
                                {/* <div className="blog__preview" style="background-image: url('img/blog-pic-6.jpg');"></div> */}
                                <h3 className="blog__info">Explore our Bestselling Products</h3>
                                <div className="blog__category blue">BESTSELLERS</div>
                            </a><a className="blog__item blog__item_w50" href="#">
                                <div className="blog__preview" style={{ backgroundImage: `url(${blogPic7})` }}></div>
                                {/* <div className="blog__preview" style="background-image: url('img/blog-pic-7.jpg');"></div> */}
                                <h3 className="blog__info">5 Great Tips to Get that Perfect Skin</h3>
                                <div className="blog__category pink">TOP TIPS</div>
                            </a></div>
                        <div className="blog__btns"><button className="blog__btn btn btn_green">View All</button></div>
                    </div>
                </div>
                <div className="newsletter section newsletter_desktop">
                    <div className="newsletter__center center">
                        <div className="newsletter__container">
                            <div className="newsletter__stage stage">- Our Newsletter</div>
                            <h2 className="newsletter__title title title_mb-md">Sign Up to our Newsletter</h2>
                            <form className="newsletter__form">
                                <div className="newsletter__field field">
                                    <div className="field__wrap"><input className="field__input" type="text" placeholder="Your Email" /></div>
                                </div>
                                <div className="newsletter__btns"><button className="newsletter__btn btn btn_green btn_wide" type="submit">Sign
                Up</button></div>
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
            </div >
        )
    }
}
// handleChangeSwitch = () => {
// this.setState({ logoYN: !this.state.logoYN })
// this.props.homeStoreDesign.logoYOrN = !this.props.homeStoreDesign.logoYOrN
// ;
// }
// export default Home;
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
export default connect(mapStateToProps, mapDispatchToProps)(EditHome);



{/* <!-- scripts-->
  <script src="js/app.js"></script>
  <script src="js/common.js"></script>
 */}