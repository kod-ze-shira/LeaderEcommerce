import React, { useEffect } from 'react';
import { useParams } from "react-router";
import { connect } from 'react-redux';
import { actions } from '../redux/action'
// import storeReducer from '../redux/reducers/storeReducer'
// import EditHomeStore from './compsEditStore/editHome'
import ElasticCarousel from './carousel'


function UserHome(props) {

    let { username } = useParams();

    useEffect(() => {
        props.newStore({
            "storeName": "my store",
            "storeDescription": "the best store in the world!!",
            "storeManager": props.user._id
        })
    }, [])

    return (
        <div>
            <h1>Wellcome to {username}!!</h1>
            <ElasticCarousel />

            {/* <input onChange={console.log("bla")} type="text" value={props.store.storeName}/> */}
            {/* <h3>{props.store.storeDescription}</h3> */}

        </div>
    )

}

export default connect(
    (state) => {
        return {
            store: state.storeReducer.store,
            user: state.userReducer.user
        }
    },
    (dispatch) => {
        return {
            newStore: (user) => dispatch(actions.addNewStore(user))
        }
    }

)(UserHome);
