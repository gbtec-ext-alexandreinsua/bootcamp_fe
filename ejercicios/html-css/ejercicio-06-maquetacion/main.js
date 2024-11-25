const $entrar = document.getElementById("entrar");
const $username = document.getElementById("username");
const $password = document.getElementById("password");
let formData;

document.getElementsByClassName("null-password").style.display = "flex";

$entrar.addEventListener("click", function () {
  console.log("ButtonPress")
  const $nullPassword = document.getElementsByClassName("null-password");
  const $badPassword = document.getElementsByClassName("bad-password");
  if (!$username) {
    $nullPassword.style.display = "flex";
  } else {
    $badPassword.style.display = "flex";
  }
});