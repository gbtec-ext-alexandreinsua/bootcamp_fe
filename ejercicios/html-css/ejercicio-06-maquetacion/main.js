const $entrar = document.getElementById("entrar");
const $username = document.getElementById("username");
const $password = document.getElementById("password");
let formData;

$entrar.addEventListener("click", function () {
  console.log("ButtonPress")
  const $nullPassword = document.getElementById("null-password");
  const $badPassword = document.getElementById("bad-password");
  if (!$username) {
    $nullPassword.style.display = "flex";
  } else {
    $badPassword.style.display = "flex";
  }
});