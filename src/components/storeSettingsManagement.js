import { Box } from '@material-ui/core';
import React, { useEffect, useState } from "react";
import { CirclePicker, GithubPicker, HuePicker, SwatchesPicker } from 'react-color';
import { connect } from "react-redux";
import { actions } from '../redux/action'
function StoreSettingsManagement(props) {

    useEffect(() => {
        setDetailsStore(props.objectFields)
    }, [])


    //useState אובייקט
    const [detailsStore, setDetailsStore] = useState({
        storeName: "",
        urlRoute: "",
        storeDescription: "",
        logo: "",
        address: "",
        tel: "",
        email: "",
        colorDominates: "",
        policy: "",
        currency: "",
        inventoryManagement: "",//ניהול מלאי
        oneProductPurchase: "",//קניה חד מוצרית

    });

    // const updateSetDetailsStore = (event) => {
    //     setDetailsStore({
    //         ...detailsStore,
    //         [event.target.name]: event.target.value
    //     }
    //     )
    // }

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


    // const updateLogo = (value) => {
    //     setDetailsStore({
    //         ...detailsStore,
    //         logo: value
    //     }
    //     )
    // }
    // const updateUrlRoute = (value) => {
    //     setDetailsStore({
    //         ...detailsStore,
    //         urlRoute: value
    //     }
    //     )
    // }
    // const updateCurency = (value) => {
    //     setDetailsStore({
    //         ...detailsStore,
    //         currency: value
    //     }
    //     )
    // }
    // const updateColor = (value) => {
    //     setDetailsStore({
    //         ...detailsStore,
    //         colorDominates: value
    //     }
    //     )
    // }





    //פונקציה שטוענת את הלוגו
    function handlerLogo(event) {
        if (event) {
            let reader = new FileReader();
            reader.onloadend = () => {
                setAllDetailsStore("logo", reader.result)
                // updateLogo(reader.result)
            }
            reader.readAsDataURL(event)
        }
    }
    // checkbox -  פונקציה ל
    function checkBoxFunc() {

        var checkBox = document.getElementById("myCheck");
        var text = document.getElementById("text");
        if (checkBox.checked == true) {
            // ? true האם אני יוכלה להציב במשתנה בריקס את 
            //במקום כל האוביקט המוזר שהוא מציב
            props.setInventoryManagement("true")
            console.log(props.objectFields.inventoryManagement)
        }
        else {
            // ? false האם אני יוכלה להציב במשתנה בריקס את 
            //במקום כל האוביקט המוזר שהוא מציב
            props.setInventoryManagement("false")
            console.log("not choose!!!!!")
        }
    }


    // checkbox -  פונקציה ל
    function checkBoxFunc2() {
        var checkBox = document.getElementById("myCheckBuy");
        var text = document.getElementById("text");
        if (checkBox.checked == true) {
            props.setOneProductPurchase("true")
            console.log(props.objectFields.oneProductPurchase)
        }
        else {
            props.setOneProductPurchase("false")
            console.log("not choose!!!!!")
        }
    }


    // setUrlRoute פונ ששולחת את הערך של האינפוט ל
    function funcSendValue(event) {
        // updateUrlRoute(event.target.value)
        setAllDetailsStore("urlRoute", event.target.value)

    }

    //פונקציה תקינות קלט לכתובת הניתוב 
    function funcConvert2(event) {
        let str = event.target.value
        //תנאי שרק כאשר יש רווח יכנס להמרה
        let hasSpace = str.indexOf(' ');
        if (hasSpace >= 0)
            str = str.replace(/\s/g, '_')
        // updateUrlRoute(str)
        setAllDetailsStore("urlRoute", str)
    }
    //שמירת הטופס צריך לעשות פה ניתוב לאיפה שרותי תגיד
    function saveForm(event) {
        alert("save changes!")
        //פונקציה שתמנע את השרשור לכתובת האתר
        event.preventDefault()
        props.setSaveAllDetailsStore(detailsStore)

    }

    return (
        <div>
            <h1>welcome to setting!!!!!</h1>
            <div>
                <form onSubmit={saveForm}>
                    <label for="a">עדכן שם חנות</label><br></br>
                    <input id="a"
                        name="storeName"
                        required
                        value={detailsStore.storeName ? detailsStore.storeName : ""}
                        onChange={changeStoreDetails}
                    ></input><br></br>

                    <label for="b">עדכן תאור לחנות</label><br></br>
                    <input id="b"
                        name="storeDescription"
                        value={detailsStore.storeDescription ? detailsStore.storeDescription : ""}
                        onChange={changeStoreDetails}
                    ></input><br></br>

                    <label for="c">עדכן כתובת החנות</label><br></br>
                    <input id="c"
                        name="address"
                        required
                        value={detailsStore.address ? detailsStore.address : ""}
                        onChange={changeStoreDetails}
                    ></input><br></br>

                    <label for="d">עדכן טלפון החנות</label><br></br>
                    <input id="d"
                        name="tel"
                        required
                        value={detailsStore.tel ? detailsStore.tel : ""}
                        onChange={changeStoreDetails}
                    ></input><br></br>

                    <label for="e">עדכן אימיל החנות</label><br></br>
                    <input id="e"
                        name="email"
                        required
                        value={detailsStore.email ? detailsStore.email : ""}
                        onChange={changeStoreDetails}
                        type="email"></input><br></br>

                    <label for="f">עדכן כתובת ניתוב החנות</label><br></br>
                    <input id="f"
                        type="text"
                        value={detailsStore.urlRoute ? detailsStore.urlRoute : ""}
                        onBlur={funcConvert2}
                        onChange={funcSendValue}></input><br></br>

                    <label for="g">עדכן צבע ראשי לחנות</label><br></br>
                    <input id="g"
                        value={detailsStore.colorDominates ? detailsStore.colorDominates : ""}
                        onChange={e => setAllDetailsStore("colorDominates", e.target.value)}
                    // onChange={e => updateColor(e.target.value)}
                    ></input><br></br>
                    <Box flexDirection="row"
                        display="flex"
                        justifyContent="space-between">
                        <Box name="color"
                            width={'100%'}
                            alignSelf="center">
                            <CirclePicker
                                color={detailsStore.colorDominates}
                                onChangeComplete={e => setAllDetailsStore("colorDominates", e.hex)}
                                // onChangeComplete={e => updateColor(e.hex)}
                                width={200}
                                height={6}
                            />
                        </Box>
                        <Box name="color"
                            width={'100%'}
                            alignSelf="center">
                            <SwatchesPicker
                                color={detailsStore.colorDominates}
                                // onChangeComplete={e => updateColor(e.hex)}
                                onChangeComplete={e => setAllDetailsStore("colorDominates", e.hex)}

                                width={400}
                                height={100}
                                margin-left=" -73vh"
                            />
                        </Box>
                        <Box justifyContent="flex-end">
                            <div className="data__preview"
                                //  style={{ "backgroundColor": props.objectFields.colorDominates }}>
                                style={{ "backgroundColor": detailsStore.colorDominates }}>
                            </div>
                        </Box>
                    </Box>
                    <label for="h">עדכן מדיניות לחנות</label><br></br>
                    <input id="h"
                        name="policy"
                        value={detailsStore.policy ? detailsStore.policy : ""}
                        onChange={changeStoreDetails}
                    ></input><br></br>

                    <label for="myCheck">ניהול מלאי</label><br></br>
                    <input id="myCheck"
                        name="inventoryManagement"
                        type="checkbox"
                        onClick={checkBoxFunc}
                        onChange={changeStoreDetails}
                    /><br></br>

                    <label for="myCheckBuy">קניה חד מוצרית</label><br></br>
                    <input id="myCheckBuy"
                        name="oneProductPurchase"
                        type="checkbox"
                        onClick={checkBoxFunc2}
                        onChange={changeStoreDetails}
                    /><br></br>
                    <lable>בחר מטבע</lable>
                    <select
                        onChange={e => setAllDetailsStore("currency", e.target.value)}
                    // onChange={(e) => updateCurency(e.target.value)}
                    >
                        {props.coins.map((item, index) => (
                            <option key={index} value={item.name}>{item.name}:{item.country}</option>
                        ))}
                    </select>

                    <div>
                        <label for="j">עדכן לוגו של החנות
                <img className="logoC" alt=""
                                src={detailsStore.logo ? detailsStore.logo : ""}
                            ></img>
                        </label>
                        <input
                            type={"file"}
                            id="j"
                            accept="image/*"
                            onChange={(e) => handlerLogo(e.target.files[0])}
                        />
                    </div><br></br>
                    <input type="submit" value="שמור שינויים לחנות שלך"></input>

                </form>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        objectFields: state.openStoreReducer.objectFields,
        coins: state.coinsReducer.coins

    }
}
const mapDispatchToProps = (dispatch) => ({
    setColorStore: (e) => dispatch(actions.setColorStore(e)),
    setInventoryManagement: (e) => dispatch(actions.setInventoryManagement(e)),//ניהול מלאי
    setOneProductPurchase: (e) => dispatch(actions.setOneProductPurchase(e)),//קניה חד מוצרית
    setSaveAllDetailsStore: (e) => dispatch(actions.setSaveAllDetailsStore(e))

})
export default connect(mapStateToProps, mapDispatchToProps)(StoreSettingsManagement);
/////////////////////////////



