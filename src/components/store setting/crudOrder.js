import React from 'react'
import { connect } from 'react-redux';

function CrudOrder(props) {

        return (
                <>

                </>
        )
}
export default connect(
        (state) => {
                return {
                        orders: state.ordersReducer.orders
                }
        },
        (dispatch) => {
                return {
                }
        }
)(CrudOrder);
