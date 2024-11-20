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
    precio: "$10",
  },
  {
    imagen: "./images/producto2.jpg",
    descripcionImagen: "Producto 2",
    nombre: "Producto 2",
    descripcion: "Descripción del producto 2",
    precio: "20€",
  },
  {
    imagen: "./images/producto3.jpg",
    descripcionImagen: "Producto 3",
    nombre: "Producto 3",
    descripcion: "Descripción del producto 3",
    precio: "30€",
  },
  {
    imagen: "./images/producto4.jpg",
    descripcionImagen: "Producto 4",
    nombre: "Producto 4",
    descripcion: "Descripción del producto 4",
    precio: "24€",
  },
  {
    imagen: "./images/producto5.jpg",
    descripcionImagen: "Producto 5",
    nombre: "Producto 5",
    descripcion: "Descripción del producto 5",
    precio: "250€",
  },
  {
    imagen: "./images/producto6.jpg",
    descripcionImagen: "Producto 6",
    nombre: "Producto 6",
    descripcion: "Descripción del producto 6",
    precio: "15€",
  },
];

const $wrapper = document.querySelector(".card-wrapper");
console.log($wrapper);


productos.forEach(producto => {
  
  const $div = document.createElement("div");
  $div.className="card";
  
  const $a = document.createElement("a");
  $a.href = "#";
  
  const $img = document.createElement("img");
  $img.src = producto.imagen;
  $img.alt = producto.descripcionImagen;

  const $h3 = document.createElement("h3");
  $h3.textContent =  producto.nombre;
  
  const $descripcion = document.createElement("p");
  $descripcion.innerText = producto.descripcion;
  
  const $precio = document.createElement("p");
  $precio.innerText = producto.precio;
  
  $wrapper.appendChild($div);
  $div.appendChild($a);
  $a.appendChild($img);
  $a.appendChild($h3);
  $a.appendChild($descripcion);
  $a.appendChild($precio);
})
