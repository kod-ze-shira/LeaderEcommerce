import produce from 'immer';
import createReducer from './reducerUtils';
import axios from 'axios'
import { actions } from '../action';

const initialState = {
    store:{
        "storeName":"",
        "storeDescription":"",
        "storeManager":""
    }
}

const store = {


    setStoreName(state, action) {
        state.store.storeName=action.payload;
    },
    setStoreDescription(state, action) {
        state.store.storeDescription=action.payload;
    },
    setStore(state,action){
        state.store.storeName=action.payload.storeName;
        state.store.storeDescription=action.payload.storeDescription;
        state.store.storeManager=action.payload.storeManager;
    }

}

export default produce((state, action) => createReducer(state, action, store), initialState);