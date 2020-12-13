import React, { Component } from 'react'
import $ from 'jquery';
import { headerBurgerOnClick, searchFunc } from '../services/functions';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "../redux/action";

///images
import productPic2 from "../assets/products/product-pic-2.png"
import productPic4 from "../assets/products/product-pic-4.png"
class Cart extends Component {


    render() {
        return (
            <div className="Cart">

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
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
