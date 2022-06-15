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

// let VT = {
//   name: "Nguyễn Vũ Tiến",
//   age: 14,
//   hobbies: "Playing game, sleeping",
//   TienID: "001"
// }

// let TH = {
//   name: "Nguyễn Trung Hiếu",
//   age: 17,
//   hobbies: "Nội trợ",
//   HieuID: "002"
// }

// let GN = {
//   name: "Lương Gia Nam",
//   age: 17,
//   hobbies: "Playing game, cooking",
//   NamID: "003"
// }


// let NPS_JSI05 = Object.assign(VT, TH, GN);
// console.log("NPS_JSI05: ", NPS_JSI05);



// --------- Spread Syntax--------------//
// Sử dụng trong function call

// VD
// let sum = (x, y, z) => {
//   console.log(x, y, z);
//   return x + y + z;
// }

// let number = [1, 4, 7, 8]; // Tổng 4 phần tử = 20, Tổng 3 phần tử = 12

// console.log(
//   sum(...number)
// );

// Kết quả đạt được? 12
/*
NX: sum(...number): Tách từng phần tử của mảng và gán vào tham số tương ứng: x,y,z
*/


///// Copy object
// let VT = {
//   name: "Nguyễn Vũ Tiến",
//   age: 14,
//   hobbies: "Playing game, sleeping",
//   TienID: "001"
// }

// let copy_Object = { ...VT }
// console.log("copy_Object: ", copy_Object);


///// Copy Array (sao chép mảng)
// let number = [1, 4, 7, 8];
// let copy_Array = [...number]
// console.log("copy_Array: ", copy_Array);

// // Copy Array nomal
// let copyArray_Original = number // Tuyệt đối ko sử dụng cú pháp này
// console.log("copyArray_Original: ", copyArray_Original);
/*
Khi copy mảng với dấu bằng: Thì 2 biến mảng này cùng dùng chung ô nhớ trên hệ thống
=> khi phần tử 1 mảng này thay đổi thì mảng còn lại thay đổi tương tự
*/





// ---------------------------- Nối Array ---------------------------
let arr1 = ["abc", 34, "Gaming"];
let number = [1, 4, 7];

// Nối 2 mảng trên vào mảng thứ 3 có tên gọi là: connector
let connector = [...arr1, ...number];
console.log("connector: ", connector);

