import produce from 'immer';
import createReducer from './reducerUtils';
import axios from 'axios'
import { actions } from '../action';

const initialState = {
categories:[],
currentCategory:{}
}

const category = {


    // setStoreName(state, action) {
    //     state.store.storeName=action.payload;
    // },
    // setStoreDescription(state, action) {
    //     state.store.storeDescription=action.payload;
    // },
    setCategories(state,action){
        state.categories=action.payload.categories;
  
    },
    setCurrentCategory(state,action){
        debugger;
        state.currentCategory=action.payload;
    }

}

export default produce((state, action) => createReducer(state, action, category), initialState);