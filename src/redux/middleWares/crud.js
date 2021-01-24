import { actions } from '../action';
import axios from 'axios';
import $ from 'jquery';
import { auth } from '../../services/firebase';

let username = "";

//1
export const setUserId = ({ dispatch, getState }) => next => action => {
    if (action.type === 'SET_ID') {
        $.ajax({
            url: `https://community.leader.codes/api/userByUid/${action.payload}`,
            method: "get",
            dataType: "json",
            contentType: "application/json",
            success: function (data) {
                console.log("jhhuhjjkh", data)
                dispatch(actions.setUserId(data));
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(XMLHttpRequest, " ", textStatus, " ", errorThrown)

            }
        });
    }
    return next(action);
}

//2
export const checkPermission = ({ dispatch, getState }) => next => action => {

    if (action.type === 'CHECK_PERMISSION') {

        // console.log("user2: ",username);
        let TokenToString = action.payload.accessToken.toString();
        let dataToProfilePage = {
            action: "loginCheckPermission",
            token: TokenToString,
        };
        $.ajax({
            url: "https://community.leader.codes/api/checkPremission/" + username,
            headers: {
                Authorization: TokenToString
            },
            method: "post",
            dataType: "json",
            contentType: "application/json",
            withCradentials: true,
            data: JSON.stringify(dataToProfilePage),
            success: function (data) {
                console.log("dataaaaaa", data)
                let jsonWebToken = data.jwt;
                let uid = data.uid;
                let noQuotesJwtData = jsonWebToken.split('"').join("");
                let now = new Date();
                now.setMonth(now.getMonth() + 1);
                // document.cookie = "jwt=" + noQuotesJwtData + ";domain=.leader.codes" + "; path=/; Expires=" + now.toUTCString() + ";"
                const queryString = window.location.search;

                const urlParams = new URLSearchParams(queryString);
                const des = urlParams.get('des')
                const routes = urlParams.get('routes')
                const username = data.username
                dispatch(actions.setId(data.uid));
                dispatch(actions.setUser({ "uid": data.uid, "username": data.username, "email": data.email, "tokenFromCookies": noQuotesJwtData }))
                console.log("uuu", getState().userReducer.uid)
                // let redirectUrl = ''
                // if (des) {
                //     redirectUrl = "https://" + des + '/' + username;
                //     if (routes) {
                //         redirectUrl += '/' + routes
                //     }
                //     window.location.href = redirectUrl
                // } 
                // else {
                // alert("hello!!")
                // window.location.href = "http://localhost:3001/userhome/" + username ;
                //  ;
                //window.location.href = (!data.is_username) ? "https://leader.codes/wizard" : "https://lobby.leader.codes/" + username
                // window.location.href=(!data.is_username) ? "http://localhost:3001/userhome/"+username : "http://localhost:3001/userhome/"+username;
                // }

                // let tempUserName = username.replace(' ', '%20')
                // if (window.location.href != 'http://localhost:3000/' + tempUserName) {
                //     window.location.href = '/' + username
                // }‏
                // let tempUserName = username.replace(' ', '%20')
                // if (window.location.href != 'http://localhost:3000/0') {
                //     window.location.href = 'http://localhost:3000/0' ;
                // }
            },
        });

    }
    return next(action);
}

//3
export const onAuthStateChanged = ({ dispatch, getState }) => next => action => {

    if (action.type === 'ON_AUTH_STATE_CHANGED') {
        auth.onAuthStateChanged(function (user) {
            console.log("onauthstatechanged work from middleware", user);
            if (user) {
                username = user.displayName ? user.displayName : getState().userReducer.user.username;
                console.log("user: ", username);
                console.log("auth.currentUser", auth.currentUser);
                auth.currentUser.getIdToken(true)
                    .then((firebaseToken) => {
                        console.log("ft", firebaseToken);
                        $.ajax({
                            url: "https://community.leader.codes/api/getAccessToken",
                            method: "post",
                            dataType: "json",
                            contentType: "application/json",
                            data: JSON.stringify({
                                action: "firebaseloginwithcredentials",
                                jwt: firebaseToken
                            }),
                            success: function (data) {
                                console.log("data", data);
                                dispatch(actions.checkPermission(data))
                                // checkPremission(data);
                            }
                        });
                    })
                    .catch(function (error) {
                        alert(error);
                    });
            }
        });
    }

    return next(action);
}
//4
export const getAllCategories = ({ dispatch, getState }) => next => action => {

    if (action.type === 'GET_ALL_CATEGORIES') {
        axios.get('https://community.leader.codes/api/categories')
            .then(res => {

                console.log("crddddddd", res.data);
                dispatch(actions.setCategories({ categories: res.data }))
            })
            .catch(err => console.log("errrrrrrr", err));
    }
    return next(action);
};

