const recipeContainer = document.getElementById("contenedor-de-receta");

//receta aleatoria
async function fetchRandomMeal() {
  const url = "https://www.themealdb.com/api/json/v1/1/random.php";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();
    const meal = await mapMeal(data.meals[0]);

    // Mostrar la receta en el contenedor
    displayMeal(meal);
  } catch (error) {
    console.error("Error fetching the meal:", error);
    recipeContainer.innerHTML = "<p>Failed to load the recipe. Please try again later.</p>";
  }
}

//mapear los datos de la receta
async function mapMeal(meal) {
  const name = meal.strMeal;
  const category = meal.strCategory;
  const cuisine = meal.strArea;
  const imageUrl = meal.strMealThumb;

  return { name, category, cuisine, imageUrl};
}

// Mostrar la receta en el HTML
function displayMeal(meal) {
  const html = `
    <img src="${meal.imageUrl}" alt="${meal.name}" />
    <h4 class="titulo-carta">${meal.name}</h4>
    <div class="especificaciones">
    <p>${meal.cuisine}</p>
    <p class="cursiva">${meal.category}</p>
    </div>
    <a href="./html/meal.html?id=${meal.idMeal}" class="receta-link">View recipe</a>
  `;

  recipeContainer.innerHTML = html;
}

fetchRandomMeal();
