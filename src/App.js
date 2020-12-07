import './App.css';
import Product from './components/products/getProduct'
import AddProduct from './components/products/addProduct';
import Sale from './components/sale/sale'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import React, { useEffect } from 'react'
import service from './components/services/product.service'
import { connect } from "react-redux";
import { setItemsList } from './components/actions'
import logo from './components/pages/img/logo.svg'
import betaCRM from './components/pages/img/betaCRM.svg'
import SignUp from './components/FireBase/signUp_'
import SignIn from './components/FireBase/signIn'
function mapStateToProps(state) {
  return {
    list: state.list,
    name: state.userName
  };
}
export default connect(mapStateToProps)(
  function App(props) {
    const { list, dispatch } = props
    function getall() {
      service.getAllProducts().then((result) => {
        const { items } = result
        console.log(items)
        dispatch(setItemsList(items))
      })
    }
    useEffect(getall, [])
    const idref = React.createRef();

    // function OKbtn() {
    //   debugger;
    //   return <Product id={idref.current.value} />
    // }
    return (
      <div className="App">
        <br></br>
        <div className="sidebar js-sidebar">
          <div className="sidebar__nav">
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
          </div>
        </div>
        <Router >
          <div style={{ marginTop: '-20px' }}>
            {/* <ul style={{paddingLeft:'242px'}} className="list-group list-group-horizontal">
              <li className="list-group-item">
                <Link to="/products">הגדרות מוצר(לפי מזהה בURL)</Link>
              </li>
              <li className="list-group-item">
                <Link to="/addProduct">הוספת מוצר</Link>
              </li>
              <li className="list-group-item">
                <Link to="/sale">לחנות הוירטואלית</Link>
              </li>
            </ul> */}
            <Switch>
              {/* <Route path='/product' component={SignUp}></Route> */}
              {/* <label htmlFor="id">הכנס id</label>
                <input id="id" ref={idref}></input><button onClick={OKbtn}>אישור</button>
                {<Product />} */}

              {/* {<Route path='/products/:id' component={Product} />||<div>"הכנס מזהה"</div>} */}
              <Route path='/products/:id' component={Product} />
              <Route exact path='/product' component={Sale}></Route>
              <Route exact path="/addProduct" component={AddProduct}>
                {/* <AddProduct/> */}
              </Route>
              {/* <Route exact path="/">
                <SignIn></SignIn>
                <SignUp></SignUp>
              </Route> */}
              <Route exact path="/">
              <Sale/>
              </Route>
              {/* <Route exact path="/products/addProduct"><AddProduct /></Route> */}

            </Switch>
          </div>
        </Router>
      </div>
    );
  })
