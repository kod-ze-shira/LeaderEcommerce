import produce from 'immer';
import createReducer from "./reducerUtils";

const initialState = {
    nameStore: "",
    addressStore: "",
    phoneStore: "",
    emailStore: "",
    currency: "",
    logoStore: "",
    colorStore: ""
    //כל הנתונים שצריכים להשתמש בהם בכל הקומפוננטות
}

const FuncOpenStore = {
    //כל הפונקציות שישנו נתונים שהכנסתי לסטייט
    setNameStore(state, action) {
        state.nameStore = action.payload
    },
    setAddressStore(state, action) {
        state.addressStore = action.payload
    },
    setPhoneStore(state, action) {
        state.phoneStore = action.payload
    },
    setEmailStore(state, action) {
        state.emailStore = action.payload
    },
    setCurrencyStore(state, action) {
        state.currency = action.payload
    },
    setLogoStore(state, action) {
        state.logoStore = action.payload
    },
    setColorStore(state, action) {
        state.colorStore = action.payload
    },
}

export default produce((state, action) => createReducer(state, action, FuncOpenStore), initialState);
