import React from 'react';
import { connect } from "react-redux";
import { actions } from "../redux/action";
//ספריה ששומרת את הדברים שמשתנים ומקשרת לדף הבא עם שמירת הנתונים
import { useHistory } from "react-router-dom";
//בתוכ הסוגריים של הפונקציה מקבלים את הפרופס
function OpenStore(props) {
    //פונקציה שטוענת את הלוגו
    const handlerLogo = (event) => {
        if (event) {
            let reader = new FileReader();
            reader.onloadend = () => {
                props.setLogoStore(reader.result)
            }
            reader.readAsDataURL(event)
        }
    }
    //שימוש בספריה 
    const history = useHistory();
    const submitToStore = async (event) => {
        //בעצם לשרשר את שם החנות וכן צריך להפעיל פונקצית תקינות מונעת רוחים
        //להוסיף לניתוב את URL החנות

        await props.createNewStore(props.objectFields)
        // .then(
        history.push("/0")
        // )
    }
    return (
        <div>
            <h1>welcome to open shop!!!!!</h1><br></br>
            <input placeholder="הכנס שם חנות" onChange={props.setNameStore}></input><br></br>
            <input placeholder="הכנס תאור לחנות" onChange={props.setDescriptionStore}></input><br></br>
            <input placeholder="הכנס כתובת החנות" onChange={props.setAddressStore}></input><br></br>
            <input placeholder="הכנס טלפון" onChange={props.setPhoneStore}></input><br></br>
            <input placeholder="הכנס אימיל" onChange={props.setEmailStore}></input><br></br>
            {/* //לבקש מאוהב את הבלוק של הצבעים שהראה לי */}
            {/*לבינתיים עשיתי עם אינפוט*/}
            <input placeholder="  בחר צבע ראשי לחנות   " onChange={props.setColorStore}></input><br></br>
            {/*  למטבעות drop down  צריך שיהיה  */}
            <input placeholder="בחר מטבע" onChange={props.setCurrencyStore}></input><br></br>
            <input placeholder="הכנס מדיניות" onChange={props.setPolicyStore}></input><br></br>
            <div>
                <lable for="logoS">הכנס לוגו של החנות
                <img className="logoC" alt="" src={props.objectFields.logoStore}></img>
                </lable>
                <input
                    type={"file"}
                    id="logoS"
                    // htmlFor="myInput"
                    accept="image/*"
                    // style={{
                    // display: "none"
                    // }}
                    onChange={(e) => handlerLogo(e.target.files[0])}
                />
            </div><br></br>
            {console.log(props.objectFields)}
            <button onClick={submitToStore}>עבור לחנות שלך לדוגמא</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        objectFields: state.openStoreReducer.objectFields,
    }
}
const mapDispatchToProps = (dispatch) => ({
    setNameStore: (e) => dispatch(actions.setNameStore(e.target.value)),
    setDescriptionStore: (e) => dispatch(actions.setDescriptionStore(e.target.value)),
    setAddressStore: (e) => dispatch(actions.setAddressStore(e.target.value)),
    setPhoneStore: (e) => dispatch(actions.setPhoneStore(e.target.value)),
    setPolicyStore: (e) => dispatch(actions.setPolicyStore(e.target.value)),
    setEmailStore: (e) => dispatch(actions.setEmailStore(e.target.value)),
    setCurrencyStore: (e) => dispatch(actions.setCurrencyStore(e.target.value)),
    setLogoStore: (e) => dispatch(actions.setLogoStore(e)),
    setColorStore: (e) => dispatch(actions.setColorStore(e.target.value)),
    createNewStore: (objectFields) => { debugger; dispatch(actions.createNewStore(objectFields)) }
})
export default connect(mapStateToProps, mapDispatchToProps)(OpenStore);