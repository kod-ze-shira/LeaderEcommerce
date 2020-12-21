import produce from 'immer';
import createReducer from "./reducerUtils";

const initialState = {
    products: [],
    pic: ""

};

const product = {

    setProducts(state, action) {
        debugger;
        state.products = action.payload;
        console.log('pro', state.products);
    },
    setProductImage(state, action) {
        console.log("product index", state.products);
        debugger
        state.products[action.payload.i].images[0] = action.payload.p
        state.pic = state.products[action.payload.i].images[0]

    }

};

export default produce((state, action) => createReducer(state, action, product), initialState);
