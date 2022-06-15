let obj1 = {
  name: "John",
  age: 24,
  address: "22 Jump Street"
}

let obj2 = {
  name: "Hiếu",
  age: 25,
  hobbies: "Sleeping, coding"
}



/// Đề bài: Sao chép toàn bộ thuộc tính và giá trị của đối tượng 1 và 2 vào 1 biến mới có tên là obj3
let obj3 = Object.assign(obj1, obj2);
console.log("obj3: ", obj3);

