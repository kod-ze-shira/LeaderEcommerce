import React, { useState, useEffect } from 'react'
import service from '../services/product.service'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import { connect } from "react-redux";
import { setName, setItemsList } from '../actions'
import '../pages/css/app.css';
import product1 from './product-1.jpg'
import signOut from '../FireBase/signOut'
import logo from '../pages/img/logo.svg'
import betaCRM from '../pages/img/betaCRM.svg'
import $ from 'jquery';
import Add from '../products/addProduct'
function mapStateToProps(state) {
  return {
    list: state.list,
    name: state.userName
  };
}
export default connect(mapStateToProps)(
  function Sale(props) {
    // debugger
    const { name, list, dispatch } = props

    const [pageNum, setpageNum] = useState(1);
    // const [page, setPage] = useState({
    //   error: null,
    //   isLoaded: true,
    //   items: []
    // })
    {    // (function(){
      //   var _new = $('.js-new');
      //   if (_new.length) {
      //     var open = _new.find('.js-new-open'),
      //         dropdown = _new.find('.js-new-dropdown'),
      //         backdrop = _new.find('.js-new-backdrop');

      //     open.on('click', function(){
      //       _new.toggleClass('open');
      //     });

      //     backdrop.on('click', function(){
      //       _new.removeClass('open');
      //     });
      //   }
      // }());
    // } (function () {
    //   var _new = $('.js-new');
    //   var modal = $('.modal');
    //   if (_new.length) {
    //     var open = _new.find('.js-new-open'),//כפתור פתיחה
    //       dropdown = _new.find('.js-new-dropdown'),//כרגע מוסתר צריך להפתח
    //       NewProduct = dropdown.find('#NewProduct'),
    //       backdrop = _new.find('.js-new-backdrop');//לרקע
    //     debugger
    //     open.on('click', function () {
    //       _new.toggleClass('open');
    //     });

    //     NewProduct.on('click', function () {
    //       modal.toggleClass('visible');
    //     });

    //     backdrop.on('click', function () {
    //       _new.removeClass('open');
    //       modal.removeClass('visible');
    //     });
    //   }
    // }());
  }
    function newOpen() {
      var modal = $('.modal');

      var _new = $('.js-new');
      _new.toggleClass('open');
      var backdrop = _new.find('.js-new-backdrop');//לרקע
      backdrop.on('click', function () {
        _new.removeClass('open');
        modal.removeClass('visible');
      });
    }
    function NewProduct() {
      var modal = $('.modal');
      modal.toggleClass('visible');
    }
    function okCREATE(){
      debugger
       var modal = $('.modal');
    modal.removeClass('visible');
  }
    const checked = () => {
    }
    // paging(){
    //   list.slice();
    // }
    const items = list.slice((pageNum - 1) * 6, pageNum * 6 - 1);
    
    // visible/
    return (
      <>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&amp;display=swap" rel="stylesheet" />
        <link rel="stylesheet" media="all" href="css/app.css" />
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
          <div className="container js-container extended" >
            <div className="container__head"><button className="container__action container__action_menu action js-container-toggle"><i className="la la-bars "></i></button>
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
                <button className="new__action action js-new-open" onClick={newOpen}><i className="la la-plus-circle "></i></button>
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
                  </a><a className="new__item" onClick={NewProduct} id="NewProduct">
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
                      <div className="sort__head js-sort-head">
                        <div className="sort__icon"><i className="la la-filter "></i></div>
                        <div className="sort__label">sort:</div>
                        <div className="sort__selected js-sort-selected">A-Z</div>
                        <div className="sort__arrow"><i className="la la-angle-down "></i></div>
                      </div>
                      <div className="sort__dropdown js-sort-dropdown">
                        <div className="sort__title">Sort projects by</div>
                        <div className="sort__items">
                          <div className="sort__item"><label className="switch sort__switch js-sort-switch"><input className="switch__input" type="radio" name="sort" onChange={checked} /><span className="switch__content">A-Z</span></label></div>
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
                          {list.map((item, index) => (

                            <div className="data__item">
                              <div className="data__row" >
                                <div className="data__cell data__cell_xl">
                                  <div className="data__main">
                                    <div className="data__effect mobile-hide"><label className="switch"><input className="switch__input" type="checkbox" /><span className="switch__content"></span></label></div>
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
                                  <div className="data__label">amount</div>
                                </div>
                                <div className="data__cell mobile-hide">
                                  <div className="data__content">{item.amount}</div>
                                  <div className="data__label">Qty.</div>
                                </div>
                                <div className="data__cell mobile-hide">
                                  <div className="data__content"><strong>{item.color}</strong> / {index}</div>
                                  <div className="data__label">Rating</div>
                                </div>
                                <div className="data__cell mobile-hide">
                                  <div className="data__content"><strong>{item.price}</strong></div>
                                  <div className="data__label">Price</div>
                                </div>
                                <div className="data__cell mobile-hide">
                                  <div className="tag gray">cotagerus!s!///\\\</div>
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
                          {items.map((item, index) => (

                            // if(index<7){}


                            <div className="data__item">
                              <div className="data__corner">
                                <div className="data__corner data__corner_left">
                                  <label className="switch">
                                    <input className="switch__input" type="checkbox" />
                                    <span className="switch__content"></span>
                                  </label></div>
                                <div className="data__row">
                                  <div className="data__cell">
                                    <div className="data__main">
                                      <div className="data__preview">
                                        <img className="data__pic" src="../pages/img/user-1.jpg" alt="Product" /></div>
                                      <div className="data__wrap">
                                        <div className="data__content">
                                          <strong>{item.name}</strong></div>
                                        <div className="data__label">
                                          {item.color}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="data__cell">
                                    <div className="data__content">
                                      <strong>{item.amount}</strong> / {index}</div>
                                    <div className="data__stars"><i className="la la-star "></i><i className="la la-star "></i><i className="la la-star "></i><i className="la la-star "></i><i className="la la-star active"></i></div>
                                  </div>
                                  <div className="data__foot">
                                    <div className="data__box">
                                      <strong>{item.color}</strong></div>
                                    <div className="data__box">
                                      <strong>{item.price}</strong></div>
                                  </div>
                                </div>
                              </div>

                            </div>
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
        <div className="modal js-modal" data-backdrop="true" id="exampleModal">
          <div className="modal__container js-modal-container">
            <div className="modal__head"><button className="modal__action modal__action_close action js-modal-close"><i className="la la-angle-left "></i></button>
              <div className="modal__wrap">
                <div className="modal__title">Create New Product</div>
              </div><button className="modal__action action action_stroke"><i className="la la-ellipsis-h "></i></button>
            </div>
            <div className="modal__body">
              <Add cb={okCREATE}/>
              {/* <div className="form form_create">
                <div className="form__preview"><input className="form__file" type="file" /><i className="la la-user-plus "></i></div>
                {/* <div className="field form__field">
                  <div className="field__label">Product's name</div>
                  <div className="field__wrap"><input className="field__input" type="text" placeholder="Start typing…" />
                    <div className="field__icon"><i className="la la-cube "></i></div>
                  </div>
                </div>
                <div className="field form__field">
                  <div className="field__label">Product's name</div>
                  <div className="field__wrap"><input className="field__input" type="text" placeholder="Start typing…" />
                    <div className="field__icon"><i className="la la-cube "></i></div>
                  </div>
                </div> /}
                <div className="form__row">
                  <div className="form__col">
                    <div className="field form__field">
                      <div className="field__label">שם</div>
                      <div className="field__wrap"><input className="field__input" type="text" placeholder="Start typing…" />
                        <div className="field__icon"><i className="la la-truck-loading "></i></div>
                      </div>
                    </div>
                  </div>
                  <div className="form__col">
                    <div className="field form__field">
                      <div className="field__label">תאור</div>
                      <div className="field__wrap"><input className="field__input" type="text" placeholder="Start typing…" />
                        <div className="field__icon"><i className="la la-warehouse "></i></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form__row">
                  <div className="form__col">
                    <div className="field form__field">
                      <div className="field__label">Sku</div>
                      <div className="field__wrap"><input className="field__input" type="text" placeholder="Start typing…" />
                        <div className="field__icon"><i className="la la-truck-loading "></i></div>
                      </div>
                    </div>
                  </div>
                  <div className="form__col">
                    <div className="field form__field">
                      <div className="field__label">Available quantity</div>
                      <div className="field__wrap"><input className="field__input" type="text" placeholder="Start typing…" />
                        <div className="field__icon"><i className="la la-warehouse "></i></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form__row">
                  <div className="form__col">
                    <div className="field form__field">
                      <div className="field__label">Price</div>
                      <div className="field__wrap"><input className="field__input" type="text" placeholder="Start typing…" />
                        <div className="field__icon"><i className="la la-wallet "></i></div>
                      </div>
                    </div>
                  </div>
                  <div className="form__col">
                    <div className="field form__field">
                      <div className="field__label">Category</div>
                      <div className="field__wrap"><select className="field__select">
                        <option disabled selected>Select category</option>
                        <option>Category 1</option>
                        <option>Category 2</option>
                        <option>Category 3</option>
                      </select>
                        <div className="field__icon"><i className="la la-angle-down "></i></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form__foot"><button className="form__btn btn btn_light">Cancel</button><button className="form__btn btn">Add & Proceed</button></div>
              </div> */}
            </div>
          </div>
        </div>
      </>
    );
  });



{/*       <div className="sidebar js-sidebar"> 

            בתוך:^  <div className="sidebar__nav">
                <nav className="nav js-nav extended">
                  <a className="nav__link nav__link_head" href="/">
                    <div className="nav__preview"><img className="nav__pic" src={logo} alt="Logo" /></div>
                    <div className="nav__title"><img className="nav__pic" src={betaCRM} alt="betaCRM" /></div>
                  </a>
                  <div className="nav__list">
                    <div className="nav__primary js-nav-primary">
                      <div className="nav__group"><a className="nav__link active" href="#" title="Dashboard">
                        <div className="nav__preview"><i className="la la-tachometer-alt "></i></div>
                        <div className="nav__title">Dashboard</div>
                      </a><a className="nav__link" href="#" title="Projects">
                          <div className="nav__preview"><i className="la la-toolbox "></i></div>
                          <div className="nav__title">Projects</div>
                        </a><a className="nav__link" href="#" title="Tasks">
                          <div className="nav__preview"><i className="la la-clipboard-check "></i></div>
                          <div className="nav__title">Tasks</div>
                        </a><a className="nav__link" href="#" title="Kanban">
                          <div className="nav__preview"><i className="la la-images "></i></div>
                          <div className="nav__title">Kanban</div>
                        </a><a className="nav__link" href="#" title="Calendar">
                          <div className="nav__preview"><i className="la la-calendar-week "></i></div>
                          <div className="nav__title">Calendar</div>
                        </a><a className="nav__link nav__link_menu js-nav-link-menu" href="#">
                          <div className="nav__preview"><i className="la la-bars "></i></div>
                        </a></div>
                    </div>
                    <div className="nav__secondary js-nav-secondary">
                      <div className="nav__group"><a className="nav__link" href="#" title="Contacts">
                        <div className="nav__preview"><i className="la la-user-lock "></i></div>
                        <div className="nav__title">Contacts</div>
                      </a><a className="nav__link" href="#" title="Messages">
                          <div className="nav__preview"><i className="la la-comments "></i>
                            <div className="nav__online online"></div>
                          </div>
                          <div className="nav__title">Messages</div>
                        </a><a className="nav__link" href="#" title="Products">
                          <div className="nav__preview"><i className="la la-cube "></i></div>
                          <div className="nav__title">Products</div>
                        </a><a className="nav__link" href="#" title="Invoices">
                          <div className="nav__preview"><i className="la la-calculator "></i></div>
                          <div className="nav__title">Invoices</div>
                        </a><a className="nav__link" href="#" title="File Browser">
                          <div className="nav__preview"><i className="la la-folder-open "></i></div>
                          <div className="nav__title">File Browser</div>
                        </a><a className="nav__link" href="#" title="Notifications">
                          <div className="nav__preview"><i className="la la-bullseye "></i>
                            <div className="nav__online online bg-red-raw"></div>
                          </div>
                          <div className="nav__title">Notifications</div>
                        </a><a className="nav__link" href="#" title="Reports">
                          <div className="nav__preview"><i className="la la-chart-area "></i></div>
                          <div className="nav__title">Reports</div>
                        </a><a className="nav__link" href="#" title="Help Center">
                          <div className="nav__preview"><i className="la la-question "></i></div>
                          <div className="nav__title">Help Center</div>
                        </a><a className="nav__link nav__link_user" href="#" title="John Doe">
                          <div className="nav__preview"><img className="nav__pic" src="../pages/img/user-1.jpg" alt="User" />
                            <div className="nav__online online"></div>
                          </div>
                          <div className="nav__title">John Doe</div>
                        </a></div>
                    </div>
                  </div>
                </nav>
              </div> */}

              // if (page.error) {
    //   return <div>Error: {page.error.message}</div>;
    // } else if (!page.isLoaded) {
    //   page.isLoaded = true
    //   return <div>Loading...</div>;
    // } else {
    // const dropNew = (event) => {
    //   // debugger
    //   let w = event.nativeEvent.path[1];
    //   w.classList.add("open")
    // }