//5
export const getAllProducts = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_ALL_PRODUCTS') {
        axios.get('https://community.leader.codes/api/products')
            .then(res => {

                console.log("gjhjet ", res.data);
                dispatch({ type: "SET_PRODUCTS", payload: res.data })

                dispatch(actions.setProducts(res.data))
                dispatch(actions.setFilteredItems(res.data))
            })
    }
    return next(action);
}

//6
export const newStore = ({ dispatch, getState }) => next => action => {

    if (action.type === 'ADD_NEW_STORE') {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ "storeName": action.payload.storeName, "storeDescription": action.payload.storeDescription, "storeManager": action.payload.storeManager });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3000/register/addStore", requestOptions)
            .then(response => response.json())
            .then(result => { console.log(result); dispatch(actions.setStore(result)) })
            .catch(error => console.log('error', error));
    }

    return next(action);
};

//7
export const newProduct = ({ dispatch, getState }) => next => action => {
    return new Promise((resolve, reject) => {
    if (action.type === 'ADD_NEW_PRODUCTS') {
        var raw = JSON.stringify({"store":action.payload.store, "SKU": action.payload.sku, "category": action.payload.category, "price": action.payload.price, "name": action.payload.name, "description": action.payload.description, "amount": action.payload.amount });

        $.ajax({
            url: "https://community.leader.codes/api/products/newProduct",
            method: "post",
            dataType: "json",
            contentType: "application/json",
            data: raw,
            success: function (data) {
                console.log("data Category", data)
                debugger;
                dispatch(actions.addNewProduct(data));
                // dispatch({ type: "ADD_NEW_CATEGORY", payload: data })
                dispatch(actions.setFilteredItems(getState().productReducer.products));
                resolve(data)
            },
            error: function (err) {
                console.log(err)
                reject(err)
            }
        });
    }
    
    return next(action);
})};

//8
export const createNewCategory = ({ dispatch, getState }) => next => action => {
    return new Promise((resolve, reject) => {
    if (action.type === 'CREATE_NEW_CATEGORY') {
        var raw = JSON.stringify({"store":action.payload.store, "categoryName": action.payload.categoryName, "color": action.payload.color });

        $.ajax({
            url: "https://community.leader.codes/api/categories/newCategoty",
            method: "post",
            dataType: "json",
            contentType: "application/json",
            data: raw,
            success: function (data) {
                console.log("data Category", data)
                debugger;
                dispatch(actions.addNewCategory(data));
                // dispatch({ type: "ADD_NEW_CATEGORY", payload: data })

                resolve(data)
            },
            error: function (err) {
                console.log(err)
                reject(err)
            }
        });
    }
    return next(action);
})
};

//9
export const userIdByEmail = ({ dispatch, getState }) => next => action => {

    if (action.type === 'USER_ID_BY_EMAIL') {
        axios.get('http://localhost:3000/register/userByEmail' + action.payload)
            .then(res => { console.log("get ", res.data); dispatch(actions.getCommunity({ community: res.data })) });
    }

    return next(action);
};

//10
export const addNewImageToProduct = ({ dispatch, getState }) => next => action => {

    if (action.type === 'ADD_IMG_TO_PRODUCT') {
        ;
        dispatch(actions.setProductImage({ "p": action.payload.p, "i": action.payload.i }));
        dispatch(actions.setFilteredItems(getState().productReducer.products))

    }
    return next(action);
}


// export const addNewImageFromDb = ({ dispatch, getState }) => next => action => {
//     if (action.type === "ADD_NEW_IMAGE_FROM_DB") {
//         $.ajax({
//             //ניתוב לשרת שלכן  "url": 'path to your server' + user.uid,
//             url: 'https://community.leader.codes/api/uploadImage/' + 'simdsMrrcJdpQgta8kgXyQBdDFy2',
//             "method": "POST",
//             "processData": false,
//             "mimeType": "multipart/form-data",
//             "contentType": false,
//             "headers": {
//                 //בauthorization יש לשים jwt אחר!!!!!!!      
//                 "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJzaW1kc01ycmNKZHBRZ3RhOGtnWHlRQmRERnkyIiwiZW1haWwiOiJjdG9AbGVhZGVyLmNvZGVzIiwiaXAiOiI1LjEwMi4yNDYuMjAyIiwiaWF0IjoxNjA0NDgyOTc0fQ.Nn2IC7j_VCDOFIkbwzT3nao0l7OcqbNqDUKkcL0Aoik"

