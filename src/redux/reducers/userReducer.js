import produce from 'immer';
import createReducer from './reducerUtils';
import { actions } from '../action';

const initialState = {
    user:{
        _id:"",
        username:"",
        email:""
    },
}

const user = {


    setUser(state, action) {
        console.log("setuser ",action.payload);
        state.user=action.payload;
    },
    setUsername(state, action){
        state.user.username=action.payload;
    }

}

export default produce((state, action) => createReducer(state, action, user), initialState);