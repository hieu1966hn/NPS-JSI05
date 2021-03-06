
const controller = {}

controller.register = (dataRegister) => {
  if (dataRegister.firstName.trim() == "") {
    document.getElementById("first-name-error").innerText = "*Please input your first name"
  }
  else {
    document.getElementById("first-name-error").innerText = ""
  }

  if (dataRegister.lastName.trim() == "") {
    document.getElementById("last-name-error").innerText = "*Please input your last name"
  }
  else {
    document.getElementById("last-name-error").innerText = ""
  }

  if (dataRegister.email.trim() == "") {
    document.getElementById("email-error").innerText = "*Please input your email"
  }
  else {
    document.getElementById("email-error").innerText = ""
  }

  if (dataRegister.password.trim() == "") {
    document.getElementById("password-error").innerText = "*Please input your password"
  }
  else {
    document.getElementById("password-error").innerText = ""
  }


  if (dataRegister.confirmPassword.trim() == "") {
    document.getElementById("confirm-password-error").innerText = "*Please input your confirm password"
  }
  else {
    document.getElementById("confirm-password-error").innerText = ""
  }


  // gọi hàm đăng ký
  registerAuth(dataRegister)

}


controller.login = (dataLogin) => {

}


const registerAuth = async (data) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
    firebase.auth().currentUser.sendEmailVerification();
    alert("The Email has been Registed, please check your email");


  }
  catch (err) {
    console.log(err);
    alert(err.message)
  }
}
