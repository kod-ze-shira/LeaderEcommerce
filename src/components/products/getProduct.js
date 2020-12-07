import React, { useState, useEffect } from 'react'
import service from '../services/product.service'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Update from './updateProduct';
import { connect } from 'react-redux';
import product1 from '../pages/img/product-1.jpg'
import  SignOut from '../FireBase/signOut'
// להכניס לקונקט את כל הקומפוננט, למחוק את הגט-אול, לשנות שהשינויים יהיו ברידקס ובשרת
function mapStateToProps(state) {
  return {
    list: state.list,
    Uname: state.userName
  };
}
export default connect(mapStateToProps)(
  function GetProducts(props) {
    const { Uname, list, dispatch } = props
    const id = props.match.params.id;
    const product = list.filter(x => x._id == id)[0];
    // const { name, description, sku, amount, price } = product;
    // product
    const [page, setPage] = useState({
      isLoaded: false,
      list: [],
      product: {
        name: '',
        description: '',
        sku: '',
        amount: '',
        price: ''
      }
    })
    const [myValues, setMyValues] = useState({
      name: '',
      description: '',
      sku: '',
      amount: '',
      price: ''
    });
    const update = (event) => {
      debugger
      setMyValues({
        ...myValues,
        [event.target.name]: event.target.value
      });
    }
    const cancel=()=>{
      props.history.goBack()
    }
    const Submit = (event)=>{
      // debugger
        service.UpdateProduct(id,myValues).then(props.history.goBack())
        // updateOK(myValues);
    }

    if (list && product && !page.isLoaded) {
      setPage({ isLoaded: true, product: product, list: list })
      setMyValues(product);
    }

    debugger

    { // function GetProductById() {
      //   const product= page.list.filter(x => x._id == id)[0];
      //   if(product){
      //     setPage({isLoaded:true,product:product})
      //     debugger
      //   }
      //   else
      //   if(page.isLoaded)
      //     setPage({isLoaded:false})
      // }
      //   useEffect(GetProductById , [])      
    }
    {// function getall(){
      //   setPage({isLoaded:false})
      //   service.getAllProducts().then((result)=>{
      //     setPage(result)
      //     // dispatch(setItemsList(result.items))

      //     console.log(page)
      //     debugger
      // })
      // } 
      // const del=(id)=>{
      //   debugger;
      //    console.log(" sss ")
      //    service.DeleteProduct(id).then(()=>getall())//לא עובד.then(()=>this.componentDidMount())
      // }
      // let [u,setU]=useState(0) ;
      // const updateClick=(id)=>{
      //   debugger;

      //   // item.amount="100";
      //   //  console.log(item)
      //   setU(id);

      // }
      // const updateOK=(item)=>{
      //   debugger;
      //   service.UpdateProduct(item.id,item).then(()=>getall())

      //   // item.amount="100";
      //   //  console.log(item)
      //   setU(0);

      // }
    }
    // if (error) {
    // return <div>Error: {error.message}</div>;
    // } else
    const { isLoaded } = page;
    if (!isLoaded) {
      return <div><h2>no product id!</h2></div>;
    } else {
      return (
        <Router>
          <Switch>
            <Route exact path="">
              <div className="page">
              <SignOut></SignOut>
                <div className="sidebar sidebar_info js-sidebar">
                  {/* <div className="sidebar__nav">
                    <nav className="nav js-nav"><a className="nav__link nav__link_head" href="/">
                      <div className="nav__preview"><img className="nav__pic" src="img/logo.svg" alt="Logo" /></div>
                      <div className="nav__title"><img className="nav__pic" src="img/betaCRM.svg" alt="betaCRM" /></div>
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
                              <div className="nav__preview"><img className="nav__pic" src="img/user-1.jpg" alt="User" />
                                <div className="nav__online online"></div>
                              </div>
                              <div className="nav__title">John Doe</div>
                            </a></div>
                        </div>
                      </div>
                    </nav>
                  </div> */}
                  {/* <div className="sidebar__container js-sidebar-container toggled">
                    <div className="sidebar__head">
                      <div className="sidebar__preview"><img className="sidebar__pic" src="img/product-1.jpg" alt="Product" /></div>
                      <div className="sidebar__wrap">
                        <div className="sidebar__title">Macbook Pro 2019</div>
                        <div className="sidebar__text">SKU 345-095</div>
                      </div><button className="sidebar__action sidebar__action_toggle action js-sidebar-toggle"><i className="la la-angle-left "></i></button>
                    </div>
                    <div className="sidebar__inner">
                      <div className="sidebar__section">
                        <div className="info">
                          <div className="info__section">
                            <div className="info__title">About</div>
                            <div className="info__body">
                              <div className="info__text">Color is so powerful that it can persuade, motivate, inspire and touch people’s soft spot the heart. This is the reason why understanding colors is pretty crucial in relating.</div>
                            </div>
                          </div>
                          <div className="info__section">
                            <div className="info__title">Members</div>
                            <div className="info__body">
                              <div className="members">
                                <div className="members__item"><img className="members__pic" src="img/user-1.jpg" alt="User" /></div>
                                <div className="members__item"><img className="members__pic" src="img/user-2.jpg" alt="User" /></div>
                                <div className="members__item"><img className="members__pic" src="img/user-3.jpg" alt="User" /></div>
                                <div className="members__item"><button className="action action_stroke"><i className="la la-plus "></i></button></div>
                              </div>
                            </div>
                          </div>
                          <div className="info__section">
                            <div className="info__title">Contact details</div>
                            <div className="info__body">
                              <div className="contacts">
                                <div className="contacts__item">
                                  <div className="contacts__icon"><i className="la la-envelope-open "></i></div>
                                  <div className="contacts__detail">johanna.stevens<wbr />@gmail.com</div>
                                </div>
                                <div className="contacts__item">
                                  <div className="contacts__icon"><i className="la la-fax "></i></div>
                                  <div className="contacts__detail">402-001-4477</div>
                                </div>
                                <div className="contacts__item">
                                  <div className="contacts__icon"><i className="la la-globe-americas "></i></div>
                                  <div className="contacts__detail">05 Otilia Brook Apt. 181</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="info__section">
                            <div className="info__title">Categories</div>
                            <div className="info__body">
                              <div className="tag-group">
                                <div className="tag gray">Designers</div>
                                <div className="tag gray">Employees</div>
                              </div>
                            </div>
                          </div>
                          <div className="info__section">
                            <div className="info__title">Overall progress</div>
                            <div className="info__body">
                              <div className="info__cover">
                                <div className="info__stats">
                                  <div className="info__subtitle">Tasks</div>
                                  <div className="info__values"><strong>96</strong> / 148</div>
                                </div>
                                <div className="info__progress progress">
                                  <div className="progress__value bg-red-raw" style={{ width: '30%' }}></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sidebar__section mobile-hide">
                        <div className="history">
                          <div className="history__container">
                            <div className="history__head">
                              <div className="history__wrap">
                                <div className="history__title title title_sm">Conversion history</div>
                                <div className="history__text">Week to week performance</div>
                              </div><a className="history__link" href="#"><i className="la la-chart-area "></i></a>
                            </div>
                            <div className="history__chart">
                              <div id="chart-history-area"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="container js-container extended">
                  <div className="container__head">
                    <button className="container__action container__action_menu action js-container-toggle"><i className="la la-bars "></i></button>
                    <div className="container__title title title_md">Item Settings</div>
                    <div className="container__search search js-search"><button className="search__action action js-search-open"><i className="la la-search "></i></button>
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
                              <div className="search__preview"><img className="search__pic" src="img/user-1.jpg" alt="User" /></div>
                            </div>
                            <div className="search__cell">
                              <div className="search__title">Bradley Wilkins</div>
                              <div className="search__text">b.wilkins@gmail.com</div>
                            </div>
                            <div className="search__cell mobile-hide">
                              <div className="search__tag tag gray">Designer</div>
                            </div>
                          </a></div>
                      </div>
                      <div className="search__backdrop backdrop js-search-backdrop"></div>
                    </div>
                    <div className="container__new new js-new"><button className="new__action action js-new-open"><i className="la la-plus-circle "></i></button>
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
                        </a><a className="new__item" href="#">
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
                    <div className="panel">
                      <div className="settings">
                        <div className="settings__container">
                          <div className="settings__inner">
                            <div className="settings__tab" style={{ display: 'block' }} data-tabs-group="settings" data-tabs-item="01">
                              <div className="gallery">
                                <div className="gallery__item"><img className="gallery__pic" src={product1} alt="Gallery Item" /><button className="gallery__action action action_stroke"><i className="la la-trash-alt "></i></button></div>
                                <div className="gallery__item"><img className="gallery__pic" src="img/product-1-lg.jpg" alt="Gallery Item" /><button className="gallery__action action action_stroke"><i className="la la-trash-alt "></i></button></div>
                                <div className="gallery__item"><img className="gallery__pic" src="img/product-1-lg.jpg" alt="Gallery Item" /><button className="gallery__action action action_stroke"><i className="la la-trash-alt "></i></button></div>
                                <div className="gallery__item"><img className="gallery__pic" src="img/product-1-lg.jpg" alt="Gallery Item" /><button className="gallery__action action action_stroke"><i className="la la-trash-alt "></i></button></div>
                                <div className="gallery__item"><img className="gallery__pic" src="img/product-1-lg.jpg" alt="Gallery Item" /><button className="gallery__action action action_stroke"><i className="la la-trash-alt "></i></button></div>
                                <div className="gallery__item"><img className="gallery__pic" src="img/product-1-lg.jpg" alt="Gallery Item" /><button className="gallery__action action action_stroke"><i className="la la-trash-alt "></i></button></div>
                              </div>
                              <div className="form form_settings">
                                <div className="form__row">
                                  <div className="form__col">
                                    <div className="field form__field">
                                      <div className="field__label">שם</div>
                                      <div className="field__wrap">
                                        <input className="field__input" type="text" onChange={update} value={myValues.name} name="name" placeholder="Start typing…" />
                                        <div className="field__icon"><i className="la la-truck-loading "></i></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="form__col">
                                    <div className="field form__field">
                                      <div className="field__label">תאור</div>
                                      <div className="field__wrap">
                                        <input className="field__input" type="text" placeholder="Start typing…" name="description" id="description-in" onChange={update} value={myValues.description} />
                                        <div className="field__icon"><i className="la la-warehouse "></i></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="form__row">
                                  <div className="form__col">
                                    <div className="field form__field">
                                      <div className="field__label">מק"ט</div>
                                      <div className="field__wrap">
                                        <input className="field__input" type="text" name="sku" id="sku-in" onChange={update} value={myValues.sku} placeholder="Start typing…" />
                                        <div className="field__icon"><i className="la la-truck-loading "></i></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="form__col">
                                    <div className="field form__field">
                                      <div className="field__label">כמות</div>
                                      <div className="field__wrap">
                                        <input className="field__input" type="number" placeholder="Start typing…" name="amount" id="amount-in" onChange={update} value={myValues.amount} />
                                        <div className="field__icon"><i className="la la-warehouse "></i></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="form__row">
                                  <div className="form__col">
                                    <div className="field form__field">
                                      <div className="field__label">מחיר</div>
                                      <div className="field__wrap">
                                        <input className="field__input" type="text" placeholder="Start typing…" name="price" id="price-in" onChange={update} value={myValues.price} />
                                        <div className="field__icon"><i className="la la-wallet "></i></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="form__col">
                                    <div className="field form__field">
                                      <div className="field__label">קטגוריה</div>
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
                                {/* מטבע ושפה (לא עושה כלום)י
                                ומיקום */}
                                {/* <div className="form__row">
                                  <div className="form__col">
                                    <div className="field form__field">
                                      <div className="field__label">Currency</div>
                                      <div className="field__wrap"><select className="field__select">
                                        <option disabled>Select currency</option>
                                        <option selected>USD</option>
                                        <option>Currency 2</option>
                                        <option>Currency 3</option>
                                      </select>
                                        <div className="field__icon"><i className="la la-angle-down "></i></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="form__col">
                                    <div className="field form__field">
                                      <div className="field__label">Language</div>
                                      <div className="field__wrap"><select className="field__select">
                                        <option disabled selected>Select subcategory</option>
                                        <option>Subcategory 1</option>
                                        <option>Subcategory 2</option>
                                        <option>Subcategory 3</option>
                                      </select>
                                        <div className="field__icon"><i className="la la-angle-down "></i></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="field form__field">
                                  <div className="field__label">Item location</div>
                                  <div className="field__wrap"><input className="field__input" type="text" placeholder="Start typing…" />
                                    <div className="field__icon"><i className="la la-globe "></i></div>
                                  </div>
                                </div> */}
                              </div>
                            </div>
                            <div className="settings__tab" style={{ display: 'none' }} data-tabs-group="settings" data-tabs-item="02"></div>
                            <div className="settings__tab" style={{ display: 'none' }} data-tabs-group="settings" data-tabs-item="03"></div>
                            <div className="settings__tab" style={{ display: 'none' }} data-tabs-group="settings" data-tabs-item="04"></div>
                            <div className="settings__tab" style={{ display: 'none' }} data-tabs-group="settings" data-tabs-item="05"></div>
                          </div>
                          <div className="settings__foot">
                            <div className="settings__btns"><button className="settings__btn btn" onClick={Submit}>Update Settings</button><button className="settings__btn btn btn_light mobile-hide" onClick={cancel}>Cancel</button></div>
                          </div>
                        </div>
                        <div className="settings__sidebar">
                          <div className="menu js-menu">
                            <div className="menu__head js-menu-head">
                              <div className="menu__item js-menu-item">
                                <div className="menu__icon"><i className="la la-user-edit "></i></div>
                                <div className="menu__wrap">
                                  <div className="menu__title">General Information</div>
                                  <div className="menu__text">Main settings and details</div>
                                </div>
                              </div><button className="menu__action action js-menu-toggle"><i className="la la-bars "></i></button>
                            </div>
                            <div className="menu__container js-menu-container">
                              <div className="menu__section"><a className="menu__item js-menu-item active" href="#" data-menu-group="settings" data-menu-item="01">
                                <div className="menu__icon"><i className="la la-store "></i></div>
                                <div className="menu__wrap">
                                  <div className="menu__title">General Information</div>
                                  <div className="menu__text">Profile foto, name &amp; language</div>
                                </div>
                              </a><a className="menu__item js-menu-item" href="#" data-menu-group="settings" data-menu-item="02">
                                  <div className="menu__icon"><i className="la la-newspaper "></i></div>
                                  <div className="menu__wrap">
                                    <div className="menu__title">Item Description</div>
                                    <div className="menu__text">Connected tools &amp; services</div>
                                  </div>
                                </a><a className="menu__item js-menu-item" href="#" data-menu-group="settings" data-menu-item="03">
                                  <div className="menu__icon"><i className="la la-shipping-fast "></i></div>
                                  <div className="menu__wrap">
                                    <div className="menu__title">Shipping Rates</div>
                                    <div className="menu__text">Setup shpping options</div>
                                  </div>
                                </a><a className="menu__item js-menu-item" href="#" data-menu-group="settings" data-menu-item="04">
                                  <div className="menu__icon"><i className="la la-bullhorn "></i></div>
                                  <div className="menu__wrap">
                                    <div className="menu__title">Discount Codes</div>
                                    <div className="menu__text">Setup sales and promo codes</div>
                                  </div>
                                </a><a className="menu__item js-menu-item" href="#" data-menu-group="settings" data-menu-item="05">
                                  <div className="menu__icon"><i className="la la-bell "></i></div>
                                  <div className="menu__wrap">
                                    <div className="menu__title">Notifications</div>
                                    <div className="menu__text">Set your email notifications</div>
                                  </div>
                                </a></div>
                              <div className="menu__section"><a className="menu__item" href="#" data-menu-group="settings" data-menu-item="">
                                <div className="menu__icon"><i className="la la-trash-alt "></i></div>
                                <div className="menu__wrap">
                                  <div className="menu__title">Deactivate product</div>
                                  <div className="menu__text">Hide &amp; disable current item</div>
                                </div>
                              </a></div>
                            </div>
                            <div className="menu__backdrop backdrop js-menu-backdrop"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div>
                    <h2>products</h2>
                    <div className="container">
                    <table className="table table-striped">
                        <thead className="thead-light"><tr>
                            <td>id</td>
                            <td>id</td>
                            <td>name</td>
                            <td>color</td>
                            <td>amount</td>
                            <td>price</td>
                            <td>update</td>
                            <td>delete</td></tr>
                        </thead>
                        <tbody>
                            {
                            list.map((item,index) => (
                              <>
                            <tr key={item._id}>
                            <td>{item._id}</td> 
                            <td>{index}</td> 
                            <td>{item.name}</td> 
                            <td>{item.color}</td> 
                            <td>{item.amount}</td> 
                            <td>{item.price}</td> 
                            <td><button onClick={()=>{updateClick(item._id)}}>
                          
                              update</button>
                            
                            </td> 
                            <td><button onClick={()=>{del(item._id)}}>delete</button></td> 
                            </tr>
                            <tr >{u===item._id ?<td colSpan="8"><Update item_={item} updateOK={updateOK}/></td> :<td></td>}</tr>
                            </>
                            ))
                            }
                        </tbody>
                      </table>
                      </div>
                    </div> */}
            </Route>
          </Switch>
        </Router>
      );
    }

  });