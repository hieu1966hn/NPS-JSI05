
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




//// Thực hành 
const userId = document.getElementById('userId');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const age = document.getElementById('age');
const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn');
const readBtn = document.getElementById('readBtn');
const removeBtn = document.getElementById('removeBtn');


/// khai báo mảng chứa các id tương ứng
let listId = [];

/// Save data
const usersCollection = database.collection('users');


addBtn.addEventListener('click', e => {
  e.preventDefault();
  const ID = usersCollection.doc();
  listId.push({
    username: userId.value,
    id: ID.id,
  });

  console.log(ID.id);
  ID.set({
    first_name: firstName.value,
    last_name: lastName.value,
    age: Number(age.value)
  });
});



//// update data
updateBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const ID = usersCollection.doc();
  console.log(userId.value);
  console.log(listId.find(item => item.username == userId.value));
  if (listId.find(item => item.username == userId.value)) {
    let id = listId.find(item => item.username == userId.value).id
    console.log(id);
    usersCollection.doc(id).update({
      first_name: firstName.value,
      last_name: lastName.value,
      age: Number(age.value)
    });
  }
});

/// update đối tượng hơi chút khó khăn  (nên sử dụng cú pháp: đối tượng.khóa: giá trị)
// updateBtn.addEventListener('click', e => {
//   e.preventDefault();
//   usersCollection.doc(userId.value).update({
//     'favorite.food': 'Pizza'
//   });
// });


///// update Arrays
