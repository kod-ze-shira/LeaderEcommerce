import createReducer from './reducerUtils'
import produce from 'immer';
import mainPic from "../../assets/main-pic.png"


const initialState = {
        //כל הנתונים שצריכים להשתמש בהם בכל הקומפוננטות
        homeStoreDesign: {
                //לתוכו נכניס את שם הקומפוננטה שאותה נטעין בקונפיגורטור לדוג לוגו
                imageImage: mainPic,
                imageYOrN: true,
                // imageBackgroundOnlyPng: "",
                imageWidth: "",
                imageHeight: "",
                // imageBorderRadiusRectangles: "",
                // imageRectanglesColor: "",
                // imageSelect: false,

        }
}
const homeDesign = {
        //כל הפונקציות שישנו נתונים שהכנסתי לסטייט
        setImageYOrN(state, action) {
                state.homeStoreDesign.imageYOrN = !state.homeStoreDesign.imageYOrN;
        },
        setImage(state, action) {
                state.homeStoreDesign.imageImage = action.payload;
        }

}
export default produce((state, action) => createReducer(state, action, homeDesign), initialState);
