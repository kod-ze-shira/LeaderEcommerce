// import React, { useState } from 'react';
// import { connect } from "react-redux";
// import { actions } from "../redux/action";
// import { useHistory } from "react-router-dom";
// import logoo from "../assets/img/xd/Image.jpeg"

// function OpenStore(props) {

//     const history = useHistory();

//     const [fileToUpload, setFileToUpload] = useState(null);

//     const [storeDetails, setStoreDetails] = useState({
//         storeName: "MY STORE",
//         urlRoute: "MY_STORE",
//         storeDescription: "THE BEST STORE IN THE WORLD",
//         address: "JERUSALEM",
//         tel: "02:6277134",
//         email: "MYSTORE@GMAIL.COM",
//         colorDominates: "RED",
//         policy: "",
//         currency: "",
//         logo: logoo,
//         checkInventoryManagement: false,
//         checkoneProductPurchase: false


//     });
//     function changeStoreDetails(event) {
//         setAllStoreDetails(event.target.name, event.target.value)
//     }
//     function setAllStoreDetails(name, value) {
//         setStoreDetails({
//             ...storeDetails,
//             [name]: value
//         }
//         )
//     }

//     function handlerLogo(event) {
//         if (event) {
//             let reader = new FileReader();
//             reader.onloadend = () => {
//                 setAllStoreDetails("logo", reader.result)
//             }
//             reader.readAsDataURL(event)
//             setFileToUpload(event);
//         }
//     }
//     function convertSpacesToUnderlines(event) {
//         let str = event.target.value
//         let hasSpace = str.indexOf(' ');
//         if (hasSpace > -1)
//             str = str.replace(/\s/g, '_')
//         setAllStoreDetails("urlRoute", str)
//     }



//     const onSubmitStoreDetails = async (event) => {
//         event.preventDefault()
//         props.setTitle(storeDetails.storeName)

//         await props.createNewStore({ "store": storeDetails, "file": fileToUpload }).then(BHD => {
//             props.newBullcommerceHeader({ "store": BHD._id })
//             history.push("/" + storeDetails.urlRoute);
//         })

//     }

//     function skip() {
//         debugger
//         props.setAllOrders([])
//         props.setCategories([])
//         props.setAttribute([])
//         props.setProducts([])

//         props.createNewStore({ "store": storeDetails, "file": fileToUpload }).then(BHD => {
//             console.log("bhd", BHD);
//             props.newBullcommerceHeader({ "store": BHD._id })
//             history.push("/" + storeDetails.urlRoute);
//         })

//         // ;



//     }

//     return (
//         <>
//             <h1>Please, Fill your store details...</h1><br></br>
//             <form onSubmit={onSubmitStoreDetails}>
//                 <input
//                     required
//                     placeholder="הכנס שם חנות"
//                     type="text"
//                     name="storeName"
//                     id="fname"
//                     onBlur={convertSpacesToUnderlines}
//                     onChange={changeStoreDetails}
//                 ></input><br></br>
//                 <input
//                     placeholder="הכנס תאור לחנות"
//                     name="storeDescription"
//                     onChange={changeStoreDetails}
//                 ></input><br></br>
//                 <input
//                     placeholder="הכנס כתובת החנות"
//                     name="address"
//                     onChange={changeStoreDetails}
//                 ></input><br></br>
//                 <input
//                     type={"tel"}
//                     placeholder="הכנס טלפון"
//                     name="tel"
//                     onChange={changeStoreDetails}
//                 ></input><br></br>
//                 <input
//                     type={"email"}
//                     placeholder="הכנס אימיל"
//                     name="email"
//                     onChange={changeStoreDetails}
//                 ></input><br></br>
//                 <label>בחר צבע ראשי לחנות</label><br></br>
//                 <input
//                     type={"color"}
//                     placeholder="  בחר צבע ראשי לחנות   "
//                     name="colorDominates"
//                     onChange={changeStoreDetails}
//                 ></input><br></br>
//                 <input
//                     placeholder="הכנס מדיניות"
//                     name="policy"
//                     onChange={changeStoreDetails}
//                 ></input><br></br>
//                 <label htmlFor="myCheck">ניהול מלאי</label><br></br>
//                 <input id="myCheck"
//                     name="checkInventoryManagement"
//                     type="checkbox"
//                     checked={storeDetails.checkInventoryManagement}
//                     onChange={(e) => setAllStoreDetails("checkInventoryManagement", e.target.checked)}
//                 />
//                 <br></br>
//                 <label htmlFor="myCheck">קניה חד מוצרית</label><br></br>
//                 <input id="myCheck"
//                     name="checkoneProductPurchase"
//                     type="checkbox"
//                     checked={storeDetails.checkoneProductPurchase}
//                     onChange={(e) => setAllStoreDetails("checkoneProductPurchase", e.target.checked)}
//                 />
//                 <br></br>
//                 <br></br>
//                 <label>בחר מטבע</label><br></br>
//                 <select
//                     onChange={e => setAllStoreDetails("currency", e.target.value)}>
//                     {props.coins.map((item, index) => (
//                         <option key={index} value={item.name}>{item.name}:{item.country}</option>
//                     ))}
//                 </select>
//                 <div>
//                     <label htmlFor="logoS">
//                         <img className="logoC" alt="הכנס לוגו של החנות"
//                             src={storeDetails.logo}
//                         ></img>
//                     </label>
//                     <input
//                         type={"file"}
//                         id="logoS"
//                         accept="image/*"
//                         name="logo"
//                         style={{
//                             display: "none"
//                         }}
//                         onChange={(e) => handlerLogo(e.target.files[0])}
//                     />
//                 </div><br></br>

//                 <input type="submit" value="עבור לחנות שלך לדוגמא"></input>

//             </form>


//             <button onClick={skip}>דלג על הזנת פרטים ועבור לחנות דמו</button>

//         </>
//     )

// }

// const mapStateToProps = (state) => {
//     return {

//         coins: state.coinsReducer.coins
//     }
// }
// const mapDispatchToProps = (dispatch) => ({
//     createNewStore: (objectFields) => dispatch(actions.createNewStore(objectFields)),
//     newBullcommerceHeader: (x) => dispatch(actions.newBullcommerceHeaderDesign(x)),
//     setSaveAllStoreDetails: (e) => dispatch(actions.setSaveAllStoreDetails(e)),
//     setAllOrders: (e) => dispatch(actions.setAllOrders(e)),
//     setCategories: (e) => dispatch(actions.setCategories(e)),
//     setAttribute: (e) => dispatch(actions.setAttribute(e)),
//     setProducts: (e) => dispatch(actions.setProducts(e)),
//     setTitle: (e) => dispatch(actions.setTitle(e)),

// })
// export default connect(mapStateToProps, mapDispatchToProps)(OpenStore);