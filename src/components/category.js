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
export default connect(mapStateToProps, mapDispatchToProps)(Category);
