import React from 'react'
import { connect } from "react-redux";
import { actions } from "../../redux/action";

//בתוכ הסוגריים של הפונקציה מקבלים את הפרופס
function Demo(props) {
    return (
        <h1>welcome!!!!!</h1>
    )
}
const mapStateToProps = (state) => {
    return {
        //אפשר לקרוא שם אחר לאוביקט
    }
}
const mapDispatchToProps = (dispatch) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(Demo);


/////////////////////////////


