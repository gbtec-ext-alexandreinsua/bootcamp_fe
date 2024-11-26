
let $warning = document.getElementById("warning-message");

const $boton = document.querySelector(".button");
$boton.addEventListener('click', function(){
$warning.textContent = " ";
const $nombre = document.getElementById("username").value.trim();
const $pass = document.getElementById("password").value.trim();
    if(!$pass && !$nombre){
    $warning.textContent = "Usuario o contraseña incorrectos";
    $warning.style.display = flex;
    }
    if(!$pass){
       $warning.textContent = "Contraseña en blanco";
       $warning.style.display = flex;
    }
    if(!$nombre){
        $warning.textContent = "Usuario en blanco";
        $warning.style.display = flex;
    }
})