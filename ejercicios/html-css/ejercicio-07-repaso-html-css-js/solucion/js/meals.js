// Importamos las constantes API_URL y BASE_URL desde el archivo utils.js
import { API_URL, BASE_URL } from "./utils.js";

// Función síncrona para mostrar todos los letras
function showAllLetters() {
  const letters = "abcdefghijklmnopqrstuvwxyz".split(""); // mejora con mayúsculas

  const $categories = document.querySelector(".letters");
  const fragment = document.createDocumentFragment();
  const $categoriesTemplate = document.getElementById("letter").content;

  letters.forEach((letter) => {
    const $button = $categoriesTemplate.querySelector("button");
    // Asigno la propiedad data-id a la letra
    $button.setAttribute("data-id", letter);
    $button.textContent = letter.toUpperCase(); // se puede ahorrar 
    fragment.appendChild(document.importNode($categoriesTemplate, true));
  });

  $categories.appendChild(fragment);
}

// Función asíncrona para obtener las comidas de una letra
// por defecto, devuelve las comidas de la letra "a"
async function getMealsByLetter(letter = "a") {
  // Endpoint para obtener las comidas de una letra
  const endpoint = `search.php?f=${letter}`;
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
    const { meals } = await response.json();
    // Devolvemos la comida
    return meals;
  } catch (error) {
    console.error(error);
  }
}

// Función asíncrona para mostrar las comidas de una letra
async function showMealsByLetter(letter) {
  // Obtenemos las comidas de la letra
  const meals = await getMealsByLetter(letter);
  // Seleccionamos el elemento .meals
  const $meals = document.querySelector(".meals");
  // Seleccionamos el elemento .no-meals
  const $noMeals = document.querySelector(".no-meals");

  // Borramos las comidas antiguas
  // y que no se vayan acumulando
  // cuando cambiamos de letra
  deleteOldMeals();

  // Si hay comidas, mostramos las comidas
  if (meals) {
    // Generamos un fragmento
    const fragment = document.createDocumentFragment();
    // Seleccionamos el template de la receta
    const $mealsTemplate = document.getElementById("meal").content;

    // Insertamos las comidas en el fragmento
    meals.forEach((meal) => {
      const $card = $mealsTemplate.querySelector(".card");
      $card.setAttribute("data-id", meal.idMeal);
      $card.querySelector("img").setAttribute("src", meal.strMealThumb);
      $card.querySelector(".name").textContent = meal.strMeal;
      $card.querySelector(".country").textContent = meal.strArea;
      $card.querySelector(".category").textContent = meal.strCategory;
      $card
        .querySelector(".source")
        .setAttribute("href", `${BASE_URL}meal.html?id=${meal.idMeal}`);
      fragment.appendChild(document.importNode($mealsTemplate, true));
    });
    // Ocultamos el elemento .no-meals
    $noMeals.classList.add("hidden");
    // Mostramos las comidas en el elemento .meals
    $meals.appendChild(fragment);
  } else {
    // Mostramos el elemento .no-meals
    // la seccion .meals está vacia
    $noMeals.classList.remove("hidden");
  }
}

// Función síncrona para borrar las comidas antiguas
// y que no se vayan acumulando
function deleteOldMeals() {
  const $cards = document.querySelectorAll(".card");
  $cards.forEach(($card) => {
    $card.remove();
  });
}

// Función asíncrona para agregar eventos a los botones de las letras
function addEventListeners() {
  // Seleccionamos todos los botones de las letras
  const $buttons = document.querySelectorAll(".letter");
  // Añadimos un evento click a cada botón
  $buttons.forEach(($button) => {
    $button.addEventListener("click", async () => {
      const letter = $button.getAttribute("data-id");
      await showMealsByLetter(letter);
    });
  });
}

// Llamamos a las funciones para mostrar  todas las letras
showAllLetters();
// Llamamos a las funciones para agregar eventos a los botones de las letras
addEventListeners();
// Llamamos a la función para mostrar las comidas de una letra
showMealsByLetter();
