import createReducer from './reducerUtils'
import produce from 'immer';
import tempLogo from '../../assets/logo.svg';


const initialState = {
        //כל הנתונים שצריכים להשתמש בהם בכל הקומפוננטות
        homeStoreDesign: {
                logo: tempLogo,
                LogoYOrN: true,
                logoCNYOrN: false,
                logoCompanyName: "",
                logoBorderRadiusLogo: "",
                logoBorderRadiusLogo1: "",
                logoBorderRadiusLogo2: "",
                logoBorderRadiusLogo3: "",
                logoBorderRadiusLogo4: "",
                logoWidth: "",
                logoHeight: "",
                logoBackgroundOnlyPng: "",
                logoSelectRadiuseView: "",
                logoSelect: false,
                currentComponent: ""
                //לתוכו נכניס את שם הקומפוננטה שאותה נטעין בקונפיגורטור לדוג לוגו
                
        }
}
const homeDesign = {
        //כל הפונקציות שישנו נתונים שהכנסתי לסטייט
        setCurrentComponent(state, action) {
                state.homeStoreDesign.currentComponent = action.payload
        },
        setLogo(state, action) {
                state.homeStoreDesign.logo = action.payload;
        },
        setLogoYOrN(state, action) {
                state.homeStoreDesign.LogoYOrN = !state.homeStoreDesign.LogoYOrN;
                
        },
        setLogoCompanyName(state, action) {
                state.homeStoreDesign.logoCompanyName = action.payload;
        }, setLogoBorderRadiusLogo1(state, action) {
                ;
                state.homeStoreDesign.logoBorderRadiusLogo = action.payload;
                ;
        },
        setLogoWidth(state, action) {
                ;
                state.homeStoreDesign.logoWidth = action.payload;
                ;
        },
        setLogoHeight(state, action) {
                state.homeStoreDesign.logoHeight = action.payload;
        },
        
        setLogoBackgroundOnlyPng(state, action) {
                state.homeStoreDesign.logoBackgroundOnlyPng = action.payload;
        }
        
        
}
export default produce((state, action) => createReducer(state, action, homeDesign), initialState);
