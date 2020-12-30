import produce from 'immer';
import { actions } from '../action';
import createReducer from "./reducerUtils";

const initialState = {
    products: [],
    pic: "",
    viewListOrGrid: "list",
    currentProduct:{}

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
        state.products[0].images[0] = actions.payload
        // state.products[action.payload.i].images[0] = action.payload.p
        // state.pic = state.products[action.payload.i].images[0]

    },
    setLOrG(state, action) {
        state.viewListOrGrid = action.payload
    },
    setCurrentProduct(state,action){
              debugger
  state.currentProduct=action.payload
    }

};

export default produce((state, action) => createReducer(state, action, product), initialState);
