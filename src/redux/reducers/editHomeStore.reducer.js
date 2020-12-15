import createReducer from './reducerUtils'
import produce from 'immer';
import tempImage from "../../assets/main-pic.png"


const initialState = {
        //כל הנתונים שצריכים להשתמש בהם בכל הקומפוננטות
        homeStoreDesign: {
                //לתוכו נכניס את שם הקומפוננטה שאותה נטעין בקונפיגורטור לדוג לוגו
                imageImage: tempImage,
                imageYOrN: true,
                imageHeight: "",
                ImageCompanyName: "",
                ImageBorderRadiusImage: "0",
                ImageWidth: "50",
                ImageHeight: "",
                currentComponent: "",

        }
}
const homeDesign = {
        //כל הפונקציות שישנו נתונים שהכנסתי לסטייט
        setImageYOrN(state, action) {
                state.homeStoreDesign.imageYOrN = !state.homeStoreDesign.imageYOrN;
        },
        setImage(state, action) {
                state.homeStoreDesign.imageImage = action.payload;
        },
        setCurrentComponent(state, action) {
                state.homeStoreDesign.currentComponent = action.payload
        },
        setImageCompanyName(state, action) {
                state.homeStoreDesign.ImageCompanyName = action.payload;
        },
        setImageBorderRadiusImage(state, action) {
                ;
                state.homeStoreDesign.ImageBorderRadiusImage = action.payload;
                ;
        },
        setImageWidth(state, action) {
                ;
                state.homeStoreDesign.ImageWidth = action.payload;
                ;
        },
        setImageHeight(state, action) {
                state.homeStoreDesign.ImageHeight = action.payload;
        },


}
export default produce((state, action) => createReducer(state, action, homeDesign), initialState);
