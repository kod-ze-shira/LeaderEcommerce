import React, { useState } from 'react'
import './uploadImages.css'
import { actions } from "../../../../redux/action"
import { connect } from 'react-redux';
import uploadImg from '../../../../assets/uploadImg.svg'
import { Link } from "react-router-dom";

function UploadImages(props) {
    const [fileToUpload, setFileToUpload] = useState(null);
    const [myImage, setMyImage] = useState(null);
    function setImagesArr(u) { console.log("sdfghjkkkkkkkkkkkkkk"); }
    function handlerLogo(event) {
        if (event) {
            let reader = new FileReader();
            reader.onloadend = () => {
                props.uploadImageNameAction({ func: props.functionSetImage, img: reader.result })
                setMyImage(reader.result)
            }
            reader.readAsDataURL(event)
            setFileToUpload(event);
            props.uploadImage(event);
        }
    }

    // הפונקציה הזו בשביל תצוגת התמונות מהשרת
    // const handlerLogo = (e) => {
    //     props.uploadImage(e);
    // }
    return (
        <>
            <div className="uploud-image"
                style={{ myImage } ? {
                    backgroundImage: `url(${myImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                } : { display: "none" }}>
                <div className="uploud-image-middle">
                    <label for="files"></label>
                    <div> <img className="upload-img" src={uploadImg} style={myImage ? { display: "none" } : {}} alt="uploadImg" /></div>
                    <div><p className="upload-image-word mt-2 mb-1">Drop Image Here</p></div>
                    <div><p className="upload-image-word pl-5 ml-3 mt-0">Or</p></div>
                    <div className="uploud-image-choose-file-div ml-2">
                        <label htmlFor="files" className="uploud-image-choose-file" >
                            Choose Files
                            <img className="logoC"
                                src={props.url}
                            ></img>
                        </label>
                        <input id="files" style={{ visibility: "hidden" }} type="file" onChange={(e) => handlerLogo(e.target.files[0])} />
                        <Link to={props.imageLocation}>
                            <button>insert</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        url: state.coinsReducer.picture,
        imageLocation: state.uploadImageReducer.ImageLocation,
        functionSetImage: state.uploadImageReducer.functionSetImage
    }
}
const mapDispatchToProps = (dispatch) => ({
    uploadImage: (x) => dispatch(actions.uploadImage(x)),
    // setImagesArr: (img) => dispatch(actions.setImagesArr(img)),
    // setImageLocation: (e) => dispatch(actions.setImageLocation(e))
    uploadImageNameAction: (e) => dispatch(actions.uploadImageNameAction(e))

})
export default connect(mapStateToProps, mapDispatchToProps)(UploadImages);