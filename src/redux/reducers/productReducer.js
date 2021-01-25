import produce from 'immer';
import { actions } from '../action';
import createReducer from "./reducerUtils";

const initialState = {
    products: [],
    featuredProducts:[],
    pic: "",
    viewListOrGrid: "list",
    currentProduct: {}

};

const product = {

    setProducts(state, action) {
        debugger;
        state.products = action.payload;
        console.log('pro', state.products);
        state.featuredProducts=state.products.filter(x => x.featured == true) 
    },
    // setFeaturedProducts(state, action) {
    //     featuredProducts=state.products.filter(x => x.featured == true) 
    // },
    setProductImage(state, action) {
        console.log("product index", state.products);
         
        state.pic = action.payload.p
        console.log("pic", state.pic);
        state.products[action.payload.i].images[0] = action.payload.p
        // state.products[action.payload.i].images[0] = action.payload.p
        // state.pic = state.products[action.payload.i].images[0]

    },
    setLOrG(state, action) {
        state.viewListOrGrid = action.payload
    },
    setCurrentProduct(state,action){
               
  state.currentProduct=action.payload
    },

    addNewProduct(state,action){
        state.products.push(action.payload);       
    },
    deleteOldProduct(state,action){
        state.products = state.products.filter(x => x._id != action.payload);      
    },
    editOldProduct(state,action){
        state.products = state.products.filter(x => x._id != action.payload._id);    
        state.products.push(action.payload);    
    }
};

export default produce((state, action) => createReducer(state, action, product), initialState);
