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

<<<<<<< HEAD
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
  descripcion.textContent = producto.descripcion;  // la manera correcta no era con este si no con .innerText (en todos :( )

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
=======
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
>>>>>>> development
