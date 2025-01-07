document.addEventListener("DOMContentLoaded", () => {
  // URL de la API para obtener una comida aleatoria
  const apiUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

  // Referencias a los elementos del DOM
  const recipeImage = document.getElementById("random-image");
  const recipeName = document.getElementById("recipe-name");
  const categoryName = document.getElementById("category-name");
  const countryName = document.getElementById("country-name");
  const recipeButton = document.getElementById("recipe-button");

  // Función para obtener una receta aleatoria desde la API
  async function fetchRandomRecipe() {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const meal = data.meals[0]; // receta aleatoria

      // Mostrar la información de la receta
      recipeImage.src = meal.strMealThumb; 
      recipeName.textContent = meal.strMeal; 
      categoryName.textContent = meal.strCategory; 
      countryName.textContent = meal.strArea; 


      recipeButton.onclick = () => {
        window.location.href = `https://www.themealdb.com/meal/${meal.idMeal}`;
      };
    } catch (error) {
      console.error("Error fetching random recipe:", error);
    }
  }

  fetchRandomRecipe();
});
