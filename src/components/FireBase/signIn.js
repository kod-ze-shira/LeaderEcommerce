import React from 'react';
import firebase from 'firebase';

function SignIn(props) {


    //ללכת לדף הבית
    return (
        <form id='signup'>
            <h1>sign in</h1>
            <input type="email" placeholder="email" name="emailSI" /><br />
            <input type="password" placeholder="password" name="passwordSI" /><br />
            <button onClick={e => {
                debugger;
                e.preventDefault();
                const email = document.querySelector('input[name=emailSI]').value;
                const password = document.querySelector('input[name=passwordSI]').value;
                firebase.auth().signInWithEmailAndPassword(email, password) .then((data) => {          
                        debugger;
                        console.log("nnn");
                        console.log(data);
                        props.history.push("/product")
                    })  .catch(function (error) {          
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        console.log("eeeeeeeeeeeeerrrrrrrrrrrrrrrr")

                    });
            }
            }

            >sighin</button>
        </form>
    )
}
export default SignIn;