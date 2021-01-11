import produce from 'immer';
import createReducer from './reducerUtils';
import axios from 'axios'
import { actions } from '../action';

const initialState = {
        filteredItems: []
}

const search = {

        setFilteredItems(state, action) {
                 ;
                console.log("action", action.payload);
                state.filteredItems = action.payload;

        }

}

export default produce((state, action) => createReducer(state, action, search), initialState);