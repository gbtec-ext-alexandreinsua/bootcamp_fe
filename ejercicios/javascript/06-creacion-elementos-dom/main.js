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

const $wrapper = document.querySelector(".card-wrapper");
// declaro un fragmento que usarlo como paso intermedio en cada iteración
const fragment = document.createDocumentFragment();

// Declaro las constantes fuera del bucle para ahorrar memoria
// optimizar recursos.
// así sólo se crea una vez y se reutiliza en cada iteración

// recorrer un array
for (const p of productos) {
  //creo elementos y le asigno sus propiedades
  const card = document.createElement("div");
  card.classList.add("card"); // card.className = "card" -> igual de valido
  // card.setAttribute("class", "card");

  const enlace = document.createElement("a");
  enlace.setAttribute("href", "#"); // enlace.href = "#"

  const imagen = document.createElement("img");
  imagen.setAttribute("src", p.imagen);
  imagen.setAttribute("alt", p.descripcionImagen); //imagen.alt = p.descripcionImagen; -> igual de válido

  const nombre = document.createElement("h3");
  nombre.innerText = p.nombre;

  const descripcion = document.createElement("p");
  descripcion.innerText = p.descripcion;

  const precio = document.createElement("p");
  precio.innerText = `Precio $${p.precio}`; // "Precio $"+p.precio

  // agrego los elmentos al enlace
  enlace.appendChild(imagen);
  enlace.appendChild(nombre);
  enlace.appendChild(descripcion);
  enlace.appendChild(precio);

  // agrego el enlace a la tarjeta
  card.appendChild(enlace);

  // agrego la tarjeta al fragmento temporal
  fragment.appendChild(card);
}

// agrego el fragmento temporal al wrapper
// 1 sola inserción en el Dom
$wrapper.appendChild(fragment);
