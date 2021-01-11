import produce from 'immer';
import { actions } from '../action';
import createReducer from './reducerUtils';


const initialState = {
listCart:[],
totalPrice:0
}

const cartReduser = {
  clear(state,action){
    state.listCart=[]; 
    state.totalPrice=0;
  },
  remove( state,action)
  {
       ;
    var tg=  state.listCart.splice(action.payload,1);
    state.listCart=state.listCart.filter(x=> x !=tg)
  },
    addToCart(state,action){
        state.listCart.push(action.payload) ;
         ;
        state.totalPrice+=action.payload.product.price;
  
    },
    pluseAmount(state,action){
         ;
        state.listCart[action.payload].amount++;
        state.totalPrice+=state.listCart[action.payload].product.price
    },
    minuseAmount(state,action){
        if(state.listCart[action.payload].amount>1)
        {
        state.listCart[action.payload].amount--;
        state.totalPrice-=state.listCart[action.payload].product.price
        }
    },
    setOrder(state,action)
    {
         ;
        state.totalPrice=action.payload.totalPrice;
        state.listCart=action.payload.product
    }

}

export default produce((state, action) => createReducer(state, action, cartReduser), initialState);