//             },
//             "data": action.payload.f,
//             "async": false,
//             success: function (data1) {
//                 console.log("success")
//                 dispatch(actions.addUrlFileToRecord(data1))
//             },
//             error: function (err) {
//                 console.log(err)
//             }
//         }
//         )
//     }
//     return next(action)
// }


//11
export const deleteProduct = ({ dispatch, getState }) => next => action => {
    if (action.type === 'DELETE_PRODUCT') {
        axios.post('https://community.leader.codes/api/products/deleteProduct/' + action.payload)
            .then(res => { console.log("get ", res.data); dispatch(actions.deleteOldProduct(action.payload)) 
            dispatch(actions.setFilteredItems(getState().productReducer.products));
        });
    }

    return next(action);
};

//12
export const deleteCategory = ({ dispatch, getState }) => next => action => {
    if (action.type === 'DELETE_CATEGORY') {
        axios.post('https://community.leader.codes/api/categories/deleteCategoty/' + action.payload)
            .then(res => {
                console.log("get ", res.data);
                dispatch(actions.deleteOldCategory(action.payload))
            });
    }

    return next(action);
};

//13
// לא גמור
export const editproduct = ({ dispatch, getState }) => next => action => {

    if (action.type === 'EDIT_PRODUCT') {
   
        var raw = JSON.stringify({ SKU: action.payload.sku, category: action.payload.category, price: action.payload.price, name: action.payload.name, description: action.payload.description, amount: action.payload.amount });

        $.ajax({
            url: `https://community.leader.codes/api/products/editProduct/${action.payload._id}`,
            method: "post",
            dataType: "json",
            contentType: "application/json",
            data: raw,
            success: function (data) {
                console.log(data);
                dispatch(actions.editOldProduct(data))
                dispatch(actions.setFilteredItems(getState().productReducer.products));

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(XMLHttpRequest, " ", textStatus, " ", errorThrown)

            }
        });
    };
    return next(action);
};

//14
export const editCategory = ({ dispatch, getState }) => next => action => {

    if (action.type === 'EDIT_CATEGORY') {
        ;

        // var myHeaders = new Headers();
        // myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({ categoryName: action.payload.categoryName, color: action.payload.color });
        // var requestOptions = {
        //     method: 'POST',
        //     headers: myHeaders,
        //     data: raw,
        //     redirect: 'follow'
        // };

        //     axios.post('https://community.leader.codes/api/categories/editCategoty/'+action.payload.id,requestOptions)
        //    .then(res=>{console.log("get ",res.data)});

        $.ajax({
            url: `https://community.leader.codes/api/categories/editCategoty/${action.payload.id}`,
            method: "post",
            dataType: "json",
            contentType: "application/json",
            data: raw,
            success: function (data) {
              
              console.log(data)
              dispatch(actions.editOldCategory(data))
            
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(XMLHttpRequest, " ", textStatus, " ", errorThrown)

            }
        });
    };
    return next(action);
};

//15
// sari experience
export const newOrder = ({ dispatch, getState }) => next => action => {
    if (action.type === 'NEW_ORDER') {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({ "trackingID":1,
        "user":action.payload.user ,"store":action.payload.store, "userAddress": action.payload.address, "date": action.payload.date, "status": action.payload.status, "products": action.payload.product,"totalPrice":action.payload.totalPrice});

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://community.leader.codes/api/orders/newOrder", requestOptions)
            .then(createOrder => {
                console.log("ok!", createOrder)
                //שיהיה אפשרות מהרדוסר
                //שליחה לרדוסר
                // dispatch(actions.newOrder(createOrder))
            })
            .catch(error => console.log('error', error));
    }

    return next(action);
};

//16
////יצירת חנות שרי
export const createNewStore = ({ dispatch, getState }) => next => action => {
    return new Promise((resolve, reject) => {
        //שם הפונקציה בקומפוננטה צריכה להיות כמו השם הזה רק עם אותיות גדולות מפרידות בין מילה למילה
        if (action.type === 'CREATE_NEW_STORE') {
            //בקומפוננטה צריך לשלוח לפונ' את האוביקט שעוטף את כל שדות החנות
            var raw = JSON.stringify({
                "storeName": action.payload.store.nameStore,
                "storeDescription": action.payload.store.descriptionStore,
                "logo": "logo",
                "address": action.payload.store.addressStore,
                "tel": action.payload.store.phoneStore,
                "email": action.payload.store.emailStore,
                "colorDominates": action.payload.store.colorStore,
                "storeManager": getState().userReducer.user._id,
                "currency": action.payload.store.currency,
                "policy": action.payload.store.policy
            });
            console.log("raww", raw)
            $.ajax({
                url: "https://community.leader.codes/api/stores/newStore",
                method: "post",
                dataType: "json",
                contentType: "application/json",
                data: raw,
                success: function (data) {
                    debugger
                    console.log("data store", data)
                    dispatch(actions.setStoreIdM(data._id))
                        .then(() => {
                            dispatch(actions.uploadImage({ "fileName": "storeLogo", "file": action.payload.file }))
                        });
                    resolve(data)
                },
                error: function (err/*XMLHttpRequest, textStatus, errorThrown*/) {
                    console.log(err/*XMLHttpRequest, " ", textStatus, " ", errorThrown*/)
                    reject(err)
                }
            });
        }
        return next(action);
    })
};

