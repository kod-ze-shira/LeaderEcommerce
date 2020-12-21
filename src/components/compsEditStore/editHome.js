import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { actions } from "../../redux/action";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Carousel from 'react-elastic-carousel'
// import $ from 'jquery';
import '../../App.css';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
///images  
import shoppingBag from "../../assets/categories/shopping-bag.svg"
import trending from "../../assets/categories/trending.svg"
import skincare from "../../assets/categories/skincare.svg"
import eyeCare from "../../assets/categories/eye-care.svg"
import natural from "../../assets/categories/natural.svg"
import protection from "../../assets/categories/protection.svg"
import nightCare from "../../assets/categories/night-care.svg"
import afterSun from "../../assets/categories/after-sun.svg"
import productPic1 from "../../assets/products/product-pic-1.png"
import productPic2 from "../../assets/products/product-pic-2.png"
import productPic3 from "../../assets/products/product-pic-3.png"
import productPic4 from "../../assets/products/product-pic-4.png"
import productPic5 from "../../assets/products/product-pic-5.png"
import productPic6 from "../../assets/products/product-pic-6.png"
import productPic7 from "../../assets/products/product-pic-7.png"
import productPic8 from "../../assets/products/product-pic-8.png"

class EditHome extends Component {
    // הפונקציה לשינוי התמונה הראשית של החנות 
    onChangeHandlerImage = (event) => {
        if (event) {
            let reader = new FileReader();
            reader.onloadend = () => {
                this.props.changeImage(reader.result)
            }
            reader.readAsDataURL(event)
        }
    }
    // לבטל ארחרי השיו נוי של יהודית בסטור
    componentDidMount() {

        this.props.getCategories();

    }

