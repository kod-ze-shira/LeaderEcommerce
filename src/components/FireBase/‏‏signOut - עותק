import React from 'react'
import firebase from './auth'

function SignOut() {
    return (
        <div>
          
            <button id="signout" onClick={e => {
                    firebase.auth().signOut().then(function () {
                        console.log("out")
                        //לחזור לדף ההרשמות
                    }).catch(function (error) { console.log(error); })}} >signout
                    </button>
        </div>
    )
}
export default SignOut;