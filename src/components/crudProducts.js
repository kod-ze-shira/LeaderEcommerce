import React, { useEffect, useState } from 'react';
// import { useParams } from "react-router";
import { connect } from 'react-redux';
import { actions } from '../redux/action'
import './crudProducts.css';
import $ from 'jquery'
import productImg from '../assets/products/product-pic-7.png'
import cloneDeep from 'lodash/cloneDeep';
import { editProduct } from '../redux/middleWares/crud';
import ProductsListCopy from './productsList copy';


//1
const useStyles = (theme) => ({
})

function CrudProducts(props) {



        const [file, setFile] = useState()
        // const [file, setFile] = useState(0);
        useEffect(() => {
                var panel = $('.js-panel');
                if (panel.length) {
                        var btn = panel.find('.js-panel-btn, .js-panel-action'),
                                tab = panel.find('.js-panel-tab');

                        btn.on('click', function () {
                                var index = $(this).index();

                                btn.removeClass('active');
                                btn.eq(index).addClass('active');

                                debugger;
                                tab.hide();
                                tab.eq(index).show();
                        });
                }
        }, [])

        let filteredProducts2 = [];
        let flag = false;


        function changeFromListToGrid() { }

        function searchConversations(searchText) {

                filteredProducts2 = [];
                // let products2=props.products;
                props.products.map(item => {

                        //if the groupName contains the searchTxt
                        if (item.name != undefined && item.name.toLowerCase().indexOf(searchText) > -1) {
                                console.log(item.name);
                                let prod = cloneDeep(item)
                                filteredProducts2.push(prod);
                                flag = true;
                                //  props.setSearchReasult(this.filteredHangouts)     
                        }
                })
                if (!flag)
                        filteredProducts2 = props.products;
                console.log("filteredProducts2", filteredProducts2);
                props.setSearchReasult(filteredProducts2)
        }


        function search(eve) {

                if (eve != "") {
                        console.log(eve);
                        searchConversations(eve)
                }
                else {
                        filteredProducts2 = props.products
                        props.setSearchReasult(filteredProducts2)
                }
        }

        let i = 0;

        const onChangeHandlerImage = (event, thiss) => {
                console.log("this", thiss.index());
                debugger;
                if (event) {
                        let reader = new FileReader();
                        reader.onloadend = () => {
                                debugger;
                                props.changeProductImage(0, reader.result)
                                console.log("img", props.products[0]);

                        }
                        reader.readAsDataURL(event)
                }
                props.setSearchReasult(props.products);

        }

        // const onChangeHandlerImage2 = (e) => {

        //         console.log(e)
        //         const reader1 = new FileReader();
        //         // const file = e
        //         reader1.onloadend = () => {
        //                 setFile(reader1.result);
        //                 console.log("reader111", reader1.result);
        //         };
        //         reader1.readAsDataURL(e);
        //         // var fileToUpload = e
        //         var myFile = new FormData();
        //         console.log("upload", e);
        //         myFile.append("file", e);
        //         console.log("myfile", myFile);
        //         // if (!props.rowToEdit) {
        //         props.addNewImageFromDbP({ f: myFile, t: "title" });
        //         // }
        // }

        return (
                <>
                        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&amp;display=swap" rel="stylesheet" />
                        <link rel="stylesheet" media="all" href="css/app.css" />
                        <link rel="stylesheet" media="all" href="app2.css" />
                        <link rel="apple-touch-icon" sizes="180x180" href="img/apple-touch-icon.png" />
                        <link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32x32.png" />
                        <link rel="icon" type="image/png" sizes="16x16" href="img/favicon-16x16.png" />
                        <link rel="manifest" href="img/site.webmanifest" />
                        <link rel="mask-icon" href="img/safari-pinned-tab.svg" color="#5bbad5" />

                        <div className="page">
                                <div className="sidebar js-sidebar">
                                        <div className="sidebar__container js-sidebar-container toggled">
                                                <div className="sidebar__head">
                                                        <div className="sidebar__preview"><img className="sidebar__pic" src="../pages/img/white-ui-store.png" alt="WhiteUI.store" /></div>
                                                        <div className="sidebar__wrap">
                                                                <div className="sidebar__title">WHITEUI.STORE LLC</div>
                                                                <div className="sidebar__text">8484 Ross Wells</div>
                                                        </div><button className="sidebar__action sidebar__action_toggle action js-sidebar-toggle"><i className="la la-angle-left "></i></button>
                                                </div>
                                                <div className="sidebar__inner">
                                                        <div className="sidebar__section">
                                                                <div className="widget">
                                                                        <div className="widget__head">
                                                                                <div className="widget__title title title_sm">Popular categories</div>
                                                                                <div className="widget__text">Explore most popular product categories</div>
                                                                        </div>
                                                                        <div className="widget__body">
                                                                                <div className="overview">
                                                                                        <div className="overview__item">
                                                                                                <div className="overview__row">
                                                                                                        <div className="overview__col">
                                                                                                                <div className="overview__value">1.345</div>
                                                                                                                <div className="overview__label">Electronis</div>
                                                                                                        </div>
                                                                                                        <div className="overview__col">
                                                                                                                <div className="overview__preview blue"><i className="la la-laptop "></i></div>
                                                                                                        </div>
                                                                                                </div>
                                                                                        </div>
                                                                                        <div className="overview__item">
                                                                                                <div className="overview__row">
                                                                                                        <div className="overview__col">
                                                                                                                <div className="overview__value">1.042</div>
                                                                                                                <div className="overview__label">Accessories</div>
                                                                                                        </div>
                                                                                                        <div className="overview__col">
                                                                                                                <div className="overview__preview red"><i className="la la-gem "></i></div>
                                                                                                        </div>
                                                                                                </div>
                                                                                        </div>
                                                                                        <div className="overview__item">
                                                                                                <div className="overview__row">
                                                                                                        <div className="overview__col">
                                                                                                                <div className="overview__value">980</div>
                                                                                                                <div className="overview__label">Digital goods</div>
                                                                                                        </div>
                                                                                                        <div className="overview__col">
                                                                                                                <div className="overview__preview gray"><i className="la la-keyboard "></i></div>
                                                                                                        </div>
                                                                                                </div>
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <div className="sidebar__section">
                                                                <div className="history">
                                                                        <div className="history__container">
                                                                                <div className="history__head">
                                                                                        <div className="history__wrap">
                                                                                                <div className="history__title title title_sm">Conversion history</div>
                                                                                                <div className="history__text">Week to week performance</div>
                                                                                        </div><a className="history__link" href="#"><i className="la la-chart-bar "></i></a>
                                                                                </div>
                                                                                <div className="history__chart">
                                                                                        <div id="chart-history-bar"></div>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <div>
                                        <div className="container__head"><button className="container__action container__action_menu action js-container-toggle"><i className="la la-bars "></i></button>
                                                <div className="container__title title title_md">Products</div>
                                                {/* <signOut/> */}
                                                <div className="container__search search js-search mySearch">
                                                        <button className="search__action action js-search-open">


                                                                <i className="la la-search" onClick={() => { props.setcomponnet("search") }}></i></button>
                                                        <div className="search__dropdown js-search-dropdown">
                                                                <div className="search__field"><input className="search__input js-search-input" type="search" placeholder="Start typing…" />
                                                                        <div className="search__icon"><i className="la la-search "></i></div>
                                                                </div>
                                                                <div className="search__results js-search-results"><a className="search__result" href="#">
                                                                        <div className="search__cell">
                                                                                <div className="search__preview color-red"><i className="lab la-dribbble "></i></div>
                                                                        </div>
                                                                        <div className="search__cell">
                                                                                <div className="search__title">Dribble Redesign</div>
                                                                                <div className="search__text">Webdesign</div>
                                                                        </div>
                                                                        <div className="search__cell mobile-hide">
                                                                                <div className="search__tag tag gray">24 Feb 2019</div>
                                                                        </div>
                                                                </a><a className="search__result" href="#">
                                                                                <div className="search__cell">
                                                                                        <div className="search__preview color-green"><i className="lab la-evernote "></i></div>
                                                                                </div>
                                                                                <div className="search__cell">
                                                                                        <div className="search__title">New HTML Theme</div>
                                                                                        <div className="search__text">Theme</div>
                                                                                </div>
                                                                                <div className="search__cell mobile-hide">
                                                                                        <div className="search__tag tag gray">20 May 2019</div>
                                                                                </div>
                                                                        </a><a className="search__result" href="#">
                                                                                <div className="search__cell">
                                                                                        <div className="search__preview"><img className="search__pic" src="../pages/img/user-1.jpg" alt="User" /></div>
                                                                                </div>
                                                                                <div className="search__cell">
                                                                                        <div className="search__title">Bradley Wilkins</div>
                                                                                        <div className="search__text">b.wilkins@gmail.com</div>
                                                                                </div>
                                                                                <div className="search__cell mobile-hide">
                                                                                        <div className="search__tag tag gray">Designer</div>
                                                                                </div>
                                                                        </a>
                                                                </div>
                                                        </div>
                                                        <div className="search__backdrop backdrop js-search-backdrop"></div>
                                                </div>
                                                <div className="container__new new js-new">
                                                        <button className="new__action action js-new-open" onClick={() => { props.setcomponnet("addProduct") }}>
                                                                <i className="la la-plus-circle "></i>
                                                        </button>
                                                        <div className="new__dropdown js-new-dropdown"><a className="new__item" href="#">
                                                                <div className="new__icon"><i className="la la-toolbox "></i></div>
                                                                <div className="new__title">New Project</div>
                                                        </a><a className="new__item" href="#">
                                                                        <div className="new__icon"><i className="la la-clipboard-check "></i></div>
                                                                        <div className="new__title">New Task</div>
                                                                </a><a className="new__item" href="#">
                                                                        <div className="new__icon"><i className="la la-user-lock "></i></div>
                                                                        <div className="new__title">New Contact</div>
                                                                </a><a className="new__item" href="#">
                                                                        <div className="new__icon"><i className="la la-calendar-week "></i></div>
                                                                        <div className="new__title">New Event</div>
                                                                        {/* href="addProduct */}
                                                                        {/* <button style={{width:'100%',height:'100%'}} data-toggle="modal"  data-target="#myModal"> */}
                                                                        {/* </button> */}
                                                                </a><a className="new__item" onClick={console.log("NewProduct")} id="NewProduct">
                                                                        <div className="new__icon"><i className="la la-cube "></i></div>
                                                                        <div className="new__title">New Product</div>
                                                                </a><a className="new__item" href="#">
                                                                        <div className="new__icon"><i className="la la-calculator "></i></div>
                                                                        <div className="new__title">New Invoice</div>
                                                                </a></div>
                                                        <div className="new__backdrop backdrop js-new-backdrop"></div>
                                                </div>
                                        </div>
                                        <div className="container__body">
                                                <div className="panel js-panel">
                                                        <div className="panel__head panel__head_line">
                                                                <div className="panel__group btn-group btn-group_tabs">
                                                                        <button className="btn btn_light btn_icon js-panel-btn active">
                                                                                <i className="la la-list "></i>List</button><button className="btn btn_light btn_icon js-panel-btn"><i className="la la-border-all "></i>Grid</button></div>
                                                        </div>
                                                        <div className="panel__body">
                                                                <ProductsListCopy />

                                                                {/* gggrrriiiddd */}
                                                                <div className="panel__tab js-panel-tab" style={{ display: 'none' }}>
                                                                        <div className="data data_grid">
                                                                                <div className="data__container">
                                                                                        <div className="data__head">
                                                                                                <div className="data__row">
                                                                                                        <div className="data__cell">
                                                                                                                <div className="data__filter">Names<i className="la la-sort-alpha-down "></i></div>
                                                                                                        </div>
                                                                                                        <div className="data__cell">
                                                                                                                <div className="data__filter">Sales<i className="la la-sort-alpha-down "></i></div>
                                                                                                        </div>
                                                                                                        <div className="data__cell">
                                                                                                                <div className="data__filter">Rating<i className="la la-sort-alpha-down "></i></div>
                                                                                                        </div>
                                                                                                        <div className="data__cell">
                                                                                                                <div className="data__filter">Price<i className="la la-sort-alpha-down "></i></div>
                                                                                                        </div>
                                                                                                </div>
                                                                                        </div>
                                                                                        <div className="data__body">
                                                                                                {console.log("filteredProducts", props.filteredProducts)}
                                                                                                {props.filteredProducts.map((item, index) => (
                                                                                                        // <h1>hello</h1>
                                                                                                        // if(index<7){}
                                                                                                        <div class="data__item">
                                                                                                                <div class="data__corner">
                                                                                                                        <button class="action action_stroke"><i class="la la-ellipsis-h "></i></button></div>
                                                                                                                <div class="data__corner data__corner_left"><label class="switch"><input class="switch__input" type="checkbox" /><span class="switch__content"></span></label></div>
                                                                                                                <div class="data__row">
                                                                                                                        <div class="data__cell">
                                                                                                                                <div class="data__main">
                                                                                                                                        <div class="data__preview"><img class="data__pic" src="img/user-1.jpg" alt="Product" /></div>
                                                                                                                                        <div class="data__wrap">
                                                                                                                                                <div class="data__content"><strong>{item.name}</strong></div>
                                                                                                                                                <div class="data__label">SKU {item.SKU}</div>
                                                                                                                                        </div>
                                                                                                                                </div>
                                                                                                                        </div>
                                                                                                                        <div class="data__cell">
                                                                                                                                <div class="data__content"><strong>4.2</strong> / 5.0</div>
                                                                                                                                <div class="data__stars"><i class="la la-star "></i><i class="la la-star "></i><i class="la la-star "></i><i class="la la-star "></i><i class="la la-star active"></i></div>
                                                                                                                        </div>
                                                                                                                        <div class="data__foot">
                                                                                                                                <div class="data__box"><strong>1.368</strong></div>
                                                                                                                                <div class="data__box"><strong>${item.price}</strong></div>
                                                                                                                        </div>
                                                                                                                </div>
                                                                                                        </div>
                                                                                                        //                 
                                                                                                ))}
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <div className="panel__foot">
                                                                        <div className="pager"><a className="pager__arrow action action_icon_before" href="#"><i className="la la-angle-left "></i>Prev</a>
                                                                                <div className="pager__list"><a className="pager__link action" href="#">1</a><a className="pager__link action" href="#">2</a><a className="pager__link action active" href="#">3</a><a className="pager__link action" href="#">4</a><a className="pager__link action" href="#">5</a></div><a className="pager__arrow action action_icon_after" href="#">Next<i className="la la-angle-right "></i></a>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>

                        </div>
                </>
        )

}

export default connect(
        (state) => {
                return {
                        products: state.productReducer.products,
                        filteredProducts: state.searchReducer.filteredItems,

                }
        },
        (dispatch) => {
                return {
                        // getAllProducts:()=>dispatch(actions.getAllProducts()) 
                        // getAllProducts:()=>dispatch(actions.setProducts()) 
                        getAllProducts: () => dispatch(actions.getAllProducts()),
                        addNewImageFromDbP: (f, t) => dispatch(actions.addNewImageFromDb(f, t)),
                        changeProductImage: (i, p) => dispatch(actions.setProductImage({ i, p })),
                        setSearchReasult: (filteredItems) => dispatch(actions.setFilteredItems(filteredItems)),
                        setcomponnet: (r) => dispatch(actions.setCurrentComponent(r)),
                        changeProductImage: (i, p) => dispatch(actions.setProductImage({ i, p })),
                        delete: (i) => { dispatch(actions.deleteProduct(i)) },
                        setCurrentProduct: (p) => dispatch(actions.setCurrentProduct(p))
                }
        }

)(CrudProducts);

