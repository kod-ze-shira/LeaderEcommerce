import React, { Component } from 'react'
// import $ from 'jquery';
import { connect } from "react-redux";
import { actions } from "../../redux/action";


///images
import productPic4 from "../../assets/products/product-pic-4.png"
import productPic6 from "../../assets/products/product-pic-6.png"
class Checkout extends Component {

    render() {
        return (
            <div className="Checkout">
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


            </div>
        )
    }
}
export default Checkout;
