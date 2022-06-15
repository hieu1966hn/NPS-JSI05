// let obj1 = {
//   name: "John",
//   age: 24,
//   address: "22 Jump Street"
// }

// let obj2 = {
//   name: "Hiếu",
//   age: 25,
//   hobbies: "Sleeping, coding"
// }



// /// Đề bài: Sao chép toàn bộ thuộc tính và giá trị của đối tượng 1 và 2 vào 1 biến mới có tên là obj3
// let obj3 = Object.assign(obj1, obj2);
// console.log("obj3: ", obj3);


//=>> Object có tất cả các thuộc tính từ các đối tượng khác


// VD mới về Object.assign

let VT = {
  name: "Nguyễn Vũ Tiến",
  age: 14,
  hobbies: "Playing game, sleeping",
  TienID: "001"
}

let TH = {
  name: "Nguyễn Trung Hiếu",
  age: 17,
  hobbies: "Nội trợ",
  HieuID: "002"
}

let GN = {
  name: "Lương Gia Nam",
  age: 17,
  hobbies: "Playing game, cooking",
  NamID: "003"
}


let NPS_JSI05 = Object.assign(VT, TH, GN);
console.log("NPS_JSI05: ", NPS_JSI05);

