import produce from 'immer';
import createReducer from "./reducerUtils";
// var colorStore= "red";
var a="5px solid ";
const initialState = {
    // colorStore: "red",

    objectFields: {
        nameStore: "ikea!",
        descriptionStore: "Everything you need easily and cheaply",
        logoStore: "",
        addressStore: "",
        phoneStore: "",
        emailStore: "",
        colorStore: a+"blue",
        // colorStore: "red",
        // border: "5px solid " + colorStore,
        policy: "",//מדיניות
        currency: "",
        //רותי אמרה שצריך להוסיף סוג חנות
        //כל הנתונים שצריכים להשתמש בהם בכל הקומפוננטות
    }
}

const FuncOpenStore = {
    //כל הפונקציות שישנו נתונים שהכנסתי לסטייט
    setNameStore(state, action) {
        state.objectFields.nameStore = action.payload
    },
    setDescriptionStore(state, action) {
        state.objectFields.descriptionStore = action.payload
    },
    setLogoStore(state, action) {
        state.objectFields.logoStore = action.payload
    },
    setAddressStore(state, action) {
        state.objectFields.addressStore = action.payload
    },
    setPhoneStore(state, action) {
        state.objectFields.phoneStore = action.payload
    },
    setEmailStore(state, action) {
        state.objectFields.emailStore = action.payload
    },
    setColorStore(state, action) {
        state.objectFields.colorStore = action.payload
    },
    setPolicyStore(state, action) {
        state.objectFields.policy = action.payload
    },
    setCurrencyStore(state, action) {//מטבע
        state.objectFields.currency = action.payload
    },

}

export default produce((state, action) => createReducer(state, action, FuncOpenStore), initialState);
