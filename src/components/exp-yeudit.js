import React from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import { actions } from '../redux/action'
import { useCookies } from "react-cookie";
import profilePicture from '../assets/profil.png'



function ExpYeudit(props) {

        const [cookies, setCookie] = useCookies(["jwt"]);

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
                debugger
                //שימוש בFileReader לצורך הצגה מקומית של התמונה, היות ולוקח כמה שניות עד שחוזר url מהשרת.
                const reader1 = new FileReader();
                const file = event;
                reader1.onloadend = () => {
                        props.changeProfile(reader1.result)
                };
                reader1.readAsDataURL(file);
                console.log("event", event)
                var fileToUpload = event
                props.uploadImage(/*"imgLogo",*/ fileToUpload)
        }


        return (
                <>

                        <label for="logouug" className="lbl_img">
                                <img className="img_logo" referrerpolicy="no-referrer" src={props.user && props.user.profilePicture == "" ? profilePicture : props.user.profilePicture} />
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
                        user: state.userReducer.user
                        // uId: state.userReducer.user.uid
                }
        },
        (dispatch) => {
                return {
                        setUsername: (e) => dispatch(actions.setUsername(e)),
                        uploadImage: (x) => dispatch(actions.uploadImage(x)),
                        changeProfile: (x) => dispatch(actions.setProfilePicture(x))
                }
        }

)(ExpYeudit);