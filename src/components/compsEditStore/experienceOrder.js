import React, { useState } from 'react'
import { connect } from "react-redux";
import { actions } from "../../redux/action";
function ExperienceOrder(props) {
    //order= המערך שלתוכו נכניס את הנתונים
    //setOrder=הצבת הערכים 
    const [order, setOrder] = useState({
        TrackingID: "",
        Address: "",
        Date: "",
        Product: "",
    });
    //כל שינוי שיש באינפוט נשלח לכאן
    const updateSetOrder = (event) => {
        setOrder({
            //הנקודות- בשביל שהמערך לא יעלם כל פעם מחדש. אז כביכול הוא מעתיק את המערך ואז 
            //מוסיף ומציב את הערכים החדשים לפי כל שדה
            ...order,
            [event.target.name]: event.target.value

        })
    }
    //לאחר שמילאו את כל פרטי ההזמנה נשלח את ההזמנה לרדוסר
    const funcSubmit = () => {
        props.changeOrderArr(order)
        //שליחה לקרד
        props.newOrder(order)
    }
    return (
        <>

            <h1>welcome to form to create order!!!!!</h1><br></br>
            {/* //name= useState שם זהה לשדות המערך שמוגדר ב  */}
            <label> enter trackingID</label><input name="TrackingID" onChange={updateSetOrder}></input><br></br><br></br>
            <label> enter your Address</label><input name="Address" onChange={updateSetOrder}></input><br></br><br></br>
            <label> enter date</label><input name="Date" onChange={updateSetOrder}></input><br></br><br></br>
            <label> enter products</label><input name="Product" onChange={updateSetOrder}></input><br></br><br></br>
            {/* האם צריך להכניס נתונים כי זה אמור להתקבל לבד */}
            {/* store */}
            <button onClick={funcSubmit}>שלח</button>

        </>
    )
}
const mapStateToProps = (state) => {
    return {
        order1: state.ordersReducer.order
    }
}
const mapDispatchToProps = (dispatch) => ({

    changeOrderArr: (e) => dispatch(actions.setOrder(e)),
    ///DBהפעלת הפונקציה שכתובה בקרד שהיא מציבה את הנתונים ב
    newOrder: (e) => dispatch(actions.newOrder(e)),

})
export default connect(mapStateToProps, mapDispatchToProps)(ExperienceOrder);

/////////////////////////////


