import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { actions } from "../redux/action";
import $ from 'jquery';
//ספריה ששומרת את הדברים שמשתנים ומקשרת לדף הבא עם שמירת הנתונים
import { useHistory, Link } from "react-router-dom";
import { SwatchesPicker } from 'react-color';
import { Box } from '@material-ui/core';
//בתוכ הסוגריים של הפונקציה מקבלים את הפרופס
function OpenStore(props) {

    const [fileToUpload, setFileToUpload] = useState(null);

    //שימוש בספריה 
    const history = useHistory();
    //useState אובייקט
    const [detailsStore, setDetailsStore] = useState({
        storeName: "",
        urlRoute: "",
        storeDescription: "",
        address: "",
        tel: "",
        email: "",
        colorDominates: "",
        policy: "",
        currency: "",
        logo: "",

    });
    //בכל שינוי אינפוט ניגש לפונקציה הזו
    const changeStoreDetails = (event) => {
        setAllDetailsStore(event.target.name, event.target.value)
    }
    // פונקציה שמכניסה ערכים לסטייט המקומי לפי שדה
    const setAllDetailsStore = (name, value) => {
        setDetailsStore({
            ...detailsStore,
            [name]: value
        }
        )
    }
    //פונקציה שטוענת את הלוגו
    const handlerLogo = (event) => {
        if (event) {
            let reader = new FileReader();
            reader.onloadend = () => {
                setAllDetailsStore("logo", reader.result)
            }
            reader.readAsDataURL(event)
            setFileToUpload(event);
        }
    }

    //פונקציה תקינות קלט לכתובת הניתוב 
    function funcConvert(event) {
        let str = event.target.value
        let hasSpace = str.indexOf(' ');
        if (hasSpace >= 0)
            str = str.replace(/\s/g, '_')
        setAllDetailsStore("urlRoute", str)
    }


    //פונ שיוצרת את החנות ומכניסה לרידקס את הנתונים
    //  ועוברת לחנות דמו עם הפרטים שהזין
    const submitToStore = (event) => {
        //פונקציה שתמנע את השרשור לכתובת האתר
        event.preventDefault()
        props.setSaveAllDetailsStore(detailsStore)
        props.createNewStore({ "store": detailsStore, "file": fileToUpload }).then(() => {
            // props.createNewStore({ "store": props.objectFields, "file": fileToUpload }).then(() => {
            // history.push("/0/" + props.objectFields.urlRoute)
            // console.log("store", props.objectFields);
            history.push("/0/" + detailsStore.urlRoute)
            console.log("store", detailsStore);
        })
    }

    return (
        <div>
            <h1>welcome to open shop!!!!!</h1><br></br>
            <form onSubmit={submitToStore}>
                <input placeholder="הכנס שם חנות" type="text" name="storeName" id="fname"
                    onBlur={funcConvert}
                    onChange={changeStoreDetails}
                // required
                ></input><br></br>
                <input placeholder="הכנס תאור לחנות" name="storeDescription"
                    onChange={changeStoreDetails}
                ></input><br></br>
                <input placeholder="הכנס כתובת החנות" name="address"
                    onChange={changeStoreDetails}
                ></input><br></br>
                <input placeholder="הכנס טלפון" name="tel"
                    onChange={changeStoreDetails}
                ></input><br></br>
                <input type={"email"} placeholder="הכנס אימיל" name="email"
                    onChange={changeStoreDetails}
                ></input><br></br>
                <input placeholder="  בחר צבע ראשי לחנות   " name="colorDominates"
                    onChange={e => setAllDetailsStore("colorDominates", e.target.value)}
                //    onChange={e => updateColor(e.target.value)}
                ></input><br></br>
                <Box name="color"
                    width={'100%'}
                    margin-left="115vh"
                    alignSelf="center">
                    <SwatchesPicker
                        color={detailsStore.colorDominates}

                        onChangeComplete={e => setAllDetailsStore("colorDominates", e.hex)}
                        width={400}
                        height={100}

                    /></Box>

                <input placeholder="הכנס מדיניות" name="policy"
                    onChange={changeStoreDetails}
                ></input><br></br>
                <lable>בחר מטבע</lable>
                <select
                    onChange={e => setAllDetailsStore("currency", e.target.value)}
                >
                    {props.coins.map((item, index) => (
                        <option key={index} value={item.name}>{item.name}:{item.country}</option>
                    ))}
                </select>


                <div>
                    <label for="logoS">הכנס לוגו של החנות
                <img className="logoC" alt=""
                            src={detailsStore.logo}
                        // src={props.objectFields.logo}
                        ></img>
                    </label>
                    <input
                        type={"file"}
                        id="logoS"
                        accept="image/*"
                        name="logo"
                        onChange={(e) => handlerLogo(e.target.files[0])}
                    />
                </div><br></br>
                <input type="submit" value="עבור לחנות שלך לדוגמא"></input>
            </form>

        </div>
    )
}
const mapStateToProps = (state) => {
    return {

        objectFields: state.openStoreReducer.objectFields,
        // storeId: state.openStoreReducer.storeId,
        coins: state.coinsReducer.coins

    }
}
const mapDispatchToProps = (dispatch) => ({
    // setNameStore: (e) => dispatch(actions.setNameStore(e.target.value)),
    // setUrlRoute: (e) => dispatch(actions.setUrlRoute(e)),
    // setCurrencyStore: (e) => dispatch(actions.setCurrencyStore(e)),
    // setLogoStore: (e) => dispatch(actions.setLogoStore(e)),
    // setColorStore: (e) => dispatch(actions.setColorStore(e)),
    createNewStore: (objectFields) => dispatch(actions.createNewStore(objectFields)),
    // uploadImage: (x) => dispatch(actions.uploadImage(x)),
    setSaveAllDetailsStore: (e) => dispatch(actions.setSaveAllDetailsStore(e))
})
export default connect(mapStateToProps, mapDispatchToProps)(OpenStore);