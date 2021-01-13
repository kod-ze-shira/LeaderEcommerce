import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { actions } from "../../redux/action";
import cartReduser from "../../redux/reducers/cartReduser"
import userReducer from "../../redux/reducers/userReducer"
import { CookiesProvider } from "react-cookie";
import { useCookies } from "react-cookie";
var y=1

function ExperienceOrder(props) {
    const [order, setOrder] = useState({
        user:"5f98562e732f51119cb2d5b8",
        address: "",
        date: Date.now(),
        product:props.productCart,
        status:"שולם",
        store:"5fbe4378f0418636d013452a",
        totalPrice:props.price
    });
    const updateSetOrder = (event) => {
        setOrder({        
            ...order,
            [event.target.name]: event.target.value
        })
    } 
useEffect(()=>{
     var t=cookies.order;
     setOrder(  {...t} );
       if(y==1){
     props.setCart(t)
    y=2
}  
},[])

    const [cookies, setCookie] = useCookies(["order"]);
    window.addEventListener("beforeunload", (ev) => 
    {
        order.totalPrice=props.price
        order.product=props.productCart
           ev.preventDefault();
        setCookie("order", order, {
            path: "/"
          });
    });

    const funcSubmit = () => {
        order.totalPrice=props.price
        order.product=props.productCart
        props.newOrder(order)
    }


    return (
        <>

            <h1>welcome to form to create order!!!!!</h1><br></br>
            <label> enter your Address</label><input name="address" value={order.address} onChange={updateSetOrder}></input><br></br><br></br>            
            <button onClick={funcSubmit}>שלח</button>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        productCart:state.cartReduser.listCart,
        price:state.cartReduser.totalPrice,
        user:state.userReducer.user
    }
}
const mapDispatchToProps = (dispatch) => ({
    newOrder: (e) =>{ dispatch(actions.newOrder(e))},
setCart:(e) =>{ dispatch(actions.setOrder(e))},
})
export default connect(mapStateToProps, mapDispatchToProps)(ExperienceOrder);



