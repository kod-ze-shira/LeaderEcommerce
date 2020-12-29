import produce from 'immer';
import createReducer from './reducerUtils';
import axios from 'axios'
import { actions } from '../action';

const initialState = {
        ascendingProductsYOrN: true
}

const sort = {

        setAscendingProductsYOrN(state, action) {
                state.ascendingProductsYOrN = !state.ascendingProductsYOrN
        }

}

export default produce((state, action) => createReducer(state, action, sort), initialState);