/* 
Descripción del ejercio:
Crear dinámicamente tarjetas de productos en la sección Productos destacados utilizando datos provenientes de un JSON.
 Para eso hay que iterar sobre los datos del JSON, crear los elementos HTML correspondientes e insertarlos en el DOM.

Pasos a Seguir:
a. Crea un archivo products.json con los datos de los productos.
b. Usa JavaScript para cargar y procesar el JSON.
c. Genera dinámicamente las tarjetas y añádelas al contenedor .card-wrapper.
*/

const productos = [
  {
    imagen: "./images/producto1.jpg",
    descripcionImagen: "Producto 1",
    nombre: "Producto 1",
    descripcion: "Descripción del producto 1",
    precio: 10,
  },
  {
    imagen: "./images/producto2.jpg",
    descripcionImagen: "Producto 2",
    nombre: "Producto 2",
    descripcion: "Descripción del producto 2",
    precio: 20,
  },
  {
    imagen: "./images/producto3.jpg",
    descripcionImagen: "Producto 3",
    nombre: "Producto 3",
    descripcion: "Descripción del producto 3",
    precio: 30,
  },
  {
    imagen: "./images/producto4.jpg",
    descripcionImagen: "Producto 4",
    nombre: "Producto 4",
    descripcion: "Descripción del producto 4",
    precio: 24,
  },
  {
    imagen: "./images/producto5.jpg",
    descripcionImagen: "Producto 5",
    nombre: "Producto 5",
    descripcion: "Descripción del producto 5",
    precio: 250,
  },
  {
    imagen: "./images/producto6.jpg",
    descripcionImagen: "Producto 6",
    nombre: "Producto 6",
    descripcion: "Descripción del producto 6",
    precio: 15,
  }
];

const $wrapper = document.querySelector(".card-wrapper");

for (const product of productos) {
  let card = document.createElement("div");
  card.className = "card";
  let anchor = document.createElement("a");
  anchor.href = "#";
  let img = document.createElement("img");
  img.src = product.imagen;
  img.alt = product.descripcionImagen;
  img.height = 150;
  let productTitle = document.createElement("h3");
  productTitle.innerText = product.nombre;
  let p1 = document.createElement("p");
  p1.innerText = product.descripcion;
  let p2 = document.createElement("p");
  p2.innerText = "$"+product.precio;
  card.appendChild(anchor);
  anchor.appendChild(img);
  anchor.appendChild(productTitle);
  anchor.appendChild(p1);
  anchor.appendChild(p2);
  $wrapper.appendChild(card);
}

