import React,{useEffect} from 'react';
// import { useParams } from "react-router";
import { connect } from 'react-redux';
import { actions } from '../redux/action'
import './crudProducts.css'
import $ from 'jquery'; 

//1
const useStyles = (theme) => ({

})

function CrudProducts(props) {
        


        
        // var list;

        useEffect(()=>{
              props.getAllProducts(); 
              
// search
(function(){
	var search = $('.js-search');
	if (search.length) {
		var open = search.find('.js-search-open'),
				input = search.find('.js-search-input'),
				dropdown = search.find('.js-search-dropdown'),
				results = search.find('.js-search-results'),
				backdrop = search.find('.js-search-backdrop');

		open.on('click', function(){
			search.addClass('open');
			input.focus();
		});

		input.on('keyup', function(){
			if ($(this).val().length >= 3) {
				results.addClass('visible');
			} else {
				results.removeClass('visible');
			}
		});

		backdrop.on('click', function(){
			search.removeClass('open');
		});
	}
}());

// sort
(function(){
	debugger;
	var sort = $('.js-sort');
	if (sort.length) {
		var head = sort.find('.js-sort-head'),
				selected = sort.find('.js-sort-selected'),
				dropdown = sort.find('.js-sort-dropdown'),
				switch_ = sort.find('.js-sort-switch'),
				apply = sort.find('.js-sort-apply'),
				backdrop = sort.find('.js-sort-backdrop');

		head.on('click', function(){
			sort.addClass('open');
		});

		switch_.on('change', function(){
			selected.text($(this).find('span').text());
		});

		apply.on('click', function(){
			sort.removeClass('open');
		});

		backdrop.on('click', function(){
			sort.removeClass('open');
		});
	}
}());


// new
(function(){
	var _new = $('.js-new');
	if (_new.length) {
		var open = _new.find('.js-new-open'),
				dropdown = _new.find('.js-new-dropdown'),
				backdrop = _new.find('.js-new-backdrop');

		open.on('click', function(){
			_new.toggleClass('open');
		});

		backdrop.on('click', function(){
			_new.removeClass('open');
		});
	}
}());


        })

        
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
                </div>
                <div>
                <div className="container__head">
                       
                <div className="container__title title title_md">Products</div><signOut/>
                <div className="container__search search js-search">
                <button className="search__action action js-search-open">
                <i className="la la-search "></i></button>
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
                <button className="new__action action js-new-open" onClick={console.log("new open")}><i className="la la-plus-circle "></i></button>
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
                <div className="panel__group btn-group btn-group_tabs"><button className="btn btn_light btn_icon js-panel-btn active"><i className="la la-list "></i>List</button><button className="btn btn_light btn_icon js-panel-btn"><i className="la la-border-all "></i>Grid</button></div>
                <div className="panel__group">
                <div className="sort js-sort">
               <div className="sort__dropdown js-sort-dropdown">
                <div className="sort__title">Sort projects by</div>
                <div className="sort__items">
                <div className="sort__item"><label className="switch sort__switch js-sort-switch"><input className="switch__input" type="radio" name="sort" onChange={console.log("checked")} /><span className="switch__content">A-Z</span></label></div>
                <div className="sort__item"><label className="switch sort__switch js-sort-switch"><input className="switch__input" type="radio" name="sort" /><span className="switch__content">Budget</span></label></div>
                <div className="sort__item"><label className="switch sort__switch js-sort-switch"><input className="switch__input" type="radio" name="sort" /><span className="switch__content">Assigned Tasks</span></label></div>
                <div className="sort__item"><label className="switch sort__switch js-sort-switch"><input className="switch__input" type="radio" name="sort" /><span className="switch__content">Progress</span></label></div>
                <div className="sort__item"><label className="switch sort__switch js-sort-switch"><input className="switch__input" type="radio" name="sort" /><span className="switch__content">Date Created</span></label></div>
                </div>
                <div className="sort__foot"><button className="sort__btn btn btn_light js-sort-apply">Apply</button></div>
                </div>
                <div className="sort__backdrop backdrop js-sort-backdrop"></div>
                </div>
                </div>
                </div>
                <div className="panel__body">
                {/* PpAaNnEeLl !1 */}
                <div className="panel__tab js-panel-tab"
                style={{ display: 'block' }}>
                <div className="data data_list">
                <div className="data__container">
                <div className="data__head">
                <div className="data__row">
                <div className="data__cell data__cell_xl">
                <div className="data__filter">שם<i className="la la-sort-alpha-down "></i></div>
                </div>
                <div className="data__cell">
                <div className="data__filter">תאור<i className="la la-sort-alpha-down "></i></div>
                </div>
                <div className="data__cell">
                <div className="data__filter">מק"ט<i className="la la-sort-alpha-down "></i></div>
                </div>
                <div className="data__cell">
                <div className="data__filter">יייי<i className="la la-sort-alpha-down "></i></div>
                </div>
                <div className="data__cell">
                <div className="data__filter">מחיר<i className="la la-sort-alpha-down "></i></div>
                </div>
                <div className="data__cell">
                <div className="data__filter">קטגוריה<i className="la la-sort-alpha-down "></i></div>
                </div>
                <div className="data__cell data__cell_action"></div>
                </div>
                </div>
                <div className="data__body">
   {props.products.map((item, index) => (
                        
                        <div className="data__item">
                        <div className="data__row" >
                        <div className="data__cell data__cell_xl">
                        <div className="data__main">
                     
                        <div className="data__preview">
                        {/* <img className="data__pic" src={product1} alt="Product" /> */}</div>
                        <div className="data__wrap">
                        <div className="data__content">
                        <strong>{item.name}</strong></div>
                        <div className="data__label">{item.color}</div>
                        </div>
                        </div>
                        </div>
                        <div className="data__cell mobile-hide">
                        <div className="data__content">{item.amount}</div>
                        </div>
                        <div className="data__cell mobile-hide">
                        <div className="data__content">{item.amount}</div>
                        </div>
                        <div className="data__cell mobile-hide">
                        <div className="data__content"><strong>{item.color}</strong> / {index}</div>
                        </div>
                        <div className="data__cell mobile-hide">
                        <div className="data__content"><strong>{item.price}</strong></div>
                        </div>
                        <div className="data__cell mobile-hide">
                        <div className="tag gray">cotagerus</div>
                        </div>
                        <div className="data__cell data__cell_action"><a href={"/products/"+item._id}><button className="action action_stroke" ><i className="la la-ellipsis-h "></i></button></a></div>
                        </div>
                        </div>
                        ))}
                        </div>
                        </div>
                        </div>
                        </div>
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
                        (state)=>{
                                return {
                                        products:state.productReducer.products
                                }
                        },
                        (dispatch)=>{
                                return {
                                        // getAllProducts:()=>dispatch(actions.getAllProducts()) 
                                        // getAllProducts:()=>dispatch(actions.setProducts()) 
                                        getAllProducts:()=>dispatch(actions.getAllProducts())
                                }
                        }
                        
                        )(CrudProducts);
                        