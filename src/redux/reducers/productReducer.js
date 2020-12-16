import produce from 'immer';
import createReducer from "./reducerUtils";

const initialState = {
        products:[]
};

const product = {

    setProducts(state, action) {
        state.products = action.payload.products;
        console.log('pro',state.products);
    },

};

export default produce((state, action) => createReducer(state, action, product), initialState);
