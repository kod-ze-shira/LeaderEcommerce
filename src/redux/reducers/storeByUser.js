import produce from 'immer';
import createReducer from './reducerUtils';
import axios from 'axios'
import { actions } from '../action';

const initialState = {
     stores:[],
     currentStore:{}
}

const storeByUser = {

    setStorePerUser(state, action) {
                state.stores = action.payload;    
        },
        setSoreCurrent(state, action) {
            state.currentStore = action.payload;    
    },
}

export default produce((state, action) => createReducer(state, action, storeByUser), initialState);