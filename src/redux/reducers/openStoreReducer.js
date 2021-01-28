import produce from 'immer';
import createReducer from "./reducerUtils";
import temp from "../../assets/logoProject.jpg"

const initialState = {

    storeId: "",
    // inventoryManagement: "",//ניהול מלאי
    // oneProductPurchase: "",//קניה חד מוצרית
    objectFields: {
        //רותי אמרה שצריך להוסיף סוג חנות
    },

}

const FuncOpenStore = {

    setStoreId(state, action) {
        state.storeId = action.payload
    },
    // setNameStore(state, action) {
    //     state.objectFields.nameStore = action.payload
    // },
    // setUrlRoute(state, action) {
    //     state.objectFields.urlRoute = action.payload
    // },
    // setDescriptionStore(state, action) {
    //     state.objectFields.descriptionStore = action.payload
    // },
    // setLogoStore(state, action) {
    //     state.objectFields.logoStore = action.payload
    // },
    // setAddressStore(state, action) {
    //     state.objectFields.addressStore = action.payload
    // },
    // setPhoneStore(state, action) {
    //     state.objectFields.phoneStore = action.payload
    // },
    // setEmailStore(state, action) {
    //     state.objectFields.emailStore = action.payload
    // },
    // setColorStore(state, action) {
    //     state.objectFields.colorStore = action.payload
    // },
    // setPolicyStore(state, action) {
    //     state.objectFields.policy = action.payload
    // },
    // setCurrencyStore(state, action) {//מטבע
    //     // state.objectFields.currency = action.payload
    //     state.currency = action.payload
    // },
    // setInventoryManagement(state, action) {//ניהול מלאי
    //     state.objectFields.inventoryManagement = action.payload
    // },
    // setOneProductPurchase(state, action) {//קניה חד מוצרית
    //     state.objectFields.oneProductPurchase = action.payload
    // },
    setSaveAllDetailsStore(state, action) {
        debugger
        state.objectFields = action.payload
    }

}

export default produce((state, action) => createReducer(state, action, FuncOpenStore), initialState);
