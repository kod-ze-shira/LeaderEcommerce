import React from 'react';
import { connect } from "react-redux";
import { actions } from "../redux/action";
import { useHistory } from "react-router-dom";
//בתוכ הסוגריים של הפונקציה מקבלים את הפרופס
function OpenStore(props) {

    const onChangeHandlerLogo = (event) => {
        if (event) {
            let reader = new FileReader();
            reader.onloadend = () => {

                props.setLogoStore(reader.result)
            }
            reader.readAsDataURL(event)
        }
    }
    const history = useHistory();
    const submitToStore = (event) => {
        history.push("/0")
    }
    return (
        <div>
            <h1>welcome to open shop!!!!!</h1><br></br>
            <input placeholder="הכנס שם חנות" onChange={props.setNameStore}></input><br></br>
            <input placeholder="הכנס כתובת החנות" onChange={props.setAddressStore}></input><br></br>
            <input placeholder="הכנס טלפון" onChange={props.setPhoneStore}></input><br></br>
            <input placeholder="הכנס אימיל" onChange={props.setEmailStore}></input><br></br>
            {/* //צריך שיהיה תיבת סלקט לבחירה מתוך רשימת מטבעות */}
            <input placeholder="בחר מטבע"></input><br></br>
            <div>
                <lable for="logoS">הכנס לוגו של החנות
                <img className="logoC" alt="" src={props.objectFields.logoStore}></img>
                </lable>
                <input
                    type={"file"}
                    id="logoS"
                    // htmlFor="myInput"
                    accept="image/*"
                    style={{
                        // display: "none"

                    }}
                    onChange={(e) => onChangeHandlerLogo(e.target.files[0])}
                />

            </div><br></br>
            <div><label>בחר צבע ראשי לחנות</label>
                {/* //לבקש מאוהב את הבלוק של הצבעים שהראה לי */}
            </div><br></br>
            {console.log(props.objectFields)}
            <button onClick={submitToStore}>עבור לחנות שלך לדוגמא</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        objectFields: state.openStoreReducer,
    }
}
const mapDispatchToProps = (dispatch) => ({
    setNameStore: (e) => dispatch(actions.setNameStore(e.target.value)),
    setAddressStore: (e) => dispatch(actions.setAddressStore(e.target.value)),
    setPhoneStore: (e) => dispatch(actions.setPhoneStore(e.target.value)),
    setEmailStore: (e) => dispatch(actions.setEmailStore(e.target.value)),
    setCurrencyStore: (e) => dispatch(actions.setCurrencyStore(e.target.value)),
    setLogoStore: (e) => dispatch(actions.setLogoStore(e)),
    setColorStore: (e) => dispatch(actions.setColorStore(e)),
})
export default connect(mapStateToProps, mapDispatchToProps)(OpenStore);