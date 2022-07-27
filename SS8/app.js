const firebaseApp = firebase.initializeApp({
  /* Firebase config */
  apiKey: "AIzaSyBz9O4qIwn4LwMfidxc98kjp-ktWI2HbLw",
  authDomain: "nps-jsi05.firebaseapp.com",
  projectId: "nps-jsi05",
  storageBucket: "nps-jsi05.appspot.com",
  messagingSenderId: "882452076119",
  appId: "1:882452076119:web:75e0286445fd17a5067512"
});
const database = firebaseApp.firestore();
const auth = firebaseApp.auth();


/// Thực hành: 
const userId = document.getElementById('userId');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const age = document.getElementById('age');
const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn');
const readBtn = document.getElementById('readBtn');
const removeBtn = document.getElementById('removeBtn');


/// khai báo 1 mảng listId: Dùng để chứa toàn bộ id cần lưu
let listId = [];

//// Add data;
const usersCollection = database.collection('users');

addBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const ID = usersCollection.doc(); // tạo 1 random id
  console.log("ID: ", ID);

  listId.push({
    username: userId.value,
    id: ID.id
  })

  ID.set({
    first_name: firstName.value,
    last_name: lastName.value,
    age: Number(age.value)
  })

})


/// Update
updateBtn.addEventListener('click', (event) => {
  event.preventDefault();


  if (listId.find(item => item.username == userId.value)) {
    let id = listId.find(item => item.username == userId.value).id
    console.log("id: ", id);
    usersCollection.doc(id).update({
      first_name: firstName.value,
      last_name: lastName.value,
      age: Number(age.value)
    })
  }
})