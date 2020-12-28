import React, { useEffect, useState } from 'react';
// import { useParams } from "react-router";
import { connect } from 'react-redux';
import { actions } from '../redux/action'
import './crudProducts.css';
import $ from 'jquery'
import productImg from '../assets/products/product-pic-7.png'
import cloneDeep from 'lodash/cloneDeep';

function ProductsList(props) {

        const [file, setFile] = useState()
        const fileI = React.createRef();
        let { Name, Description, Amount, Price, Category } = {
                Name: "Name",
                Description: "Description",
                Amount: "Amount",
                Price: "Price",
                Category: "Category"
        }
        // const [file, setFile] = useState(0);
        useEffect(() => {

                $(".data__preview input").on("change", function () {
                        debugger
                        console.log("useeff", $(this));
                })

                // var panel = $('.js-panel');
                // if (panel.length) {
                //         var btn = panel.find('.js-panel-btn, .js-panel-action'),
                //                 tab = panel.find('.js-panel-tab');

                // }
        }, [])


        const onChangeHandlerImage = (event, t) => {

                // const input = fileI.current
                debugger
                if (event) {
                        debugger;
                        console.log("key", t);
                        let reader = new FileReader();
                        reader.onloadend = () => {
                                props.changeProductImage(reader.result, fileI.current.name)
                                // props.setSearchReasult(props.products)
                        }
                        reader.readAsDataURL(event)
                }

                // debugger;
                // if (event) {
                //         let reader = new FileReader();
                //         reader.onloadend = async () => {
                //                 await props.changeProductImage(reader.result)
                //                 console.log("img", props.products[0]);
                //                 props.setSearchReasult(props.products);
                //         }
                //         reader.readAsDataURL(event)
                // }
        }

        // const onChangeHandlerImage = (event, thiss) => {
        //         debugger;
        //         if (event) {
        //                 let reader = new FileReader();
        //                 reader.onloadend = () => {
        //                         debugger;
        //                         props.changeProductImage(0, reader.result)
        //                         console.log("img", props.products[0]);

        //                 }
        //                 reader.readAsDataURL(event)
        //         }
        //         props.setSearchReasult(props.products);

        // }

        const sortColumn = (columnName) => {
                debugger;
                props.setSortYOrN();

                let sortProducts = props.filteredProducts;

                let bb = sortProducts.slice().sort((a, b) => {
                        debugger
                        let x = String(a[columnName]).toLowerCase();
                        let y = String(b[columnName]).toLowerCase()

                        if (x < y) { return -1; }
                        if (x > y) { return 1; }
                        return 0

                        // return a[columnName].localeCompare(b[columnName])
                });
                if (!props.sortYOrNo)
                        bb.reverse();

                debugger;
                console.log("sort", sortProducts);
                props.setSearchReasult(bb);

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

                        <div className="panel__tab js-panel-tab"
                                style={{ display: 'block' }}>
                                <div className="data data_list">
                                        <div className="data__container">
                                                <div className="data__head">
                                                        <div className="data__row">
                                                                <div className="data__cell data__cell_xl" >
                                                                        <div className="data__filter" onClick={() => sortColumn("name")}>{Name}<i className="la la-sort-alpha-down "></i></div>
                                                                </div>
                                                                <div className="data__cell">
                                                                        <div className="data__filter" onClick={() => sortColumn("description")}>{Description}<i className="la la-sort-alpha-down "></i></div>
                                                                </div>
                                                                <div className="data__cell">
                                                                        <div className="data__filter" onClick={() => sortColumn("amount")}>{Amount}<i className="la la-sort-alpha-down "></i></div>
                                                                </div>

                                                                <div className="data__cell">
                                                                        <div className="data__filter" onClick={() => sortColumn("price")}>{Price}<i className="la la-sort-alpha-down "></i></div>
                                                                </div>
                                                                <div className="data__cell">
                                                                        <div className="data__filter" onClick={() => sortColumn("category")}>{Category}<i className="la la-sort-alpha-down "></i></div>
                                                                </div>
                                                                <div className="data__cell data__cell_action"></div>
                                                        </div>
                                                </div>
                                                <div className="data__body">
                                                        {props.filteredProducts.map((item, index) => (
                                                                <div className="data__item" key={index}>
                                                                        <div className="data__row" >
                                                                                <div className="data__cell data__cell_xl">
                                                                                        <div className="data__main">
                                                                                                <div className="data__effect mobile-hide"><label className="switch">
                                                                                                        <input className="switch__input" type="button" onClick={() => { props.delete(item._id); props.setSearchReasult(props.products); }} />
                                                                                                        <span className="switch__content">
                                                                                                        </span></label></div>
                                                                                                <div className="data__preview">
                                                                                                        <label className="prdct_img" for="fileInput">
                                                                                                                <img alt="product image" src={item.images[0] ? item.images[0] : productImg}
                                                                                                                // src={this.props.urlImage ? this.props.urlImage.image :logoC } 
                                                                                                                />
                                                                                                        </label>
                                                                                                        <input
                                                                                                                ref={fileI}
                                                                                                                name={index}
                                                                                                                type={"file"}
                                                                                                                id="fileInput"
                                                                                                                htmlFor="myInput"
                                                                                                                accept="image/*"
                                                                                                                style={{
                                                                                                                        display: 'none',
                                                                                                                        cursor: 'pointer'
                                                                                                                }}
                                                                                                                onChange={(e) => onChangeHandlerImage(e.target.files[0], $(this).attr("name"))}
                                                                                                        />
                                                                                                </div>
                                                                                                <div className="data__wrap">
                                                                                                        <div className="data__content">
                                                                                                                <strong>{item.name}</strong></div>
                                                                                                        <div className="data__label">SKU {item.SKU}</div>
                                                                                                </div>
                                                                                        </div>
                                                                                </div>
                                                                                <div className="data__cell mobile-hide">
                                                                                        <div className="data__content">{item.description}</div>
                                                                                        {/* <div className="data__label">amount</div> */}
                                                                                </div>
                                                                                <div className="data__cell mobile-hide">
                                                                                        <div className="data__content"><strong>{item.amount}</strong> </div>
                                                                                </div>
                                                                                <div className="data__cell mobile-hide">
                                                                                        <div className="data__content"><strong>${item.price}</strong></div>
                                                                                </div>
                                                                                {item.category && <div className="data__cell mobile-hide">
                                                                                        <div style={{ "backgroundColor": item.category.color }}
                                                                                                className="tag gray">{item.category.categoryName}</div>
                                                                                </div>}

                                                                                <div className="data__cell data__cell_action">
                                                                                        <button className="action action_stroke" onClick={() => { props.setcomponnet("editProduct"); props.setCurrentProduct(item) }} >
                                                                                                <i className="la la-ellipsis-h "></i>
                                                                                        </button></div>                                                                        </div>
                                                                </div>
                                                        ))}
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
                        sortYOrNo: state.sortReducer.ascendingProductsYOrN
                }
        },
        (dispatch) => {
                return {
                        addNewImageFromDbP: (f, t) => dispatch(actions.addNewImageFromDb(f, t)),
                        setSearchReasult: (filteredItems) => dispatch(actions.setFilteredItems(filteredItems)),
                        setcomponnet: (r) => dispatch(actions.setCurrentComponent(r)),
                        changeProductImage: (p, i) => dispatch(actions.addImgToProduct({ p, i })),
                        delete: (i) => { dispatch(actions.deleteProduct(i)) },
                        setSortYOrN: () => dispatch(actions.setAscendingProductsYOrN()),
                        setCurrentProduct: (p) => dispatch(actions.setCurrentProduct(p)),

                }
        }

)(ProductsList);

