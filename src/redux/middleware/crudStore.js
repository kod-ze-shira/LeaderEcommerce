import { actions } from '../action';
import axios from 'axios';
import $ from 'jquery';
//6
// export const newStore = ({ dispatch, getState }) => next => action => {

//     if (action.type === 'ADD_NEW_STORE') {
//         var myHeaders = new Headers();
//         myHeaders.append("Content-Type", "application/json");

//         var raw = JSON.stringify({ "storeName": action.payload.storeName, "storeDescription": action.payload.storeDescription, "storeManager": action.payload.storeManager });

//         var requestOptions = {
//             method: 'POST',
//             headers: myHeaders,
//             body: raw,
//             redirect: 'follow'
//         };

//         fetch("http://localhost:3000/register/addStore", requestOptions)
//             .then(response => response.json())
//             .then(result => { dispatch(actions.setStore(result)) })
//             .catch(error => console.log('error', error));
//     }

//     return next(action);
// };


export const createNewStore = ({ dispatch, getState }) => next => action => {

    return new Promise((resolve, reject) => {
        if (action.type === 'CREATE_NEW_STORE') {
            var raw = JSON.stringify({
                "storeName": action.payload.store.storeName,
                "urlRoute": action.payload.store.urlRoute,
                "storeDescription": action.payload.store.storeDescription,
                "logo": action.payload.store.logo,
                "address": action.payload.store.address,
                "tel": action.payload.store.tel,
                "email": action.payload.store.email,
                "colorDominates": action.payload.store.colorDominates,
                "storeManager": getState().userReducer.user._id,
                "currency": action.payload.store.currency,
                "policy": action.payload.store.policy,
                "checkInventoryManagement": action.payload.store.checkInventoryManagement,
                "checkoneProductPurchase": action.payload.store.checkoneProductPurchase

            });



            $.ajax({
                url: "https://bullcommerce.shop/api/stores/newStore",
                method: "post",
                dataType: "json",
                contentType: "application/json",
                data: raw,
                success: function (data) {
                    dispatch(actions.setSaveAllStoreDetails(data));
                    dispatch(actions.getOrdersByStore(data._id));
                    dispatch(actions.getCategoriesByStore(data._id));
                    dispatch(actions.getAllPaper(data._id));
                    dispatch(actions.getAllAttributes(data._id));

                    dispatch(actions.newBullcommerceHeaderDesign({
                        store: data._id,
                        sliderImages: [],
                        stepperColor: "",
                        sliderArrowsColor: "",
                        sliderArrowsBackgroundcolor: "",
                        textContent: data.storeName
                    }))

                    resolve(data)

                },


                error: function (err) {
                    reject(err)
                }
            })
        }
        return next(action);
    })
};



//19
export const getStoreByUser = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_STORE_BY_USER') {

        axios.get('https://bullcommerce.shop/api/users/getAllStores/' + action.payload)
            .then(res => {
                dispatch(actions.setStorePerUser(res.data))
            })
            .catch(err => console.log("errrrrrrr", err));
    }
    return next(action);
}
export const deleteStore = ({ dispatch, getState }) => next => action => {
    if (action.type === 'DELETE_STORE') {
        axios.post('https://bullcommerce.shop/api/stores/deleteStore/' + action.payload)
            .then(res => {
                dispatch(actions.deleteOldStore(action.payload))
            });
    }


    return next(action);
};

