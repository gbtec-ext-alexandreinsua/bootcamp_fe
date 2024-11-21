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
    descripcion: "Tazita blanca bonita.",
    precio: 10,
  }, // repetimos lo mismo para todos los productos que faltan
  {
    imagen: "./images/producto2.jpg",
    descripcionImagen: "Producto 2",
    nombre: "Producto 2",
    descripcion: "Mantel cuadrado con rayita en el borde.",
    precio: 20,
  },
  {
    imagen: "./images/producto3.jpg",
    descripcionImagen: "Producto 3",
    nombre: "Producto 3",
    descripcion: "Vela aromatica y cariñosa.",
    precio: 30,
  },
  {
    imagen: "./images/producto4.jpg",
    descripcionImagen: "Producto 4",
    nombre: "Producto 4",
    descripcion: "Juego de 3 velas a pilas.",
    precio: 24,
  },
  {
    imagen: "./images/producto5.jpg",
    descripcionImagen: "Producto 5",
    nombre: "Producto 5",
    descripcion: "Juego de cama individual.",
    precio: 250,
  },
  {
    imagen: "./images/producto6.jpg",
    descripcionImagen: "Producto 6",
    nombre: "Producto 6",
    descripcion: "Mesa blanca auxiliar.",
    precio: 15,
  },
];

const $wrapper = document.querySelector(".card-wrapper"); // con estohacemos referencia al cont. de las tarjetas, el document... selecciono el elemento DOM
// ahi es donde insetaremos las tarjetas dinamicament

// Iterar sobre los productos y crear las tarjetas dinámicamente
for (const producto of productos) {
  // Creo los cada una de los elementos de la tarjeta:
  const card = document.createElement('div');     //   <--   aqui creo el elemento!!!
  card.classList.add("card");                    //    <--   aqui añado el CSS!!! 

                                                   // repetimos todo para cada elemento ----> 
  const enlace = document.createElement('a');
  enlace.href = "#";

  const imagen = document.createElement('img');
  imagen.src = producto.imagen;   // la propiedad src para el valor de la imagen con la ruta. 
  imagen.alt = producto.descripcionImagen;  // la propiedad alt con el texto de la descripción

  const titulo = document.createElement("h3");
  titulo.textContent = producto.nombre;

  const descripcion = document.createElement('p');
  descripcion.textContent = producto.descripcion;

  const precio = document.createElement('p');
  precio.textContent = `Precio: ${producto.precio}€`;

  // Ensamblar tooodos los elemntos a la tarjeta con el appendchild()
  // DATO: el orden en el que lo añadimos si afecta a como se verán dentro del enlace!!!!!! 
  enlace.appendChild(imagen);
  enlace.appendChild(titulo);
  enlace.appendChild(descripcion);
  enlace.appendChild(precio);

  card.appendChild(enlace);  // añadir el enlace como hijo del elemento divcon la clase card 

  $wrapper.appendChild(card); // para pintar las cards 
}