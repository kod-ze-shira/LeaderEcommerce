import { Switch, Link, Route } from 'react-router-dom';
import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import store from '../redux/store';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { actions } from '../redux/action'
import communityReducer from '../redux/reducers/communityReducer'


function AllCommunities (props) {


    useEffect(()=>{
        props.getAllCommunities();
    })

        return (
            <div>
                {/* <Provider store={store}> */}
                <ul>
                    {props.communities.map(item => {
                        return (
                            <Link to={`/community/${item._id}`}>
                            <li className="float-left m-3" key={item._id}>
                                <div class="card" style={{ width: 22 + "rem" }}>
                                    {/* להביא את לוגו הקהילה */}
                                    <img src="../assets/logo.png" class="card-img-top" alt="Community"/>
                                    <div class="card-body">
                                        <h5 class="card-title">{item.communityName}</h5>
                                        <h5 class="card-title">{item.communityDescription}</h5>
                                        <h5 class="card-title">{item.communityManager}</h5>
                                        <h5 class="card-title">{item.communityMembers}</h5>

                                        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                    </div>
                                </div>
                            </li>
                            </Link>
                        )
                    })}
                </ul>
                {/* </Provider> */}
            </div>
        )
}

export default connect(
    (state)=>{
        return {
            communities:state.communityReducer.communities
        }
    },
    (dispatch)=>{
        return {
            // getAllCommunities:()=>dispatch(actions.getAllCommunitiesFromDb()) 
        }
    }

)(AllCommunities);
