import {createStore} from 'redux'
import reducer from '../reducer';
const initialState={
    list:[],
    userName:'ytu'
}
const store=createStore(reducer,initialState)
export default store;