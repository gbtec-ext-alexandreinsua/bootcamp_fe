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

//Declara un fgragmento en cada interacción
const fragment = document.createDocumentFragment();


for (const p of productos) {

  const card = document.createElement("div");
  card.classList.add("card");

  const enlace = document.createElement("a");
  enlace.href = "#";
  //enlace.setAttribute("href", "#");

  const imagen = document.createElement("img");
  imagen.src = p.imagen;
  imagen.alt = p.descripcionImagen;
  //imagen.setAttribute("alt", p.descripcionImagen);

  const nombre = document.createElement("h3");
  nombre.innerText = p.nombre;

  const descripcion = document.createElement("p");
  descripcion.innerText = p.descripcion;

  const precio = document.createElement("p");
  precio.innerText = "Precio $" + p.precio; // 'Precio $${p.precio}';

  //agrego los elementos al enlace
  enlace.appendChild(imagen);
  enlace.appendChild(nombre);
  enlace.appendChild(descripcion);
  enlace.appendChild(precio);
  
  //agrego los enlace a la tarjeta
  card.appendChild(enlace);

  //agrego la tarjeta al fragmento temporal
  fragment.appendChild(card);
}

//agrego el fragmento temporal al wrapper
$wrapper.appendChild(fragment);