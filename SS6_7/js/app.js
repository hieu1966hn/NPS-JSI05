const init = () => {

  console.log("Windows loaded");

  // Khai báo firebase

  // Your web app's Firebase configuration
  // const firebaseConfig = {
  //   apiKey: "AIzaSyCpCwsxPiTIMVuPOU_vF6Y5L48lnTylm2w",
  //   authDomain: "test-authentication-2d7a5.firebaseapp.com",
  //   projectId: "test-authentication-2d7a5",
  //   storageBucket: "test-authentication-2d7a5.appspot.com",
  //   messagingSenderId: "202356646887",
  //   appId: "1:202356646887:web:4e13d65e421dcf8e849342"
  // };
  const firebaseConfig = {
    apiKey: "AIzaSyBz9O4qIwn4LwMfidxc98kjp-ktWI2HbLw",
    authDomain: "nps-jsi05.firebaseapp.com",
    projectId: "nps-jsi05",
    storageBucket: "nps-jsi05.appspot.com",
    messagingSenderId: "882452076119",
    appId: "1:882452076119:web:75e0286445fd17a5067512"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  // const app = initializeApp(firebaseConfig);
  console.log(firebase.app().name); //DEFAULT

  //// Kiểm tra trạng thái đăng nhập của người dùng 
  // firebase.auth().onAuthStateChanged(function (user) {
  //   console.log(user);
  //   if (user && user.emailVerified) {

  //     window.location.href = "index.html"
  //   }
  //   else {
  //     window.location.href = "login.html"
  //   }
  // });


}


window.onload = init;




