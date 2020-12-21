import produce from 'immer';
import createReducer from "./reducerUtils";


const initialState = {
    //כל הנתונים שצריכים להשתמש בהם בכל הקומפוננטות
    // logoDesign: {

    //     currentComponent: ""
    // //     //לתוכו נכניס את שם הקומפוננטה שאותה נטעין בקונפיגורטור לדוג לוגו
    // }
}

const addProductFunc = {

//     addNewProducts(state, action){
// debugger;
       
//     }

    //כל הפונקציות שישנו נתונים שהכנסתי לסטייט
    // setCurrentComponent(state, action) {
    //     state.logoDesign.currentComponent = action.payload
    // },
    // setLogo(state, action) {
    //     state.logoDesign.logo = action.payload;
    // },
    // setLogoYOrN(state, action) {
    //     state.logoDesign.LogoYOrN = !state.logoDesign.LogoYOrN;

    // },
    // setLogoCompanyName(state, action) {
    //     state.logoDesign.logoCompanyName = action.payload;
    // }, 
    // setLogoBorderRadiusLogo1(state, action) {
    //     ;
    //     state.logoDesign.logoBorderRadiusLogo = action.payload;
    //     ;
    // },
    // setLogoWidth(state, action) {
    //     ;
    //     state.logoDesign.logoWidth = action.payload;
    //     ;
    // },
    // setLogoHeight(state, action) {
    //     state.logoDesign.logoHeight = action.payload;
    // },

}

export default produce((state, action) => createReducer(state, action, addProductFunc), initialState);
