const loginForm = document.getElementById("login-form");
const redirectToRegister = document.getElementById("redirect-to-register")

redirectToRegister.addEventListener("click", () => {
  window.location.href = "register.html"
})





loginForm.addEventListener("submit", (event) => {
  // ngăn sự kiện reload mặc định của trình duyệt
  event.preventDefault();
  const dataLogin = {
    email: loginForm.email.value,
    password: loginForm.password.value
  }

  console.log(dataLogin);

  /// khai báo hàm đăng nhập? (liên quan tới kết nối dữ liệu bên ngoài )
  const login = async (data) => {
    try {
      const response = await firebase.auth().signInWithEmailAndPassword(data.email, data.password)
      console.log(response);

      ///// đi vào trang chủ
      window.location.href = 'index.html'
    }
    catch (err) {
      // alert("Err")
      console.log(err);
    }
  }


  ///// Chạy hàm đăng nhập
  login(dataLogin)
})