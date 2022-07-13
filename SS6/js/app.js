
const init = () => {

  console.log("Windows loaded");

  // Khai báo firebase
  // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCpCwsxPiTIMVuPOU_vF6Y5L48lnTylm2w",
    authDomain: "test-authentication-2d7a5.firebaseapp.com",
    projectId: "test-authentication-2d7a5",
    storageBucket: "test-authentication-2d7a5.appspot.com",
    messagingSenderId: "202356646887",
    appId: "1:202356646887:web:4e13d65e421dcf8e849342"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  // const app = initializeApp(firebaseConfig);
  console.log(firebase.app().name); //DEFAULT

}


window.onload = init;

