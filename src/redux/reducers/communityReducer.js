import produce from 'immer';
import createReducer from './reducerUtils';
import axios from 'axios'
import { actions } from '../action';

const initialState = {
    communities: [],
    community:{}
}

const community = {


    getAllCommunities(state, action) {
        state.communities=action.payload;
    },

    getCommunity(state,action){
        state.community=action.payload
    },

    setCommunities(state,action){
        state.communities=action.payload
    }
}

export default produce((state, action) => createReducer(state, action, community), initialState);