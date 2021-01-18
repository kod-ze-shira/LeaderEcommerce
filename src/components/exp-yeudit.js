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
                props.uploadImage({ "fileName": "profilPicture", "file": fileToUpload })
        }


        return (
                <>

                        <label for="logouug" className="lbl_img">
                                <img className="img_logo" referrerpolicy="no-referrer" src={
                                        props.url == "" ? profilePicture : props.url
                                        // props.user && props.user.profilePicture == "" ? profilePicture : props.user.profilePicture
                                } />
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
                        user: state.userReducer.user,
                        url: state.uploadFileReducer.url
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

// export const uploadFile = ({ dispatch, getState }) => next => action => {
//         return new Promise((resolve, reject) => {
//             if (action.type === '[funnel] UPLOAD_FILE') {
//                 const fil = action.payload
//                 console.log(fil);
//                 const myFile = new FormData()
//                 myFile.append("file", action.payload)


//                 $.ajax({
//                     url: `https://funnel.dev.leader.codes/api/uploadFile/${getState().user.userId}/${getState().user.userName}`,
//                     type: 'POST',
//                     data: myFile,
//                     contentType: false,
//                     processData: false,
//                     headers: {
//                         Authorization: 'view'
//                     },
//                     success: function (data) {
//                         console.log(data);
//                         dispatch({ type: '[funnel] SET_IMAGE_FILE', payload: data })
//                         resolve(data)
//                     },
//                     error: function (err) {
//                         console.log(err);
//                         reject(err)
//                     }
//                 })
//             }
//             return next(action)
//         })
//     }


// export const saveOrUpdate = ({ dispatch, getState }) => next => action => {
//     if (action.type === '[funnel] SAVE_OR_UPDATE') {
//         dispatch({ type: '[funnel] CHANGE_LOADING'})
//         dispatch({ type: '[funnel] UPLOAD_FILE', payload: action.payload }).then((res) => {
//             if (getState().funnel.idFunnel)
//                 dispatch({ type: '[funnel] UPDATE_FUNNEL' })
//             else
//                 dispatch({ type: '[funnel] CREAT_FUNNEL' })
//         })
//     }
//     return next(action)
// }