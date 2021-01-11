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


        // const onSubmitForm = (e) => {
        //         e.preventDefault()

        //         let jwtFromCookie = document.cookie.split(";")
        //                 .filter(s => s.includes('jwt'))[0].split("=").pop();

        //         console.log("cooky", document.cookie);
        //         var fileToUpload = $("#uploadInput")[0].files[0];
        //         var myFile = new FormData();
        //         myFile.append("file", fileToUpload);
        //         $.ajax({
        //                 type: "POST",
        //                 url: "https://files.leader.codes/api/" + props.uId + "/upload",
        //                 headers: { Authorization: jwtFromCookie },
        //                 data: myFile,
        //                 processData: false,
        //                 contentType: false,
        //                 success: function (data) {
        //                         let url = JSON.parse(data).data.url;
        //                         alert("upload success");
        //                 },
        //                 error: function (err) {
        //                         alert(err);
        //                 },
        //         });

        // }
        const onChangeHandlerLogo = (event) => {
                //שימוש בFileReader לצורך הצגה מקומית של התמונה, היות ולוקח כמה שניות עד שחוזר url מהשרת.
                const reader1 = new FileReader();
                const file = event;
                var num = 0;
                reader1.onloadend = () => {
                        props.changeProductImage(reader1.result, num)
                };
                reader1.readAsDataURL(file);
                console.log("event", event)
                var fileToUpload = event
                props.uploadImage("imgLogo", fileToUpload)
        }


        return (
                <>

                        <label for="logouug" className="lbl_img">
                                <img className="img_logo" referrerpolicy="no-referrer" src={props.user && props.user.imgLogo == "" ? "logo1" : props.user.imgLogo} />
                        </label>
                        <input

                                type={"file"}
                                id="logouug"
                                htmlFor="myInput"
                                accept="image/*"

                                style={{
                                        display: 'none',
                                        cursor: 'pointer',
                                }}
                                onChange={(e) => onChangeHandlerLogo(e.target.files[0])}
                        />
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
                        setUsername: (e) => dispatch(actions.setUsername(e)),
                        uploadImage: (x) => dispatch(actions.uploadImage(x))
                }
        }

)(ExpYeudit);