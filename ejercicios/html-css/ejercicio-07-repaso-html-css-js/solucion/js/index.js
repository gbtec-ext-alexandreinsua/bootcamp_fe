// Importamos las constantes API_URL y BASE_URL desde el archivo utils.js
import { API_URL, BASE_URL } from "./utils.js";

// Función asíncrona para obtener una comida aleatoria desde una API
async function getRandomMeal() {
  const endpoint = "random.php"; // Endpoint para obtener una comida aleatoria
  const url = `${API_URL}${endpoint}`; // Construcción de la URL completa
  try {
    // Realizamos una solicitud HTTP a la URL
    const response = await window.fetch(url);
    if (!response.ok) {
      // Si la respuesta no es exitosa, lanzamos un error
      throw new Error("Something went wrong");
    }
    // Parseamos la respuesta JSON para obtener los datos
    // Utilizamos la desestructuración de objetos para acceder a los datos
    const { meals } = await response.json();
    const [firstMeal] = meals; // Tomamos la primera comida del array
    return firstMeal; // Devolvemos la comida
  } catch (error) {
    // Manejamos cualquier error que ocurra durante la solicitud o procesamiento
    console.error(error);
  }
}

// Función asíncrona para mostrar la comida aleatoria en el DOM
async function showRandomMeal() {
  // Obtenemos una comida aleatoria
  const meal = await getRandomMeal();
  // Creamos un framento
  const fragment = document.createDocumentFragment();

  // Recuparamos el elemento card para insertarle el fragmento
  const $card = document.querySelector(".card");

  // Creamos el elemento de imagen
  const img = document.createElement("img");
  // Actualizamos la URL de la imagen
  img.setAttribute("src", meal.strMealThumb);
  // Actualizamos el texto alternativo de la imagen
  img.setAttribute("alt", meal.strMeal);
  // Añadimos la imagen al fragmento
  fragment.appendChild(img);

  // creamos un p para el nombre
  const name = document.createElement("p");
  // Establecemos la clase
  name.classList.add("name");
  // Establecemos el nombre la comida
  name.textContent = meal.strMeal;
  // Añadimos el p con el nombre al fragmento
  fragment.appendChild(name);

  // creamos un div para los datos
  const data = document.createElement("div");
  data.classList.add("data");

  // creamos un p para el país
  const country = document.createElement("p");
  country.classList.add("country");
  // Establecemos el país de origen de la comida
  country.textContent = meal.strArea;
  // Añadimos el p con el país al div
  data.appendChild(country);

  // creamos un p para la categoría
  const category = document.createElement("p");
  category.classList.add("category");
  // Establecemos la categoría de la comida
  category.textContent = meal.strCategory;
  // Añadimos el p con la categoría al div
  data.appendChild(category);

  // Añadimos el div con los datos al fragmento
  fragment.appendChild(data);

  // Creamos un enlace para navegar a la receta
  const link = document.createElement("a");
  link.textContent = "View recipe";
  link.classList.add("button");
  // Actualizamos el enlace para ver la receta completa
  link.setAttribute("href", `${BASE_URL}meal.html?id=${meal.idMeal}`);
  // Añadimos el link al framento
  fragment.appendChild(link);

  $card.appendChild(fragment);
}

// Llamamos a la función para mostrar una comida aleatoria en la página
showRandomMeal();
