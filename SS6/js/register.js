const registerForm = document.getElementById("register-form");


registerForm.addEventListener("submit", (event) => {
  event.preventDefault(); // ngan su kien reload mac dinh cua trinh duyet
  const dataRegister = {
    firstName: registerForm.firstName.value,
    lastName: registerForm.lastName.value,
    email: registerForm.email.value,
    password: registerForm.password.value,
    confirmPassword: registerForm.confirmPassword.value
  }

  // Hàm check lỗi người dùng nhập dữ liệu
  controller.register(dataRegister);
  console.log(dataRegister);

})