// // Ejemplo práctico
// function consultarAPI(endpoint) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (endpoint === "v2/usuarios") {
//         resolve("Datos de usuarios obtenidos");
//       } else {
//         reject("Endpoint no válido");
//       }
//     }, 2000);
//   });
// }

// async function obtenerDatos() {
//   try {
//     const datos = await consultarAPI("v2/usuarios");
//     console.log(datos); // "Datos de usuarios obtenidos"
//   } catch (error) {
//     console.error("Error:", error); // "Endpoint no válido"
//   }
// }

// console.log("inicio");
// obtenerDatos();

// console.log("fin");


//PETICION FETCH

window
  .fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => {
    console.log(response);
    return response.json();
  })
    .then((data) => console.log(data))

