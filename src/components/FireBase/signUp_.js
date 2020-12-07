import React from 'react'
import firebase from './auth'

function SignUp(props) {

    const navi = (e) => {
        
        debugger
        props.history.push("/product")

    }
    //גררנו את הפונקציה של ההתחברות צריך להעתיק מרותי את העדכנית
    // const f= document.getElementById('signup');
    // f.addEventListener("submit",(e)=>{

    return (
        <div>
            <h2>signup</h2>
<button onClick={navi}>sdfghjkl</button>
            <form id='signup'>
                <input placeholder="email" type="email" name="email" /><br />
                <input placeholder="password" type="password" name="password" /><br />
                <button onClick=
                    {
                        e => {
                            {
                                debugger;
                                e.preventDefault();
                                const email = document.querySelector('input[name=email]').value;
                                const password = document.querySelector('input[name=password]').value;

                                firebase.auth().createUserWithEmailAndPassword(email, password)
                                    .then(data => {
                                        console.log(data);
                                        debugger
                                        // navi()
                                    }).catch(function (error) {
                                        var errorCode = error.code;
                                        var errorMessage = error.message;
                                        console.log("eeeeeeeeeeeeerrrrrrrrrrrrrrrr")
                                        //הודעת שגיאה
                                        alert("שגיאה נסה שוב")
                                    });



                            }
                        }
                    }
                >save</button>
                <br />
            </form>
        </div>
        //הסקריפטים נמצאים בדף האינדקס
    );
}
export default SignUp;