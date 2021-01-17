import produce from 'immer';
import createReducer from './reducerUtils';
import { actions } from '../action';

const initialState = {
        url: "",
}

const upload = {

        setFileUrl(state, action) {
                debugger;
                state.url = action.payload
                console.log("state", state.url);
        },

}

export default produce((state, action) => createReducer(state, action, upload), initialState);