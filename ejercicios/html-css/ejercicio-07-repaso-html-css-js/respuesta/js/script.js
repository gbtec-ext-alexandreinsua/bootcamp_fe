
async function getRandomMeal() {
  const resultsContainer = document.getElementById("mostrarComida");
  resultsContainer.innerHTML = "";

  try {
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
      const data = await response.json();

      if (data.meals) {
          const meal = data.meals[0];
          const mealElement = document.createElement("div");
          mealElement.innerHTML = `
              <img src="${meal.strMealThumb}" alt="${meal.strMeal}" width="350" class="meal-image">
              <p class="meal-title"><strong>${meal.strMeal}</strong></p>
              <div class="meal-info">
              <p>${meal.strArea}</p>
              <p><em>${meal.strCategory}</em></p>
              </div>
              <div class="view-recipe-button-container">
              <button href="#" class="view-recipe-button">View recipe</button>
              </div>
          `;
          resultsContainer.appendChild(mealElement);
      }
  } catch (error) {
      console.error("Error al obtener los datos:", error);
      resultsContainer.innerHTML = "<p>Ocurrió un error al obtener los datos.</p>";
  }
}

/* <p><strong>Instrucciones:</strong> ${meal.strInstructions}</p> */