    render() {
        return (
            <div>
                {/*דיב של תמונת פתיחה שעליה כותרת פתיחה*/}
                <div className="main section">
                    <div className="main__center center">
                        <div className="main__container">
                            <div className="main__details" onClick={() => this.props.changeCurrentComponent('textOnThePicture')}>
                                {/* <h1 className="main__title title">We Offer the Best Products for your Skin</h1> */}
                                <TextareaAutosize className="SPtitle col-md-12" value=
                                    {this.props.homeStoreDesign.titleText.onThePicture ? this.props.homeStoreDesign.titleText.onThePicture : "We Offer the Best Products for your Skin"}
                                    style={{
                                        fontFamily: this.props.homeStoreDesign.titleFont.onThePicture,
                                        fontWeight: this.props.homeStoreDesign.titleTextWeight.onThePicture,
                                        fontSize: this.props.homeStoreDesign.titleTextSize.onThePicture + "px",
                                        lineHeight: this.props.homeStoreDesign.titleLineHeight.onThePicture, color: this.props.homeStoreDesign.titleColorText.onThePicture,
                                        textAlign: this.props.homeStoreDesign.titleAlignment.titleCategory ? this.props.homeStoreDesign.titleAlignment.titleCategory : 'left',
                                        marginTop: '2vh'
                                    }}
                                    onChange={(e) => this.props.changeTextTitle(e.target.value)} />
                            </div>
                            <div className="main__preview">
                                <label for='fileInput' onClick={() => this.props.changeCurrentComponent("Image")}>
                                    {this.props.homeStoreDesign.imageYOrN ?
                                        <img alt="" src={this.props.homeStoreDesign.imageImage ?
                                            this.props.homeStoreDesign.imageImage : productPic7}
                                            style={{
                                                borderRadius: this.props.homeStoreDesign.ImageBorderRadiusImage,
                                                width: this.props.homeStoreDesign.ImageWidth ? this.props.homeStoreDesign.ImageWidth + 'vw' : '40vw',
                                                height: this.props.homeStoreDesign.imageHeight ? this.props.homeStoreDesign.imageHeight + 'vh' : ''
                                            }}
                                        ></img>
                                        : <span></span>}
                                </label>
                                <input type={"file"}
                                    id="fileInput"
                                    htmlFor="myInput"
                                    accept="image/*"
                                    style={{
                                        cursor: 'pointer',
                                        display: 'none',
                                    }}
                                    onChange={(e) => this.onChangeHandlerImage(e.target.files[0])} >
                                </input>
                            </div>
                        </div>
                    </div >
                </div >
                <div className="categories section">
                    <div className="categories__center center ">
                        <div className="categories__stage stage">- The Categories</div>
                        {/* <h2 className="categories__title title title_mb-lg">Browse by Category</h2> */}
                        <div className="a" onClick={() => this.props.changeCurrentComponent('TextTitleOfCategory')}>
                            <TextareaAutosize className="SPtitleOfCategory col-md-12" value=
                                {this.props.homeStoreDesign.titleText.titleCategory ? this.props.homeStoreDesign.titleText.titleCategory : "Browse by Category"}
                                style={{
                                    fontFamily: this.props.homeStoreDesign.titleFont.titleCategory,
                                    fontWeight: this.props.homeStoreDesign.titleTextWeight.titleCategory,
                                    fontSize: this.props.homeStoreDesign.titleTextSize.titleCategory + "px",
                                    lineHeight: this.props.homeStoreDesign.titleLineHeight.titleCategory, color: this.props.homeStoreDesign.titleColorText.titleCategory,
                                    textAlign: this.props.homeStoreDesign.titleAlignment.titleCategory ? this.props.homeStoreDesign.titleAlignment.titleCategory : 'left',
                                    marginTop: '2vh'
                                }}
                                onChange={(e) => this.props.changeTextTitle(e.target.value)} />
                        </div>
                        <div className="categories__container ">
                            <div className="categories__slider js-slider-categories
                            slick-initialized slick-slider">
                                <Carousel className="carousel" itemsToShow={2}>
                                    {

                                        // this.props.categories[0]?
                                        this.props.categories.map((item, index) => (
                                            <div className="categories__slide" key={index}>
                                                {/* //למשתמש זה צריך להיות לינק שמקשר לקטגוריה הנוכחית ולא דיב */}
                                                {/* //השארתי לינק אחד לדוגמא */}
                                                {/* <Link className="categories__item" to="/0/category">
                                                <div className="categories__icon"><img className="categories__pic" src={shoppingBag} alt=""></img>
                                                </div>
                                                <div className="categories__text">On Sale</div>
                                                </Link> */}
                                                <div className="categories__item" onClick={() => this.props.changeCurrentComponent("TextIntoCategory")}>
                                                    <div className="categories__icon">
                                                        <img className="categories__pic" src={item.image ? item.image : shoppingBag} alt=""></img>
                                                    </div>
                                                    <div
                                                        className="categories__text"
                                                        style={{
                                                            fontFamily: this.props.homeStoreDesign.titleFont.textIntoCategory,
                                                            fontWeight: this.props.homeStoreDesign.titleTextWeight.textIntoCategory,
                                                            fontSize: this.props.homeStoreDesign.titleTextSize.textIntoCategory + "px",
                                                            lineHeight: this.props.homeStoreDesign.titleLineHeight.textIntoCategory, color: this.props.homeStoreDesign.titleColorText.textIntoCategory,
                                                            // textAlign: this.props.homeStoreDesign.titleAlignment.textIntoCategory ? this.props.homeStoreDesign.titleAlignment.textIntoCategory : 'left',
                                                            marginTop: '2vh'
                                                        }}
                                                        onChange={(e) => this.props.changeTextTitle(e.target.value)}

                                                    >{item.categoryName}</div>
                                                </div>
                                            </div>

                                        ))
                                        // :<span>כרגע אין קטגוריות</span>
                                    }
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="products products_main section">
                    <div className="products__center center">
                        <div className="products__stage stage">- Our Products </div>
                        {/* <h2 className="products__title title title_mb-lg">Explore out Products</h2> */}

                        <div className="a" onClick={() => this.props.changeCurrentComponent('TextTitleOfProduct')}>
                            <TextareaAutosize className="SPtitleOfCategory col-md-12" value=
                                {this.props.homeStoreDesign.titleText.titleProduct ? this.props.homeStoreDesign.titleText.titleProduct : "Explore out Products"}
                                style={{
                                    fontFamily: this.props.homeStoreDesign.titleFont.titleProduct,
                                    fontWeight: this.props.homeStoreDesign.titleTextWeight.titleProduct,
                                    fontSize: this.props.homeStoreDesign.titleTextSize.titleProduct + "px",
                                    lineHeight: this.props.homeStoreDesign.titleLineHeight.titleProduct, color: this.props.homeStoreDesign.titleColorText.titleProduct,
                                    textAlign: this.props.homeStoreDesign.titleAlignment.titleProduct ? this.props.homeStoreDesign.titleAlignment.titleProduct : 'left',
                                    marginTop: '2vh'
                                }}
                                onChange={(e) => this.props.changeTextTitle(e.target.value)} />
                        </div>


                        <div className="products__list">
                            <div className="product">
                                <div className="product__sale">20% OFF</div>
                                <div className="product__view">
                                    <Link className="product__preview" to="/0/product">
                                        <img className="product__pic" src={productPic1} alt=""></img>
                                    </Link>
                                    <Link className="product__btn btn btn_green" to="/0/cart">Add to Cart</Link>
                                </div>
                                <Link className="product__name" to="/0/product">Sun Cream</Link>
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
                                    <Link className="product__preview" to="/0/product">
                                        <img className="product__pic"
                                            src={productPic2} alt=""></img>
                                    </Link>
                                    <Link className="product__btn btn btn_green" to="/0/cart">
                                        Add to Cart
                                    </Link>
                                </div>
                                <Link className="product__name" to="/0/product">Night Eye Cream</Link>
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
                                    <Link className="product__preview" to="/0/product"><img className="product__pic" src={productPic3} alt=""></img>
                                    </Link>
                                    <Link className="product__btn btn btn_green" to="/0/cart">Add to Cart</Link>
                                </div>
                                <Link className="product__name" to="/0/product">Acne Skin Gel</Link>
                                <div className="product__details">
                                    <div className="product__category pink">Treatments</div>
                                    <div className="product__price"><span className="product__actual">$20</span></div>
                                </div>
                            </div>
                            <div className="product">
                                <div className="product__view">
                                    <Link className="product__preview" to="/0/product">
                                        <img className="product__pic"
                                            src={productPic4} alt=""></img>
                                    </Link>
                                    <Link className="product__btn btn btn_green" to="/0/cart">Add to Cart</Link>
                                </div>
                                <Link className="product__name" to="/0/product">Anti Dry Skin</Link>
                                <div className="product__details">
                                    <div className="product__category green">Moisturizers</div>
                                    <div className="product__price"><span className="product__actual">$20</span></div>
                                </div>
                            </div>
                            <div className="product">
                                <div className="product__new">NEW IN</div>
                                <div className="product__view">
                                    <Link className="product__preview" to="/0/product"><img className="product__pic"
                                        src={productPic5} alt=""></img></Link>
                                    <Link className="product__btn btn btn_green" to="/0/cart">Add to Cart</Link>
                                </div>
                                <Link className="product__name" to="/0/product">Body Protection</Link>
                                <div className="product__details">
                                    <div className="product__category yellow">Treatments</div>
                                    <div className="product__price"><span className="product__actual">$20</span></div>
                                </div>
                            </div>
                            <div className="product">
                                <div className="product__view">
                                    <Link className="product__preview" to="/0/product"><img className="product__pic"
                                        src={productPic6} alt=""></img></Link>
                                    <Link className="product__btn btn btn_green" to="/0/cart">Add to Cart</Link>
                                </div>
                                <Link className="product__name" to="/0/product">All In One Gel</Link>
                                <div className="product__details">
                                    <div className="product__category blue">FEATURED</div>
                                    <div className="product__price"><span className="product__actual">$20</span></div>
                                </div>
                            </div>
                            <div className="product">
                                <div className="product__sale">20% OFF</div>
                                <div className="product__view">
                                    <Link className="product__preview" to="/0/product"><img className="product__pic"
                                        src={productPic7} alt=""></img></Link>
                                    <Link className="product__btn btn btn_green" to="/0/cart">Add to Cart</Link>
                                </div>
                                <Link className="product__name" to="/0/product">Deep Treatment</Link>
                                <div className="product__details">
                                    <div className="product__category pink">ON SALE</div>
                                    <div className="product__price"><span className="product__old">$30</span><span className="product__actual">$20</span>
                                    </div>
                                </div>
                            </div>
                            <div className="product">
                                <div className="product__view">
                                    <Link className="product__preview" to="/0/prodct"><img className="product__pic"
                                        src={productPic8} alt=""></img></Link>
                                    <Link className="product__btn btn btn_green" to="/0/cart">Add to Cart</Link>
                                </div>
                                <Link className="product__name" to="/0/product">Morning Shine</Link>
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
            </div >
        )
    }
}
const mapStateToProps = (state) => {
    debugger
    return {

        categories: state.categoriesReducer.categories[0] ? state.categoriesReducer.categories : [{ categoryName: "foo", images: "", color: "yellow", products: [] }, { categoryName: "foo", images: "", color: "yellow", products: [] }],
        //אפשר לקרוא שם אחר לאוביקט
        homeStoreDesign: state.editHomeStoreReducer.homeStoreDesign
    }
}
const mapDispatchToProps = (dispatch) => ({
    changeCurrentComponent: (e) => dispatch(actions.setCurrentComponent(e)),
    changeLogoYOrN: () => dispatch(actions.setLogoYOrN()),
    changeImage: (e) => dispatch(actions.setImage(e)),
    changeTextTitle: (e) => dispatch(actions.setTitleText({ k: "onThePicture", e })),
    // לבטל אחרי השינוי של יהודית
    getCategories: () => dispatch(actions.getAllCategories())


})
export default connect(mapStateToProps, mapDispatchToProps)(EditHome);
