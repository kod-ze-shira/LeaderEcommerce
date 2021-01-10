import React, { useEffect, useState } from 'react';
// import './Login.css'
// import { signInWithGoogle,signInWithEmailAndPassword,logOut, auth } from '../services/firebase';
// import { Redirect } from 'react-router-dom';
import $ from 'jquery';
import { connect } from 'react-redux';
import { actions } from '../redux/action'


function ExpYeudit(props) {

        //     const [email, setEmail] = useState(0);


        // useEffect(()=>{

        // })

        const onChangeEmail = (e) => {
                // setEmail(e.target.value)
        }


        const onSubmitForm = (e) => {
                e.preventDefault()

                let jwtFromCookie = document.cookie.split(";")
                        .filter(s => s.includes('jwt'))[0].split("=").pop();

                console.log("cooky", document.cookie);
                var fileToUpload = $("#uploadInput")[0].files[0];
                var myFile = new FormData();
                myFile.append("file", fileToUpload);
                $.ajax({
                        type: "POST",
                        url: "https://files.leader.codes/api/" + props.uId + "/upload",
                        headers: { Authorization: jwtFromCookie },
                        data: myFile,
                        processData: false,
                        contentType: false,
                        success: function (data) {
                                let url = JSON.parse(data).data.url;
                                alert("upload success");
                        },
                        error: function (err) {
                                alert(err);
                        },
                });

        }

        return (
                <>
                        <form className="form" onSubmit={(e) => onSubmitForm(e)}>
                                <label for="uploadInput">upload your file:</label>
                                <input id="uploadInput" type={"file"} name="file" onChange={(e) => onChangeEmail(e)} /><br />
                                <input type="submit" value="OK" />
                        </form>
                </>
        );
}

export default connect(
        (state) => {
                return {
                        uId: state.userReducer.user.uid
                }
        },
        (dispatch) => {
                return {
                        setUsername: (e) => dispatch(actions.setUsername(e))
                }
        }

)(ExpYeudit);