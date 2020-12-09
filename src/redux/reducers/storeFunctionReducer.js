import produce from 'immer';
import createReducer from './reducerUtils';
import { actions } from '../action';
import $ from 'jquery'

const initialState = {

}

const functions = {

        // search
        searchFunc(state, action){
                var search = $('.js-search'),
                btn = search.find('.js-search-btn');
                btn.on('click', function () {
                search.toggleClass('show');
                });
        },
        setUser(state, action) {
                console.log("setuser ",action.payload);
                state.user=action.payload;
        },

}

export default produce((state, action) => createReducer(state, action, functions), initialState);