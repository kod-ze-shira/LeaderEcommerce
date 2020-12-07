// // Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyBBgnUGvV6Hqx0yHqOH1czRhHV6zV90WYk",
//     authDomain: "products-3a844.firebaseapp.com",
//     databaseURL: "https://products-3a844.firebaseio.com",
//     projectId: "products-3a844",
//     storageBucket: "products-3a844.appspot.com",
//     messagingSenderId: "876145663014",
//     appId: "1:876145663014:web:34be495c4f8da3bb625ae7"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);


// //===========הרשמות=====
// // const f= document.getElementById('signup');
// // f.addEventListener("submit",
// function Sup(e) {
//      const email = document.querySelector('input[name=email]').value;
//     const password = document.querySelector('input[name=password]').value;

//     firebase.auth().createUserWithEmailAndPassword(email, password)
//         .then(data => console.log(data))
//         .catch(function (error) {
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             console.log(eeeeeeeeeeeeerrrrrrrrrrrrrrrr)
//         });
// }
// //===========התנתקות========
// // const f_signout= document.getElementById('signout');
// // f_signout.addEventListener("click",
// function out(e) {
//     firebase.auth().signOut().then(function () {
//         console.log("out")

//     }).catch(function (error) {
//         console.log(error);
//     });
// }
// // )
// //========התחברות======

// // const b= document.getElementById('signin');
// // b.addEventListener("click",
// function inn(e) {
//     const email = document.querySelector('input[name=emailSI]').value;
//     const password = document.querySelector('input[name=passwordSI]').value;
//     firebase.auth().signInWithEmailAndPassword(email, password)
//         .then(data => console.log(data, "connect"))
//         .catch(function (error) {
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             console.log(eeeeeeeeeeeeerrrrrrrrrrrrrrrr)
//         });
// }