//17

export const uploadImage = ({ dispatch, getState }) => next => action => {
    if (action.type === "UPLOAD_IMAGE") {

        const myFile = new FormData();
        myFile.append("file"/*, action.value*/, action.payload.file);
        // console.log("file", myFile.file);
        console.log("uid", getState().userReducer.user.uid);
        $.ajax({
            "url": "https://community.leader.codes/api/uploadImage/" + getState().userReducer.user.uid,
            // קריאה לשרת שלכן,
            "method": "POST",
            "processData": false,
            "mimeType": "multipart/form-data",
            "contentType": false,
            "headers": {
                "Authorization": getState().userReducer.user.tokenFromCookies
            },
            "data": myFile,
            "async": false,
            success: function (data1) {
                console.log("success")
                console.log("data1", data1);
                dispatch(actions.setFile({
                    "fileName": action.payload.fileName,
                    "url": data1
                })
                );
                // switch (action.payload.fileName) {
                //     case "profilPicture":
                //         dispatch(actions.setProfilePicture(/*action.payload,*/ data1));
                //         break;
                //     case "storeLogo":
                //         dispatch(actions.setLogoStore(data1))
                //         break;
                // }
                //שמירה בuser שנמצא בreducer))
            },
            error: function (err) {
                console.log("err upload", err)
            }
        });

    }
    return next(action);
}
//18
export const getAllOrders = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_ALL_ORDERS') {

        axios.get('https://community.leader.codes/api/orders')
            .then(res => {
                console.log("gjhjet ", res.data);
                dispatch(actions.setAllOrders(res.data))
            })
            .catch(err => console.log("errrrrrrr", err));
    }
    return next(action);
}

//19
export const getStoreByUser = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_STORE_BY_USER') {
 
        axios.get('https://community.leader.codes/api//users/getAllStores/'+action.payload)
            .then(res => {
                console.log("gjhjet ", res.data);
                dispatch(actions.setStorePerUser(res.data))
            })      
        .catch(err => console.log("errrrrrrr", err));
    }
    return next(action);
}


export const setFile = ({ dispatch, getState }) => next => action => {

    if (action.type === 'SET_FILE') {
        debugger
        let url;
        let body;

        switch (action.payload.fileName) {
            case "profilPicture": {
                dispatch(actions.setProfilePicture(action.payload.url));
            } break;
            case "storeLogo": {
                debugger
                dispatch(actions.setLogoStore(action.payload.url));
                url = "https://community.leader.codes/api/stores/editStore/" + getState().openStoreReducer.storeId;
                body = { "logo": action.payload.url };

            } break;

            default:
                break;
        }
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(body);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(url, requestOptions)
            .then("image from the DB")
            .catch(error => console.log('error', error));
    }
    return next(action);
};

export const setStoreId = ({ dispatch, getState }) => next => action => {

    return new Promise((resolve, reject) => {
        if (action.type === 'SET_STORE_ID_M') {
            try {
                dispatch(actions.setStoreId(action.payload));
                resolve(actions.payload)
            }
            catch (err) {
                reject(err);
            }
        }
        return next(action)
    })
};

// export const uploadFile = ({ dispatch, getState }) => next => action => {
//     return new Promise((resolve, reject) => {
//         if (action.type === '[funnel] UPLOAD_FILE') {
//             const fil = action.payload
//             console.log(fil); 
//             const myFile = new FormData()
//             myFile.append("file", action.payload)
//             $.ajax({
//                 url: `https://funnel.dev.leader.codes/api/uploadFile/${getState().user.userId}/${getState().user.userName}`,
//                 type: 'POST',
//                 data: myFile,
//                 contentType: false,
//                 processData: false,
//                 headers: { Authorization: 'view' },
//                 success: function (data) {
//                     console.log(data);
//                     dispatch({ type: '[funnel] SET_IMAGE_FILE', payload: data })
//                     resolve(data)
//                 },
//                 error: function (err) {
//                     console.log(err);
//                     reject(err)
//                 }
//             })
//         }
//         return next(action)
//     })
// }
