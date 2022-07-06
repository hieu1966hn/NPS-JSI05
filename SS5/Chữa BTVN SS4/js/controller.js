const controller = {}

controller.register = (dataRegister) => {
  if (dataRegister.firstName.trim() == "") {
    alert("Please input your first name")
  }
}