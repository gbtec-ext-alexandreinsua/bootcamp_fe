/* 
EJERCICIO 27 
Descripción del ejercicio:
Crear dinámicamente tarjetas de productos en la sección Productos destacados utilizando datos provenientes de un JSON.
 Para eso hay que iterar sobre los datos del JSON, crear los elementos HTML correspondientes e insertarlos en el DOM.

Pasos a Seguir:
a. Completar el array products.json con los datos de los productos.
b. Usa JavaScript para cargar y procesar el JSON.
c. Genera dinámicamente las tarjetas y añádelas al contenedor.
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
    descripcionImagen: "Producto 5",
    nombre: "Producto 5",
    descripcion: "Descripción del producto 5",
    precio: 24,
  },
  {
    imagen: "./images/producto5.jpg",
    descripcionImagen: "Producto 5",
    nombre: "Producto 5",
    descripcion: "Descripción del producto 5",
    precio: 25,
  },
  {
    imagen: "./images/producto6.jpg",
    descripcionImagen: "Producto 6",
    nombre: "Producto 6",
    descripcion: "Descripción del producto 6",
    precio: 15,
  },
];

const $wrapper = document.querySelector("card-wrapper");

// Función para cargar datos desde un archivo JSON
async function cargarProductos() {
  try {
    // Fetch para obtener datos del JSON
    const respuesta = await fetch("products.json");
    if (!respuesta.ok) {
      throw new Error("Error al cargar los productos");
    }

    // Convertir la respuesta a JSON
    const productos = await respuesta.json();

    // Llamar a la función para generar tarjetas
    generarTarjetas(productos);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Función para generar las tarjetas dinámicamente
function generarTarjetas(productos) {
  // Selecciona el contenedor de las tarjetas
  const $wrapper = document.querySelector(".card-wrapper");

  if (!$wrapper) {
    console.error("No se encontró el contenedor .card-wrapper");
    return;
  }

  // Iterar sobre los productos y crear elementos HTML
  productos.forEach((producto) => {
    // Crear elementos para la tarjeta
    const $card = document.createElement("div");
    $card.classList.add("card");

    const $link = document.createElement("a");
    $link.href = "#";

    const $img = document.createElement("img");
    $img.src = producto.imagen;
    $img.alt = producto.descripcionImagen;

    const $nombre = document.createElement("h3");
    $nombre.textContent = producto.nombre;

    const $descripcion = document.createElement("p");
    $descripcion.textContent = producto.descripcion;

    const $precio = document.createElement("p");
    $precio.textContent = `Precio: $${producto.precio}`;

    // Armar la tarjeta
    $link.appendChild($img);
    $link.appendChild($nombre);
    $link.appendChild($descripcion);
    $link.appendChild($precio);
    $card.appendChild($link);

    // Agregar la tarjeta al contenedor
    $wrapper.appendChild($card);
  });
}

// Llamar a la función para cargar productos al cargar la página
document.addEventListener("DOMContentLoaded", cargarProductos);
