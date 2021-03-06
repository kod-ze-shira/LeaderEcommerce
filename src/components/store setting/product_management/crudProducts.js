import React, { useEffect } from 'react';
// import { useParams } from "react-router";
import { connect } from 'react-redux';
import { actions } from '../../../redux/action'
import './crudProducts.css';
//בכדי לראות את הטבלה מסודרת צריך להוריד את ההערה
//import { editProduct } from '../redux/middleWares/crud';
import ProductsList from './productsList';
import ProductsGrid from './productsGrid'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, withRouter } from 'react-router-dom';

function CrudProducts(props) {

        // const [file, setFile] = useState()

        let i = 0;

        // const onChangeHandlerImage = (event, thiss) => {

        //         if (event) {
        //                 let reader = new FileReader();
        //                 reader.onloadend = () => {
        //                          ;
        //                         props.changeProductImage(0, reader.result)


        //                 }
        //                 reader.readAsDataURL(event)
        //         }
        //         props.setSearchReasult(props.products);

        // }

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
                        <div className="page">
                                <div>
                                        <div className="container__head">
                                                <div className="container__title crud_title title_md">Products</div>
                                                <div className="container__search search js-search mySearch">
                                                   <button className="search__action action js-search-open" onClick={() => { props.setcomponnet("search");}}>
                                                        <FontAwesomeIcon
                                                             icon={['fas','search']}>
                                                             </FontAwesomeIcon>
                                                                </button>
                                                </div>
                                                <div className="container__new new js-new">
                                                        <button className="new__action action js-new-open" onClick={() => { props.setcomponnet("AddProduct") ;   props.history.push(`/productNew`)}}>
                                                             <FontAwesomeIcon
                                                             icon={['fas','plus-circle']}>
                                                             </FontAwesomeIcon>
                                                        </button>
                                                </div>
                                        </div>
                                        <div className="container__body">
                                                <div className="panel js-panel">
                                                        <div className="panel__head panel__head_line">
                                                                <div className="panel__group btn-group btn-group_tabs">
                                                                        <button className="btn btn_light btn_icon js-panel-btn crud_active" onClick={() => props.setViewLOrG("list")}>
                                                                                <i className="la la-list "></i>List</button><button className="btn btn_light btn_icon js-panel-btn" onClick={() => props.setViewLOrG("grid")}><i className="la la-border-all "></i>Grid</button></div>
                                                        </div>
                                                        <div className="panel__body">
                                                                {props.viewLOrGrid === "list" ? <ProductsList /> : <ProductsGrid />}
                                                                <div className="panel__foot">
                                                                        <div className="pager"><a className="pager__arrow action action_icon_before" href="#"><i className="la la-angle-left "></i>Prev</a>
                                                                                <div className="pager__list"><a className="pager__link action" href="#">1</a><a className="pager__link action" href="#">2</a><a className="pager__link action crud_active" href="#">3</a><a className="pager__link action" href="#">4</a><a className="pager__link action" href="#">5</a></div><a className="pager__arrow action action_icon_after" href="#">Next<i className="la la-angle-right "></i></a>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </>)
}

export default connect(
        (state) => {
                return {
                        products: state.productReducer.products,
                        //filteredProducts: state.searchReducer.filteredItems,
                        //items: state.searchReducer.filteredItems,
                        //sortYOrNo: state.sortReducer.ascendingProductsYOrN,
                        viewLOrGrid: state.productReducer.viewListOrGrid
                }
        },
        (dispatch) => {
                return {
                        addNewImageFromDbP: (f, t) => dispatch(actions.addNewImageFromDb(f, t)),
                        changeProductImage: (i, p) => dispatch(actions.setProductImage({ i, p })),
                        setSearchReasult: (filteredItems) => dispatch(actions.setFilteredItems(filteredItems)),
                        setcomponnet: (r) => dispatch(actions.setCurrentComponent(r)),
                        // deleteProduct: (i) => { dispatch(actions.deleteProduct(i)) },
                        // setCurrentProduct: (p) => dispatch(actions.setCurrentProduct(p)),
                        setSortYOrN: () => dispatch(actions.setAscendingProductsYOrN()),
                        setViewLOrG: (x) => dispatch(actions.setLOrG(x))
                }
        }

)(withRouter(CrudProducts));
