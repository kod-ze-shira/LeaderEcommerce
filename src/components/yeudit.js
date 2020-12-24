import React, { useEffect, useState } from 'react';
// import { useParams } from "react-router";
import { connect } from 'react-redux';
import { actions } from '../redux/action'
import './crudProducts.css';
import $ from 'jquery'
import productImg from '../assets/products/product-pic-7.png'
import cloneDeep from 'lodash/cloneDeep';
import ProductsList from './productsList';
import ProductsGrid from './productsGrid'


//1
const useStyles = (theme) => ({
})

function Yeudit(props) {

        const [file, setFile] = useState()

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
                                <div>
                                        <div className="container__head"><button className="container__action container__action_menu action js-container-toggle"><i className="la la-bars "></i></button>
                                                <div className="container__title title title_md">Products</div>
                                                {/* <signOut/> */}
                                                <div className="container__search search js-search mySearch">
                                                        <button className="search__action action js-search-open">
                                                                <i className="la la-search" onClick={() => { props.setcomponnet("search") }}></i></button>
                                                </div>
                                        </div>
                                        <div className="container__body">
                                                <div className="panel js-panel">
                                                        <div className="panel__head panel__head_line">
                                                                <div className="panel__group btn-group btn-group_tabs">
                                                                        <button className="btn btn_light btn_icon js-panel-btn active" onClick={() => props.setViewLOrG("list")}>
                                                                                <i className="la la-list "></i>List</button><button className="btn btn_light btn_icon js-panel-btn" onClick={() => props.setViewLOrG("grid")}><i className="la la-border-all "></i>Grid</button></div>
                                                        </div>
                                                        <div className="panel__body">
                                                                {props.viewLOrGrid === "list" ? <ProductsList /> : <ProductsGrid />}

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
                        sortYOrNo: state.sortReducer.ascendingProductsYOrN,
                        viewLOrGrid: state.productReducer.viewListOrGrid
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
                        setSortYOrN: () => dispatch(actions.setAscendingProductsYOrN()),
                        setViewLOrG: (x) => dispatch(actions.setLOrG(x))
                }
        }

)(Yeudit);

