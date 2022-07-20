const signOut = document.getElementById("sign-out")


signOut.addEventListener("click", () => {

  /// Đăng xuất khỏi firebase
  firebase.auth().signOut()
})