// import React from 'react'
// import { connect } from "react-redux";
// import { actions } from "../../redux/action";

// //בתוכ הסוגריים של הפונקציה מקבלים את הפרופס
// function StoreSettingsManagement(props) {
//     return (
//         <div>
//             <h1>welcome to setting!!!!!</h1>
//             <div>
//             <h1>welcome to open shop!!!!!</h1><br></br>
//             <input placeholder="הכנס שם חנות" onChange={props.setNameStore}></input><br></br>
//             <input placeholder="הכנס תאור לחנות" onChange={props.setDescriptionStore}></input><br></br>
//             <input placeholder="הכנס כתובת החנות" onChange={props.setAddressStore}></input><br></br>
//             <input placeholder="הכנס טלפון" onChange={props.setPhoneStore}></input><br></br>
//             <input placeholder="הכנס אימיל" onChange={props.setEmailStore}></input><br></br>
//             {/* //לבקש מאוהב את הבלוק של הצבעים שהראה לי */}
//             {/*לבינתיים עשיתי עם אינפוט*/}
//             <input placeholder="  בחר צבע ראשי לחנות   " onChange={props.setColorStore}></input><br></br>
//             {/*  למטבעות drop down  צריך שיהיה  */}
//             <input placeholder="הכנס מדיניות" onChange={props.setPolicyStore}></input><br></br>
//             {/* <input placeholder="בחר מטבע" onChange={props.setCurrencyStore}></input><br></br> */}
//             <lable>בחר מטבע</lable>
//             <select>
//                 <option>"AED": "United Arab Emirates Dirham"</option>
//                 <option>"AFN": "Afghan Afghani",</option>
//                 <option>"ALL": "Albanian Lek"</option>
//                 <option>"AMD": "Armenian Dram"</option>
//                 <option> "ANG": "Netherlands Antillean Guilder"</option>
//                 <option>"AOA": "Angolan Kwanza"</option>
//                 <option>"ARS": "Argentine Peso"</option>
//                 <option>"AUD": "Australian Dollar"</option>
//                 <option>"AWG": "Aruban Florin",</option>
//                 <option>"AZN": "Azerbaijani Manat",</option>
//                 <option>"BAM": "Bosnia-Herzegovina Convertible Mark",</option>
//                 <option>"BBD": "Barbadian Dollar",</option>
//                 <option>"BDT": "Bangladeshi Taka",</option>
//                 <option>"BGN": "Bulgarian Lev",</option>
//                 <option>"BHD": "Bahraini Dinar",</option>
//                 <option>"BIF": "Burundian Franc",</option>
//                 <option>"BMD": "Bermudan Dollar",</option>
//                 <option>"BND": "Brunei Dollar",</option>
//                 <option>"BOB": "Bolivian Boliviano",</option>
//                 <option>"BRL": "Brazilian Real",</option>
//                 <option>"BSD": "Bahamian Dollar"</option>
//                 <option>"BTC": "Bitcoin",</option>
//                 <option>"BTN": "Bhutanese Ngultrum",</option>
//                 <option>"BWP": "Botswanan Pula",</option>
//                 <option>"BYN": "Belarusian Ruble",</option>
//                 <option>"BZD": "Belize Dollar",</option>
//                 <option>"CAD": "Canadian Dollar",</option>
//                 <option>"CDF": "Congolese Franc",</option>
//                 <option>"CHF": "Swiss Franc",</option>
//                 <option>"CLF": "Chilean Unit of Account (UF)"</option>
//                 <option>"CLP": "Chilean Peso",</option>
//                 <option>"CNH": "Chinese Yuan (Offshore)"</option>
//                 <option>"CNY": "Chinese Yuan",</option>
//                 <option>"COP": "Colombian Peso",</option>
//                 <option>"CRC": "Costa Rican Colón",</option>
//                 <option>"CUC": "Cuban Convertible Peso",</option>
//                 <option>"CUP": "Cuban Peso",</option>
//                 <option>"CVE": "Cape Verdean Escudo",</option>
//                 <option>"CZK": "Czech Republic Koruna",</option>
//                 <option>"DJF": "Djiboutian Franc",</option>
//                 <option>"DKK": "Danish Krone",</option>
//                 <option>"DOP": "Dominican Peso",</option>
//                 <option>"DZD": "Algerian Dinar",</option>
//                 <option>"EGP": "Egyptian Pound",</option>
//                 <option>"ERN": "Eritrean Nakfa",</option>
//                 <option>"ETB": "Ethiopian Birr",</option>
//                 <option>"EUR": "Euro",</option>
//                 <option>"FJD": "Fijian Dollar",</option>
//                 <option>"FKP": "Falkland Islands Pound",</option>
//                 <option>"GBP": "British Pound Sterling",</option>
//                 <option>"GEL": "Georgian Lari",</option>
//                 <option>"GGP": "Guernsey Pound",</option>
//                 <option>"GHS": "Ghanaian Cedi",</option>
//                 <option>"GIP": "Gibraltar Pound",</option>
//                 <option>"GMD": "Gambian Dalasi",</option>
//                 <option>"GNF": "Guinean Franc",</option>
//                 <option>"GTQ": "Guatemalan Quetzal",</option>
//                 <option>"GYD": "Guyanaese Dollar",</option>
//                 <option>"HKD": "Hong Kong Dollar",</option>
//                 <option>"HNL": "Honduran Lempira",</option>
//                 <option>"HRK": "Croatian Kuna",</option>
//                 <option>"HTG": "Haitian Gourde",</option>
//                 <option>"HUF": "Hungarian Forint",</option>
//                 <option>"IDR": "Indonesian Rupiah",</option>
//                 <option>"ILS": "Israeli New Sheqel",</option>
//                 <option>"IMP": "Manx pound",</option>
//                 <option>"INR": "Indian Rupee",</option>
//                 <option>"IQD": "Iraqi Dinar",</option>
//                 <option>"IRR": "Iranian Rial",</option>
//                 <option>"ISK": "Icelandic Króna",</option>
//                 <option>"JEP": "Jersey Pound",</option>
//                 <option>"JMD": "Jamaican Dollar",</option>
//                 <option>"JOD": "Jordanian Dinar",</option>
//                 <option>"JPY": "Japanese Yen",</option>
//                 <option>"KES": "Kenyan Shilling",</option>
//             </select>

//             <div>
//                 <lable for="logoS">הכנס לוגו של החנות
//                 <img className="logoC" alt="" src={props.objectFields.logoStore}></img>
//                 </lable>
//                 <input
//                     type={"file"}
//                     id="logoS"
//                     // htmlFor="myInput"
//                     accept="image/*"
//                     // style={{
//                     // display: "none"
//                     // }}
//                     onChange={(e) => handlerLogo(e.target.files[0])}
//                 />
//             </div><br></br>
//             {console.log(props.objectFields)}
//             {/* <Link to="/nameStore" > */}
//             <button onClick={submitToStore}>עבור לחנות שלך לדוגמא</button>
//             {/* </Link> */}
//         </div>


//         </div>


//     )
// }
// const mapStateToProps = (state) => {
//     return {
//         //אפשר לקרוא שם אחר לאוביקט
//     }
// }
// const mapDispatchToProps = (dispatch) => ({

// })
// export default connect(mapStateToProps, mapDispatchToProps)(StoreSettingsManagement);


// /////////////////////////////


