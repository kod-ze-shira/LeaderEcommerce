import { actions } from '../action';
import axios from 'axios';
import $ from 'jquery';
import { auth } from '../../services/firebase';
import { act } from 'react-dom/test-utils';

let username = "";

export const getAllCommunitiesFromDb = ({ dispatch, getState }) => next => action => {

    if (action.type === 'GET_ALL_COMMUNITIES_FROM_DB') {

        axios.get('http://localhost:3000/communities/')
            .then(res => {
                console.log("crddddddd", res.data);
                dispatch(actions.getAllCommunities(res.data))
            })
            .catch(err => console.log("errrrrrrr", err));
    }
    // remeber!!!!!!!!!!!
    return next(action);
};

export const getCommunityById = ({ dispatch, getState }) => next => action => {
    
    if (action.type === 'GET_COMMUNITY_BY_ID') {
         axios.get('http://localhost:3000/communities/'+action.payload)
        .then(res=>{console.log("get ",res.data);dispatch(actions.getCommunity({community:res.data})) });
    }

    return next(action);
};


export const checkPermission = ({dispatch,getState}) => next => action => {

    if(action.type === 'CHECK_PERMISSION' ){

        // console.log("user2: ",username);
        let TokenToString = action.payload.accessToken.toString();
        let dataToProfilePage = {
            action: "loginCheckPermission",
            token: TokenToString,
        };
        $.ajax({
            url: "https://community.leader.codes/api/checkPremission/"+username,
            headers: {
                Authorization: TokenToString
            },
            method: "post",
            dataType: "json",
            contentType: "application/json",
            withCradentials: true,
            data: JSON.stringify(dataToProfilePage),
            success: function (data) {
                console.log("dataaaaaa",data)
                let jsonWebToken = data.jwt;
                let uid = data.uid;
                let noQuotesJwtData = jsonWebToken.split('"').join("");
                let now = new Date();
                now.setMonth( now.getMonth() + 1 );
                document.cookie = "jwt=" + noQuotesJwtData + ";domain=.leader.codes" + "; path=/; Expires="+now.toUTCString()+";"
                // const queryString = window.location.search;
            
                // const urlParams = new URLSearchParams(queryString);
                // const des = urlParams.get('des')
                // const routes = urlParams.get('routes')
                const username=data.username
                dispatch(actions.setUser({"_id":data._id,"username":data.username,"email":data.email}))
                console.log("uuu",username)
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
                    // debugger;
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

export const onAuthStateChanged = ({dispatch,getState}) => next => action => {

    if(action.type === 'ON_AUTH_STATE_CHANGED'){
        auth.onAuthStateChanged(function (user) {
            console.log("onauthstatechanged work from middleware",user);
                if (user) {
                    username = user.displayName?user.displayName:getState().userReducer.user.username;
                    console.log("user: ",username);
                    console.log("auth.currentUser",auth.currentUser);
                    auth
                    .currentUser.getIdToken(true)
                    .then((firebaseToken) => {
                        console.log("ft",firebaseToken);
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
                                console.log("data",data);
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
export const getAllCategories = ({ dispatch, getState }) => next => action => {
 
    if (action.type === 'GET_ALL_CATEGORIES') {
debugger;
        axios.get('https://community.leader.codes/api/categories')
            .then(res => {
                console.log("crddddddd", res.data);
                dispatch(actions.setCategories({categories:res.data}))
            })
            .catch(err => console.log("errrrrrrr", err));
    }
    return next(action);
};
export const getAllProducts = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_ALL_PRODUCTS') { 
        axios.get('https://community.leader.codes/api/products')
       
        .then(res => {
            console.log("gjhjet ",res.data);
            dispatch(actions.setProducts(res.data)) 
        }).catch(e=>console.log(e))
    }

    return next(action);
};

export const newStore = ({ dispatch, getState }) => next => action => {
    
    if (action.type === 'ADD_NEW_STORE') {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"storeName":action.payload.storeName,"storeDescription":action.payload.storeDescription,"storeManager":action.payload.storeManager});

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3000/register/addStore", requestOptions)
        .then(response => response.json())
        .then(result => {console.log(result); dispatch(actions.setStore(result))})
        .catch(error => console.log('error', error));
    }

    return next(action);
};

export const newProduct= ({ dispatch, getState }) => next => action => {
    
    if (action.type === 'ADD_NEW_PRODUCTS') {
        debugger;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"SKU":action.payload.SKU,"category":action.payload.category,"price":action.payload.price,"name":action.payload.name,"description":action.payload.description,"amount":action.payload.amount});

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://community.leader.codes/api/products/newProduct", requestOptions)
        .then()
        .catch(error => console.log('error', error));
    }

    return next(action);
};
export const createNewCategory= ({ dispatch, getState }) => next => action => {
    
    if (action.type === 'CREATE_NEW_CATEGORY') {
        debugger;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"categoryName":action.payload.categoryName,"color":action.payload.color});

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://community.leader.codes/api/categories/newCategoty", requestOptions)
        .then(response => response.json())
        //.then(result => {console.log(result); dispatch(actions.setStore(result))})
        .catch(error => console.log('error', error));
    }

    return next(action);
};

export const userIdByEmail = ({ dispatch, getState }) => next => action => {
    
    if (action.type === 'USER_ID_BY_EMAIL') {
         axios.get('http://localhost:3000/register/userByEmail'+action.payload)
        .then(res=>{console.log("get ",res.data);dispatch(actions.getCommunity({community:res.data})) });
    }

    return next(action);
};

export const addNewImageFromDb = ({ dispatch, getState }) => next => action => {
    if (action.type === "ADD_NEW_IMAGE_FROM_DB") {
        $.ajax({
            //ניתוב לשרת שלכן  "url": 'path to your server' + user.uid,
            url: 'https://community.leader.codes/api/uploadImage/' + 'simdsMrrcJdpQgta8kgXyQBdDFy2',
            "method": "POST",
            "processData": false,
            "mimeType": "multipart/form-data",
            "contentType": false,
            "headers": {
                //בauthorization יש לשים jwt אחר!!!!!!!      
                "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJzaW1kc01ycmNKZHBRZ3RhOGtnWHlRQmRERnkyIiwiZW1haWwiOiJjdG9AbGVhZGVyLmNvZGVzIiwiaXAiOiI1LjEwMi4yNDYuMjAyIiwiaWF0IjoxNjA0NDgyOTc0fQ.Nn2IC7j_VCDOFIkbwzT3nao0l7OcqbNqDUKkcL0Aoik"

            },
            "data": action.payload.f,
            "async": false,
            success: function (data1) {
                console.log("success")
                dispatch(actions.addUrlFileToRecord(data1))
            },
            error: function (err) {
                console.log(err)
            }
        }
        )
    }
    return next(action)
}

export const deleteProduct = ({ dispatch, getState }) => next => action => {
     if (action.type === 'DELETE_PRODUCT') {
         axios.post('https://community.leader.codes/api/categories/deleteCategoty/'+action.payload)
        .then(res=>{console.log("get ",res.data);dispatch(actions.getCommunity({community:res.data})) });
    }

    return next(action);
};



