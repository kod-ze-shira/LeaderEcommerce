import firebase from 'firebase';

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBBgnUGvV6Hqx0yHqOH1czRhHV6zV90WYk",
    authDomain: "products-3a844.firebaseapp.com",
    databaseURL: "https://products-3a844.firebaseio.com",
    projectId: "products-3a844",
    storageBucket: "products-3a844.appspot.com",
    messagingSenderId: "876145663014",
    appId: "1:876145663014:web:34be495c4f8da3bb625ae7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;
//================
// const f= document.getElementById('signup');
// f.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     const email=document.querySelector('input[name=email]').value;
//     const password=document.querySelector('input[name=password]').value;

//     firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then(data=> console.log(data))
//     .catch(function(error) {
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         console.log(eeeeeeeeeeeeerrrrrrrrrrrrrrrr)
//       });
// })
// //===================
// const f_signout= document.getElementById('signout');
// f_signout.addEventListener("click",(e)=>{
//     firebase.auth().signOut().then(function(){
// console.log("out")

//     }).catch(function(error){
//         console.log(error);
//     });
// })
// //===============



// // firebase.auth().onAuthStateChanged(function(user) {
// //     if (user) {
// //         const name = user.displayName;
// //         const id   = user.uid;
// //         alert(`Welcome! ${name}. Your id is ${id}`);
// //     } else {
// //         // user not signed in, do nothing
// //     }
// // });
