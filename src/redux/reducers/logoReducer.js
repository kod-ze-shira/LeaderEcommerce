import produce from 'immer';
import createReducer from "./reducerUtils";
import image from '../../assets/logo.png'
const initialState = {

    urlImage: {
        image: image,
        companyName: "",
        color: ""
    },
};

const agent = {
    // setLogo(state, action) {
    //     state.quote.logo = action.payload;
    // },
    // setLogoYOrN(state, action) {

    //     state.quote.LogoYOrN = !state.quote.LogoYOrN;

    // },
    // setLogoCompanyName(state, action) {
    //     state.quote.logoCompanyName = action.payload;
    // }, setLogoBorderRadiusLogo1(state, action) {
    //     ;
    //     state.quote.logoBorderRadiusLogo = action.payload;
    //     ;
    // },
    // setLogoWidth(state, action) {
    //     ;
    //     state.quote.logoWidth = action.payload;
    //     ;
    // },
    // setLogoHeight(state, action) {
    //     state.quote.logoHeight = action.payload;
    // },

    // setLogoBackgroundOnlyPng(state, action) {
    //     state.quote.logoBackgroundOnlyPng = action.payload;
    // },


};

export default produce((state, action) => createReducer(state, action, agent), initialState);
