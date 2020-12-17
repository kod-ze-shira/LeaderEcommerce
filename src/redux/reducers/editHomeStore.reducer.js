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
                // currentComponent: "",

                // titleTextTitle: "",
                // titleFont: "",
                // titleTextWeight: "700",
                // titleTextSize: "40",
                // titleLineHeight: "1.4",
                // titleColorText: "",
                // titleAlignment: "",
                // font-size: 40px;
                // line-height: 1.4;
                // font-weight: 700;

                titleText:
                {
                        onThePicture: "",
                        titleCategory: "",
                },


                titleTextTitle: "",
                titleFont: "",
                titleTextWeight: "",
                titleTextSize: 50,
                titleAlignment: "",
                titleWidthText: "",
                titleLineHeight: "",
                titleColorText: "",
                aboutUsTitleYOrN: true,
                isCategoty: true



        }
}
const homeDesign = {
        //כל הפונקציות שישנו נתונים שהכנסתי לסטייט
        //נקבל אוביקט שמכיל שם של קומפוננטה ואת הערך הרצוי
        setCurrentComponent(state, action) {
                state.homeStoreDesign.currentComponent = action.payload
        },
        //מכאן והלאה כל הפונקציות של עריכת תמונת החנות
        setImageYOrN(state, action) {
                state.homeStoreDesign.imageYOrN = !state.homeStoreDesign.imageYOrN;
        },
        setImage(state, action) {
                state.homeStoreDesign.imageImage = action.payload;
        },

        setImageCompanyName(state, action) {
                state.homeStoreDesign.ImageCompanyName = action.payload;
        },
        setImageBorderRadius(state, action) {
                state.homeStoreDesign.ImageBorderRadiusImage = action.payload;
        },
        setImageWidth(state, action) {
                state.homeStoreDesign.ImageWidth = action.payload;
        },
        setImageHeight(state, action) {
                state.homeStoreDesign.ImageHeight = action.payload;
        },
        //מכאן פונקציות לעריכת קרוסלת הקטגוריות
        // title פונקציות לשינוי כיתוב העתקתי אותן מקומפוננטת  
        setTitleText(state, action) {
                state.homeStoreDesign.titleText[action.payload.k] = action.payload.e;
        },
        setTitleFont(state, action) {
                state.homeStoreDesign.titleFont = action.payload;
        },
        setTitleTextWeight(state, action) {
                state.homeStoreDesign.titleTextWeight = action.payload;
        },
        setTitleTextSize(state, action) {
                state.homeStoreDesign.titleTextSize = action.payload;
        },
        setTitleAlignment(state, action) {
                state.homeStoreDesign.titleAlignment = action.payload;
        },
        setTitleWidthText(state, action) {
                state.homeStoreDesign.titleWidthText = action.payload;
        },
        setTitleLineHeight(state, action) {
                state.homeStoreDesign.titleLineHeight = action.payload;
        },
        setTitleColorText(state, action) {
                state.homeStoreDesign.titleColorText = action.payload;
        },
        setAboutUsTitleYOrN(state, action) {
                state.homeStoreDesign.aboutUsTitleYOrN = !state.homeStoreDesign.aboutUsTitleYOrN;
        },


}
export default produce((state, action) => createReducer(state, action, homeDesign), initialState);
