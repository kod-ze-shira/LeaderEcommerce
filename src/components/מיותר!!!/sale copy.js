import React, { useState, useEffect } from 'react'
import service from '../services/product.service'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import { connect } from "react-redux";
import { setName, setItemsList } from '../actions'
function mapStateToProps(state) {
  return {
    list: state.list,
    name: state.userName
  };
}
export default connect(mapStateToProps)(
  function Sale(props) {
    // const name = props.name
    // const cartItems1 = props.list
    const { name, list, dispatch } = props
    function setName1() {
      let ns = "1" + name + "";
      dispatch(setName(ns));
    }
    const [page, setPage] = useState({
      error: null,
      isLoaded: true,
      items: [],
    })
    const [cartItems, setCartItems] = useState([]);
    const [sum, setSum] = useState(0);

    {  //  עבר לאפפ 
      // function getall() {
      //   console.log(list)
      //   console.log(name)
      //   // setPage({isLoaded:false})
      //   service.getAllProducts().then((result) => {
      //     const { isLoaded, items, error } = result
      //     debugger
      //     page.isLoaded = true
      //     setPage({ error, isLoaded, items })
      //     dispatch(setItemsList(items))
      //     console.log(list)
      //     console.log(page)
      //     debugger
      //   })
      // }}


      // useEffect(getall, [])
    }
    const del = (item) => {
      setSum(sum => Number(sum) + -Number(item.price))
      setCartItems(items => items.filter(x => x._id != item._id));
      console.log(" del ")
    }
    const update = (item) => {
      item.amount = 1
      setSum(sum => sum + Number(item.price))
      setCartItems(cartItems => cartItems.concat([item]))
    }
    const save = () => {
      service.SaveSale({ cartItems, sum })
    }


    if (page.error) {
      return <div>Error: {page.error.message}</div>;
    } else if (!page.isLoaded) {
      page.isLoaded = true
      return <div>Loading...</div>;
    } else {
      return (
        <div className="container fluid">
        <button onClick={setName1}>click</button>
        <label>{name}</label>
        <div className="row">
          <div className="col-5">
            <h2>products</h2>
            <table className="table table-striped">
              <thead className="thead-light"><tr>
                <td>name</td>
                <td>color</td>
                <td>amount</td>
                <td>price</td>
                <td>update</td>
              </tr>
              </thead>
              <tbody>
                {
                  list.map(item => (
                    <tr key={item._id}>
                      <td>{item.name}</td>
                      <td>{item.color}</td>
                      <td>{item.amount}</td>
                      <td>{item.price}</td>
                      <td><button onClick={() => { update(item) }}>קנה</button></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
          <div className="col-1"></div>
          <div className="col-6">
            <h2>עגלה</h2>
            <table className="table table-striped">
              <thead className="thead-light"><tr>
                <td>name</td>
                <td>color</td>
                <td>amount</td>
                <td></td>
                <td>price</td>
              </tr>
              </thead>
              <tbody>
                {
                  cartItems.map(item => (
                    <tr key={item._id}>
                      <td>{item.name}</td>
                      <td>{item.color}</td>
                      <td>{item.amount}</td>
                      {/* <td><button onClick={() => { del(item._id) }}>+</button>
                      <button onClick={() => { del(item._id) }}>-</button></td> */}
                      <td>{item.price}</td>
                      <td><button onClick={() => { del(item) }}>הסר</button></td>

                    </tr>
                  ))
                }
              </tbody>
            </table>
            <label>{sum}</label>&nbsp;&nbsp;
            <label>  :לתשלום  </label>
            <br />
            <button onClick={save}>לאישור קניה</button>
          </div>
        </div>
        {/* <Route exact path="/products/addProduct"><AddProduct/></Route> */}
      </div>


              );
    }

  });



