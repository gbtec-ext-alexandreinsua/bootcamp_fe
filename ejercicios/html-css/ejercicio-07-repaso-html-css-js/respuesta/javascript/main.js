const recipeContainer = document.getElementById("contenedor-de-receta");

// Obtener una receta aleatoria
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

// Mapper para mapear los datos de la receta
async function mapMeal(meal) {
  const name = meal.strMeal;
  const category = meal.strCategory;
  const cuisine = meal.strArea;
  const imageUrl = meal.strMealThumb;
  const sourceUrl = meal.strSource || "#";

  return { name, category, cuisine, imageUrl, sourceUrl };
}

// Mostrar la receta en el HTML
function displayMeal(meal) {
  const html = `
    <img src="${meal.imageUrl}" alt="${meal.name}" />
    <h4>${meal.name}</h4>
    <p><strong>Category:</strong> ${meal.category}</p>
    <p><strong>Cuisine:</strong> ${meal.cuisine}</p>
    <a href="${meal.sourceUrl}" target="_blank" class="receta-link">View full recipe</a>
  `;

  recipeContainer.innerHTML = html;
}

// Ejecutar la función para obtener y mostrar una receta
fetchRandomMeal();
