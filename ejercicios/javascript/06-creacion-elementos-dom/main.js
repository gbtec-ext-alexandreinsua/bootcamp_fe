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
  },
];

const $wrapper = document.querySelector(".card-wrapper");
for(const producto of productos){
  //creo tarjeta("div")
  const card = document.createElement("div");
  card.classList.add("card");

  //creo enlace("a")
  const enlace = document.createElement("a");
  enlace.setAttribute("href", "#");
  enlace.classList.add("card-link");

  //creo imagen("img")
  const imagen = document.createElement("img");
  imagen.setAttribute("src", producto.imagen);
  imagen.setAttribute("alt", producto.descripcionImagen);
  imagen.classList.add("card-img");

  //creo nombre producto(h3)
  const nombreProducto = document.createElement("h3");
  nombreProducto.classList.add("card-title");
  nombreProducto.textContent = producto.nombre;

  //creo descripción("p")
  const descripcion = document.createElement("p");
  descripcion.classList.add("card-description");
  descripcion.textContent = producto.descripcion;

  //creo precio("p")
  const precio = document.createElement("p");
  precio.classList.add("card-price");
  precio.textContent = `Precio: $${producto.precio}`;

  //agregar card al enlace y el enlace a cada elemento.
  card.appendChild(enlace);
  enlace.appendChild(imagen);
  enlace.appendChild(nombreProducto);
  enlace.appendChild(descripcion);
  enlace.appendChild(precio);

  //agregar card al container
  $wrapper.appendChild(card);
}