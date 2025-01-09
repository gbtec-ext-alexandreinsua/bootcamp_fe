// Importamos la constante API_URL
import { API_URL } from "./utils.js";

// Obtenemos el id de la receta desde la URL
const id = window.location.href.match(/\?id=(\w+)$/)?.[1]; // URLSearchParams.get("id")

// Si el id no está presente en la URL, mostramos un mensaje de error
if (!id) {
  window.alert("No se ha encontrado el id de la receta");
}

// Función asíncrona para obtener una receta desde una API
async function getOneMeal(mealId = 53044) {
  // Endpoint para obtener una receta
  const endpoint = `lookup.php?i=${mealId}`;
  // Construcción de la URL completa
  const url = `${API_URL}${endpoint}`;

  // Realizamos una solicitud HTTP a la URL
  try {
    // Realizamos una solicitud HTTP a la URL
    const response = await window.fetch(url);
    // Si la respuesta no es exitosa, lanzamos un error
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    // Parseamos la respuesta JSON para obtener los datos
    // Utilizamos la desetructuración de objetos para acceder a los datos
    const { meals } = await response.json();
    const [meal] = meals;
    // Devolvemos la receta
    return meal;
  } catch (error) {
    // Manejamos cualquier error que ocurra durante la solicitud o procesamiento
    console.error(error);
  }
}

// Función asíncrona para mostrar la receta en el DOM
async function showMeal() {
  // Obtenemos la receta desde la API
  const meal = await getOneMeal(id);
  // Extraemos las instrucciones, ingredientes y etiquetas de la receta
  const instructions = extractInstructions(meal);
  const ingredients = extractIngredients(meal);
  const tags = extractTags(meal);

  // Seleccionamos el elemento card
  const $card = document.querySelector(".card");
  // Generamos un fragmento
  const fragment = document.createDocumentFragment();

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

  // creamos un div para las etiquetas
  const tagsDiv = document.createElement("div");
  tagsDiv.classList.add("tags");
  // insertamos las etiquetas en el div

  tags.forEach((tag) => {
    tagsDiv.innerHTML += `<p>${tag}</p>`;
  });

  // Añadimos el div con las etiquetas al fragmento
  fragment.appendChild(tagsDiv);

  // Creamos un div para los botones
  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("buttons");

  // Creamos un enlace para navegar a la receta original
  const sourceLink = document.createElement("a");
  sourceLink.textContent = "Source";
  sourceLink.classList.add("button");
  sourceLink.setAttribute("href", meal.strSource);
  // Añadimos el enlace al div
  buttonsDiv.appendChild(sourceLink);

  // Creamos un enlace para navegar a la receta original
  const youtubeLink = document.createElement("a");
  youtubeLink.textContent = "Youtube";
  youtubeLink.classList.add("button");
  youtubeLink.setAttribute("href", meal.strYoutube);
  // Añadimos el enlace al fragmento
  buttonsDiv.appendChild(youtubeLink);
  // Añadimos el div con los botones al fragmento
  fragment.appendChild(buttonsDiv);

  $card.appendChild(fragment);

  // Mostramos los ingredientes en el elemento HTML .ingredients
  const $ingredients = document.querySelector(".ingredients");
  ingredients.forEach((ingredient) => {
    const $ingredient = document.createElement("li");
    $ingredient.textContent = `${ingredient.measure} ${ingredient.ingredient}`;
    $ingredients.appendChild($ingredient);
  });

  // Mostramos las instrucciones en el elemento HTML .instructions
  const $instructions = document.querySelector(".instructions");
  instructions.forEach((instruction) => {
    $instructions.innerHTML += instruction + ".<br>";
  });
}

// Función para extraer las instrucciones de una receta
function extractInstructions(meal) {
  // se dividen las instrucciones por punto, retorno de carro o salto de linea
  // y se filtran las instrucciones vacías
  return meal.strInstructions
    .split(/(?:\.\s|\r\n|\n)/)
    .filter((instruction) => !!instruction);
}

// Función para extraer las etiquetas de una receta
function extractTags(meal) {
  //
  return meal.strTags?.split(",") ?? [];
}

// Función para extraer los ingredientes de una receta
// y devolverlos en un array de objetos
// meal es un objeto y puedo acceder a sus propiedades
// con la sintaxist meal['propiedad']
function extractIngredients(meal) {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient?.trim()) {
      ingredients.push({
        ingredient: ingredient.trim(),
        measure: measure.trim() ?? "",
      });
    }
  }

  return ingredients;
}

// Llamamos a la función para mostrar la receta en el DOM
showMeal();
