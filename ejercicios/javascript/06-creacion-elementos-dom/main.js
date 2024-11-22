/* 
Descripción del ejercio:
Crear dinámicamente tarjetas de productos en la sección Productos destacados utilizando datos provenientes de un JSON.
 Para eso hay que iterar sobre los datos del JSON, crear los elementos HTML correspondientes e insertarlos en el DOM.

Pasos a Seguir:
a. Crea un archivo products.json con los datos de los productos.
b. Usa JavaScript para cargar y procesar el JSON.
c. Genera dinámicamente las tarjetas y añádelas al contenedor .card-wrapper.
*/

// Array de productos
const productos = [
  {
    imagen: "./images/producto1.jpg",
    descripcionImagen: "Taza de café",
    nombre: "Taza de café",
    descripcion: "Taza minimalista perfecta para disfrutar de tu bebida favorita.",
    precio: 10,
  },
  {
    imagen: "./images/producto2.jpg",
    descripcionImagen: "Mesa de madera",
    nombre: "Mesa de madera",
    descripcion: "Mesa robusta de madera para comedor o trabajo.",
    precio: 120,
  },
  {
    imagen: "./images/producto3.jpg",
    descripcionImagen: "Vela aromática",
    nombre: "Vela aromática",
    descripcion: "Vela con aroma a vainilla para ambientar tu espacio.",
    precio: 15,
  },
  {
    imagen: "./images/producto4.jpg",
    descripcionImagen: "Pack de velas",
    nombre: "Pack de velas aromáticas",
    descripcion: "Set de velas con diferentes aromas relajantes.",
    precio: 40,
  },
  {
    imagen: "./images/producto5.jpg",
    descripcionImagen: "Cama moderna",
    nombre: "Cama moderna",
    descripcion: "Cama con diseño minimalista y estructura de madera.",
    precio: 200,
  },
  {
    imagen: "./images/producto6.jpg",
    descripcionImagen: "Mesa minimalista",
    nombre: "Mesa minimalista",
    descripcion: "Mesa compacta y funcional con diseño elegante.",
    precio: 90,
  },
];


const $wrapper = document.querySelector(".card-wrapper");

for (const p of productos) {
  const card = document.createElement("div");
  card.classList.add("card");

  const enlace = document.createElement("a");
  enlace.href = "#";

  const imagen = document.createElement("img");
  imagen.src = p.imagen;
  imagen.alt = p.descripcionImagen;

  const nombre = document.createElement("h3");
  nombre.innerText = p.nombre;

  const descripcion = document.createElement("p");
  descripcion.innerText = p.descripcion;

  const precio = document.createElement("p");
  precio.innerText = `Precio: $${p.precio}`;

  enlace.appendChild(imagen);
  card.appendChild(enlace);
  card.appendChild(nombre);
  card.appendChild(descripcion);
  card.appendChild(precio);

  $wrapper.appendChild(card);
}






