import produce from 'immer';
import createReducer from "./reducerUtils";

const initialState = {
    //כל הנתונים שצריכים להשתמש בהם בכל הקומפוננטות
    orderArr: {},

}

const orders = {
    //כל הפונקציות שישנו נתונים שהכנסתי לסטייט
    setOrder(state, action) {
        state.orderArr = action.payload
    }
}

export default produce((state, action) => createReducer(state, action, orders), initialState);
