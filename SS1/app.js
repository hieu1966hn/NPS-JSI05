/*
LocalStorage là gì?
- Nơi chứa dữ liệu tạm thời trên trang web
- Lưu ý:
    + Dữ liệu này sẽ mất đi khi chúng ta xóa bộ nhớ đệm
    + Chỉ dùng trong chế độ test mode
    + LocalStorage chỉ lưu trữ các chuỗi thôi
- Khi nào dùng localStorage:
  + Khi cần lưu trữ dữ liệu không quan trọng (không nhạy cảm)
  + Giúp lưu trữ dl tạm thời trước khi nó được đẩy lên máy chủ (sau đó xóa sạch localStorage)

- Hạn chế:
  + Chỉ chứa dạng chuỗi
  + Dữ liệu không an toàn
  + Dung lượng lưu trữ hạn chế (5MB)
*/


/////// Các phương thức chính trong LocalStorage: key(), setItem(), removeItem(), getItem()


// Key(): Dùng để lấy một giá trị/chuỗi từ một vị trí cụ thể. Chỉ mục có thể được truyền vào phương thức key() như một tham số

//VD: 
// localStorage.setItem("key", "hello");

// let test = localStorage.key(1);
// console.log("test: ", test);


/////// setItem(): phương thưc này dùng để lưu trữ các phần tử trong LS
// localStorage.setItem("str", "ABCDXYZ")


// // lấy ra dư liệu từ LocalStorage
// const getStr = localStorage.getItem("str")
// console.log("getStr: ", getStr);


//// lưu trữ đối tượng trên LocalStorage thì sao:
// const Car = {
//   brand: "Suzuki",
//   color: "white",
//   price: 10000
// }

// localStorage.setItem("car", JSON.stringify(Car));
// let car = JSON.parse(localStorage.getItem("car"))// khi lấy bình thường string, => quy đổi về KDL ban đầu
// console.log("car: ", car);


/*
Đề bài luyện tập: Code một trang Todolist với các tính năng như sau:
- Thêm mới 1 task
- Đánh dấu 1 task đã hoàn thành
- Xóa một task 
*/



// code tinh nang
const form = document.getElementById("form");
const input = document.getElementById("input");
const button = document.getElementById("button");
const todo = document.getElementById("todo")

let todoList = [];
form.addEventListener("submit", (event) => {
  event.preventDefault(); /// Sự kiện này dùng để làm gì? Dùng để ngăn sự kiện load mặc định của trình duyệt

  // Thêm một task
  addTodo();
})

function addTodo() {
  // lay gia tri the input

  const newTodo = input.value;


  // kiem tra tra ve ket qua neu khong co gi nhap vao
  if (!newTodo) return;

  //them 1 task vao todolist
  todoList.push({
    text: newTodo,
    completed: false
  })

  console.log(todoList);

  // them todolist vao localStorage
  localStorage.setItem("todos", JSON.stringify(todoList))

  render(); // dung để hiển thị kết quả ra màn hình
}

function render() {
  // clear the list
  todo.innerHTML = null;


  // lay du lieu todolist tu localStorage
  const todos = localStorage.getItem("todos"); // string

  todoList = JSON.parse(todos) || [];
  console.log("todoList: ", todoList);

  for (let i = 0; i < todoList.length; i++) {
    const item = document.createElement("li");

    // tao checkbox de update gia tri thay doi
    const checkbox = document.createElement("input");

    checkbox.type = 'checkbox';

    checkbox.addEventListener("click", (event) => {
      todoList[i].completed = e.target.checked;
      localStorage.setItem("todos", JSON.stringify(todoList))

      // kiem tra neu todo item da hoan thien thi them 1 class moi
      if (todoList[i].completed) {
        item.classList.add("completed");
        item.classList.remove("uncompleted");
        checkbox.checked = todoList[i].completed
      }
      else {
        item.classList.add("uncompleted");
        item.classList.remove("completed");
        checkbox.checked = todoList[i].completed
      }
    })
  }

}
