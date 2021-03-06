const form = document.getElementById("form");
const input = document.getElementById("input");
const button = document.getElementById("button");
const todo = document.getElementById("todo");

let todoList = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();// dùng dể ngăn sự kiện reload mặc định của trình duyệt
  addTodo(); // Hàm thêm nội dung sẽ làm
})

const addTodo = () => {
  const newTodo = input.value;
  if (!newTodo) return console.log("No value! ❌") || alert("No value! ❌")

  todoList.push({
    text: newTodo,
    completed: false
  })
  localStorage.setItem("todos", JSON.stringify(todoList))
  render();
}

const render = () => {
  todo.innerHTML = null // null: là giá trị 
  todoList = JSON.parse(localStorage.getItem("todos")) || []; // Lấy dữ liệu được lưu trên localStorage dưới dạng mảng
  console.log(todoList)

  // duyệt mảng
  for (let i = 0; i < todoList.length; i++) {

    // 
    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    todo.appendChild(li)
    li.innerHTML = `${todoList[i].text}`
    li.appendChild(checkbox)


    checkbox.addEventListener("click", (event) => {
      todoList[i].completed = event.target.checked // trả về kết quả là true

      if (todoList[i].completed) {
        li.classList.add("completed");
        li.classList.remove("uncompleted");
        checkbox.checked = todoList[i].completed
      } else {
        li.classList.add("uncompleted");
        li.classList.remove("completed");
        checkbox.checked = todoList[i].completed;
      }
    })


  }

}