<<<<<<< HEAD

let datos;

window
.fetch("https://dog.ceo/api/breeds/image/random")
.then((response) => {
   console.log(response);
   return response.json();
  })
  .then((data) => {
    console.log(data);
  datos = data;
});
console.log({ datos });


=======
/*
EJEMPLO SOBRE COMO REALIZAR UNA PETICIÓN CON FETCH Y MOSTRAR EL RESULTADO EN LA WEB
  */
// función para obtener los datos
async function obtenerdatos() {
  // Necesito una url (la del servidor)
  //se llama endpoint
  const url = "https://dog.ceo/api/breeds/image/random";

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

// funcion para mostrar la imagen
async function mostrarImagen() {
  // necesito datos que mostrar
  const datos = await obtenerdatos();

  const $body = document.querySelector("body");
  // crear un element imagen para asignarle la url de la imagen
  const img = document.createElement("img");
  // le asigno la url al atributo src
  img.setAttribute("src", datos.message);
  // buenas prácticas
  img.setAttribute("alt", "perro");
  //   agrego el elemento al body
  $body.appendChild(img);
}

mostrarImagen();
>>>>>>> development
