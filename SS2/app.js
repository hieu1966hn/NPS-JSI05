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
// let arr1 = ["abc", 34, "Gaming"];
// let number = [1, 4, 7];

// // Nối 2 mảng trên vào mảng thứ 3 có tên gọi là: connector
// let connector = [...arr1, ...number];
// console.log("connector: ", connector);


// --------------- Convert String -> Array
// let str = "Hello, my name is Hieu";
// // Convert String => Array
// let chars = [...str]
// console.log("chars: ", chars);




// ------------------- Map, Filter ------------------------
/// VD về map

// let arr = [1, 2, 3, 4, 5, 6, 7, 10];

//Yêu cầu: Tăng từng phần tử mảng lên gấp 2 lần: 2,4,6,8,10, ... 20
// C1: Dùng for thường, for in

// for (let key in arr) {
//   arr[key] = arr[key] * 2
// }
// console.log(arr);

// C2: Sử dụng map: Tạo ra mảng mới dựa trên thay đổi từ mảng cũ => Kiểu dữ liệu từng phần tử là tương ứng nhau
// let arrMap = arr.map((item) => {
//   return item * 2
// })
// console.log("arrMap: ", arrMap);






// ------------------------ Filter -------------------------
// VD về filter: Trả về 1 mảng mới sao cho các phần tử trong mảng arr phải lớn hơn 4
// let arr = [1, 2, 3, 4, 5, 6, 7, 10];

// let arrLonHonBon = arr.filter((item) => {
//   return item > 4
// })
// console.log("arrLonHonBon: ", arrLonHonBon);


///// Vd về filter và map như sau:

const animals = [
  {
    kind: "cat",
    size: "small",
    weight: 5
  },
  {
    kind: "dog",
    size: "small",
    weight: 7
  },
  {
    kind: "elephant",
    size: "big",
    weight: 5000
  }
]

/// Bài toán: In ra "kind" từng con vật trong mảng animals
// C1: for of
// for (let key of animals) {
//   console.log(key.kind);
// }


// C2: với Map
// let animalsKind = animals.map((item) => {
//   return item.kind
// })
// console.log("animalsKind: ", animalsKind);


/// Bài toán 2: Lấy ra con vật nào có cân nặng "weight" < 1000
// let animalWeightMinium = animals.filter((item) => {
//   return item.weight < 1000
// })
// console.log("animalWeightMinium: ", animalWeightMinium);


/// Bài toán 3: Lọc ra con vật nào có size: "small"
let animalSizeMinium = animals.filter((item) => {
  return item.size === 'small';
})
console.log("animalSizeMinium: ", animalSizeMinium);

