import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { actions } from "../redux/action";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { headerBurgerOnClick, searchFunc } from '../services/functions';
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
                <div className="main section">
                    <div className="main__center center">
                        <div className="main__container">
                            <div className="main__details">
                                <div className="main__stage stage">- Skincare Products</div>
                                <h1 className="main__title title">We Offer the Best Products for your Skin</h1>
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
                    </div>
                </div>
                <div className="about section">
                    <div className="about__center center">

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
            </div >
        )
    }
}
// handleChangeSwitch = () => {
// this.setState({ logoYN: !this.state.logoYN })
// this.props.homeStoreDesign.logoYOrN = !this.props.homeStoreDesign.logoYOrN
// ;
// }
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