async function obtenerUsuario() {
    //llamo al endpoint
    const url = "https://randomuser.me/api/";
    try {
      // la  peticion fetch que devuelve una promesa
      const response = await window.fetch(url);
      // controlamos el estado de la respuesta
      // si la petición es incorrecta lanzará este error
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      // devuelve el resultado de la peticion parseda
      return await response.json();
      // prevenimos un error interno en la promesa
    } catch (error) {
      console.error("Error en la petición:", error);
    }
  }


//funcion para mostrar 
async function mostrarUsuario() {
  // necesito datos que mostrar
const datos = await obtenerUsuario();
const user = datos.results[0];
console.log(JSON.stringify(datos));

const body = document.querySelector("body");
const image = document.getElementById("userImage");
const $greetings = document.getElementById("greetings");
image.setAttribute("src", user.picture.large);
image.setAttribute("alt", "randomUser");
const usuario = document.getElementById("name").textContent = (user.name.first) + " " + (user.name.last);
const address = document.getElementById("address").textContent = (user.location.city) + "-" + (user.location.state) + ", " + (user.location.postcode);
const phone = document.getElementById("phone").textContent = (user.phone) + " " + (user.email);
const email = document.getElementById("email").textContent.user.email;


}

mostrarUsuario();
