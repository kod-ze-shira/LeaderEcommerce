import React, { useEffect } from 'react';
import { actions } from '../redux/action';
import { connect } from 'react-redux';
import cartReduser from '../redux/reducers/cartReduser';
import ExperienceOrder from './compsEditStore/experienceOrder'


function Cart(props) {



        useEffect(() => {
        }, [])

        return (
                <>
                        <h1>!!!!ברוך הבא לעגלתך</h1>

                        <div className="data__body">
                                {props.cartList.map((item, index) => (
                                        <div className="data__item" key={index}>
                                                <div className="data__row" >
                                                        <div className="data__cell data__cell_xl">
                                                                <div className="data__main">
                                                                        <div className="data__effect mobile-hide"><label className="switch">
                                                                        </label></div>

                                                                        <button onClick={() => { props.pluseAmount(index) }}>+</button>
                                                                        <div className="data__cell mobile-hide">
                                                                                <div className="data__content">
                                                                                        <strong>{item.product.name}</strong></div>
                                                                        </div>

                                                                        <div className="data__cell mobile-hide">

                                                                        </div>
                                                                        <div className="data__wrap">
                                                                                <div className="data__content">
                                                                                        <strong>{item.amount}</strong></div>
                                                                        </div>

                                                                </div>
                                                        </div>
                                                        <div className="data__cell mobile-hide">
                                                                <div className="data__content">
                                                                        <strong>{item.product.price}</strong></div>
                                                        </div>

                                                        <div className="data__cell data__cell_action">
                                                                <button onClick={() => { props.minuseAmount(index) }}>-</button>
                                                        </div>

                                                        <div className="data__cell data__cell_action">
                                                                <button onClick={() => { props.remove(item.product.name) }} >הסר</button>
                                                        </div>
                                                </div>
                                        </div>
                                ))}
                        </div>

                        <br />   <br /> <br />
                        <span style={{ fontSize: "40px" }}> {props.totalPrice}</span>
                        <button onClick={() => { props.clear() }}>מחק הכול</button>
                        <ExperienceOrder></ExperienceOrder>
                </>
        )
}

export default connect(
        (state) => {
                return {
                        cartList: state.cartReduser.listCart,
                        totalPrice: state.cartReduser.totalPrice
                }
        },
        (dispatch) => {
                return {
                        pluseAmount: (i) => { dispatch(actions.pluseAmount(i)) },
                        clear: () => { dispatch(actions.clear()) },
                        minuseAmount: (i) => { ; dispatch(actions.minuseAmount(i)) },
                        remove: (i) => { ; dispatch(actions.remove(i)) }
                }
        }
)(Cart);







